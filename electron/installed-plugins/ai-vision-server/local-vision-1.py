import sys
import cv2
import numpy as np
import concurrent.futures
import time
import os
import pyautogui
from datetime import datetime
from PyQt5.QtCore import Qt, QTimer
from PyQt5.QtGui import QPainter, QBrush, QColor, QPen
from PyQt5.QtWidgets import QApplication, QWidget

class GameOverlay(QWidget):
    def __init__(self):
        super().__init__()

        # Hide the taskbar window for this overlay
        self.setWindowFlags(Qt.FramelessWindowHint | Qt.WindowStaysOnTopHint | Qt.Tool | Qt.WindowTransparentForInput)
        self.setAttribute(Qt.WA_TranslucentBackground)

        screen = QApplication.primaryScreen()
        screen_geometry = screen.geometry()

        screen_width = screen_geometry.width()
        screen_height = screen_geometry.height()

        self.setGeometry(0, 0, screen_width, screen_height)
        self.results = []
        self.show()

    def paintEvent(self, event):
        painter = QPainter(self)
        painter.setRenderHint(QPainter.Antialiasing)

        # Transparent background
        painter.setBrush(QBrush(QColor(0, 0, 0, 0)))
        painter.drawRect(self.rect())

        # Draw detected objects with adjusted labels
        last_y_positions = {}  # To track and adjust y-positions for overlapping labels
        for tpl, percentage, loc, (h, w) in self.results:
            top_left_x, top_left_y = loc
            bottom_right_x = top_left_x + w
            bottom_right_y = top_left_y + h

            # Draw a larger rectangle as a frame
            border_thickness = 4
            painter.setPen(QPen(QColor(0, 255, 0), border_thickness))  # Green border
            painter.setBrush(QBrush(QColor(0, 0, 0, 0)))  # Transparent fill inside the box
            painter.drawRect(top_left_x - 5, top_left_y - 5, w + 10, h + 10)

            # Adjust the y-position for overlapping labels
            label_y = top_left_y - 10
            if top_left_x in last_y_positions:
                label_y = last_y_positions[top_left_x] + 10  # Move the label 10px higher if overlap
            last_y_positions[top_left_x] = label_y

            # Draw the label outside the detection box
            painter.setPen(QColor(255, 255, 255))  # White text
            painter.drawText(top_left_x, label_y, f"{tpl} - {percentage:.2f}%")

def compare_images(template_path):
    template = cv2.imread(template_path)
    h, w, _ = template.shape
    screenshot = pyautogui.screenshot()
    screenshot = cv2.cvtColor(np.array(screenshot), cv2.COLOR_RGB2BGR)
    result = cv2.matchTemplate(screenshot, template, cv2.TM_CCOEFF_NORMED)
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
    return max_val, max_loc, (h, w)

def save_screenshot(screenshot, folder):
    if not os.path.exists(folder):
        os.makedirs(folder)

    # Keep only the last 10 screenshots
    files = sorted([f for f in os.listdir(folder) if f.endswith(".png")])
    if len(files) >= 10:
        os.remove(os.path.join(folder, files[0]))

    # Save the new screenshot with a timestamp
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    screenshot_path = os.path.join(folder, f"screenshot_{timestamp}.png")
    cv2.imwrite(screenshot_path, screenshot)

def update_overlay(overlay):
    overlay.raise_()
    templates = ['trash_bin_icon.png', 'empty_trash_bin.png', 'raise.png']
    num_threads = min(4, concurrent.futures.ThreadPoolExecutor()._max_workers)
    results = []

    start_time = time.time()
    screenshot = pyautogui.screenshot()
    screenshot_np = cv2.cvtColor(np.array(screenshot), cv2.COLOR_RGB2BGR)

    # Save the screenshot (before drawing any overlay or detections)
    save_screenshot(screenshot_np, 'screenshots')

    with concurrent.futures.ThreadPoolExecutor(max_workers=num_threads) as executor:
        future_to_template = {executor.submit(compare_images, tpl): tpl for tpl in templates}
        for future in concurrent.futures.as_completed(future_to_template):
            tpl = future_to_template[future]
            try:
                max_val, max_loc, (h, w) = future.result()
                detection_percentage = max_val * 100
                if detection_percentage >= 94:
                    print(f"Detected: {tpl} at {max_loc} with {detection_percentage:.2f}% confidence. Displayed on overlay.")
                    results.append((tpl, detection_percentage, max_loc, (h, w)))
                else:
                    print(f"Detected: {tpl} at {max_loc} with {detection_percentage:.2f}% confidence. Not displayed.")
            except Exception as e:
                print(f"Error processing {tpl}: {e}")

    overlay.results = results
    overlay.update()

    total_time = time.time() - start_time
    print(f"Detection completed in {total_time:.2f} seconds.")

def main():
    app = QApplication(sys.argv)
    overlay = GameOverlay()

    # Timer to update the overlay periodically
    timer = QTimer()
    timer.timeout.connect(lambda: update_overlay(overlay))
    timer.start(100)  # Update every second

    sys.exit(app.exec_())

if __name__ == '__main__':
    main()
