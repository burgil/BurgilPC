import sys
import cv2
import numpy as np
import threading
import time
import os
import pyautogui
from datetime import datetime
from flask import Flask, request, jsonify
from PyQt5.QtCore import Qt, QTimer
from PyQt5.QtGui import QPainter, QBrush, QColor, QPen
from PyQt5.QtWidgets import QApplication, QWidget

app = Flask(__name__)

# Global control variables
overlay_shown = True
detection_threshold_global = 94
update_interval = 1  # Default is 1 second
templates = {'trash_bin_icon.png': 94, 'empty_trash_bin.png': 94}  # Template-specific thresholds
results = []
stop_signal = False

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

def perform_detection():
    """Perform the image detection based on templates and return results."""
    detection_results = []
    screenshot = pyautogui.screenshot()
    screenshot_np = cv2.cvtColor(np.array(screenshot), cv2.COLOR_RGB2BGR)
    
    for tpl, threshold in templates.items():
        template_img = cv2.imread(tpl)
        if template_img is not None:
            max_val, max_loc, (h, w) = compare_images(tpl)
            detection_percentage = max_val * 100
            if detection_percentage >= threshold:
                detection_results.append((tpl, detection_percentage, max_loc, (h, w)))

    return detection_results

def detection_cycle(overlay):
    global results, stop_signal
    while not stop_signal:
        if overlay_shown:
            results = perform_detection()
            overlay.results = results
            overlay.update()
        time.sleep(update_interval)

# Background detection thread
def start_detection_thread(overlay):
    detection_thread = threading.Thread(target=detection_cycle, args=(overlay,))
    detection_thread.start()
    return detection_thread

@app.route('/show_overlay', methods=['POST'])
def show_overlay():
    global overlay_shown
    overlay_shown = True
    return jsonify({"status": "Overlay shown"})

@app.route('/hide_overlay', methods=['POST'])
def hide_overlay():
    global overlay_shown
    overlay_shown = False
    return jsonify({"status": "Overlay hidden"})

@app.route('/adjust_detection_range', methods=['POST'])
def adjust_detection_range():
    global detection_threshold_global
    data = request.json
    if 'global_threshold' in data:
        detection_threshold_global = data['global_threshold']
    if 'template_thresholds' in data:
        for template, threshold in data['template_thresholds'].items():
            templates[template] = threshold
    return jsonify({"status": "Detection range adjusted"})

@app.route('/change_update_interval', methods=['POST'])
def change_update_interval():
    global update_interval
    data = request.json
    update_interval = data.get('interval', 1)
    return jsonify({"status": "Update interval changed"})

@app.route('/add_template', methods=['POST'])
def add_template():
    data = request.json
    template_path = data.get('template_path')
    detection_range = data.get('detection_range', detection_threshold_global)
    if os.path.exists(template_path):
        templates[template_path] = detection_range
        return jsonify({"status": f"Template {template_path} added"})
    return jsonify({"error": "Template not found"}), 400

@app.route('/remove_template', methods=['POST'])
def remove_template():
    data = request.json
    template_path = data.get('template_path')
    if template_path in templates:
        del templates[template_path]
        return jsonify({"status": f"Template {template_path} removed"})
    return jsonify({"error": "Template not found"}), 400

@app.route('/get_coords', methods=['POST'])
def get_coords():
    data = request.json
    template_path = data.get('template_path')
    if template_path in templates:
        # Perform detection for the specific template
        max_val, max_loc, (h, w) = compare_images(template_path)
        detection_percentage = max_val * 100
        if detection_percentage >= templates.get(template_path, detection_threshold_global):
            return jsonify({"coords": max_loc, "confidence": detection_percentage})
    return jsonify({"error": "Template not found or below threshold"}), 400

@app.route('/capture_screenshot', methods=['POST'])
def capture_screenshot():
    data = request.json
    template_path = data.get('template_path')
    screenshot_folder = 'outputs'
    if not os.path.exists(screenshot_folder):
        os.makedirs(screenshot_folder)
    
    if template_path in templates:
        # Perform detection for the specific template
        max_val, max_loc, (h, w) = compare_images(template_path)
        detection_percentage = max_val * 100
        if detection_percentage >= templates.get(template_path, detection_threshold_global):
            # Save the screenshot with detections
            screenshot = pyautogui.screenshot()
            screenshot_np = cv2.cvtColor(np.array(screenshot), cv2.COLOR_RGB2BGR)
            cv2.rectangle(screenshot_np, max_loc, (max_loc[0] + w, max_loc[1] + h), (0, 255, 0), 2)
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            screenshot_path = os.path.join(screenshot_folder, f"screenshot_{timestamp}.png")
            cv2.imwrite(screenshot_path, screenshot_np)
            return jsonify({"screenshot_path": screenshot_path, "coords": max_loc, "confidence": detection_percentage})
    return jsonify({"error": "Template not found or below threshold"}), 400

@app.route('/stop', methods=['POST'])
def stop_app():
    global stop_signal
    stop_signal = True
    return jsonify({"status": "App stopped"})

def main():
    app_thread = threading.Thread(target=lambda: app.run(port=5000))
    app_thread.start()
    
    qt_app = QApplication(sys.argv)  # Renamed from app to qt_app
    overlay = GameOverlay()

    # Start the detection cycle in a separate thread
    detection_thread = start_detection_thread(overlay)

    sys.exit(qt_app.exec_())  # Use qt_app instead of app

if __name__ == '__main__':
    main()
