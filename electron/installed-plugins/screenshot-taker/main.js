const { app, BrowserWindow, ipcMain, desktopCapturer, globalShortcut, screen } = require('electron');
const path = require('node:path');
const fs = require('node:fs');
const { Jimp } = require('jimp');

let win;
ipcMain.handle('hide-modal', async (event, data) => {
  win.setOpacity(0.3);
});
ipcMain.handle('show-modal', async (event, data) => {
  win.setOpacity(0.8);
});
ipcMain.handle('take-screenshot', async (event, { rect, name }) => {
  win.setOpacity(0);
  const screens = await desktopCapturer.getSources({
    types: ['screen'], thumbnailSize: {
      width: 1920,
      height: 1080,
    }
  });
  if (screens.length === 0) {
    console.error('No screens available to capture');
    throw new Error('No screens available to capture');
  }
  const image = screens[0];
  const tempPath = path.join(__dirname, 'temp_screenshot.png'); // app.getPath('temp')
  try {
    const buffer = Buffer.from(image.thumbnail.toPNG());
    fs.writeFileSync(tempPath, buffer);
    console.log('Screenshot saved to:', tempPath);
    if (fs.existsSync(tempPath)) {
      const screenshot = await Jimp.read(tempPath);
      screenshot.crop({
        x: rect.x,
        y: rect.y,
        w: rect.width,
        h: rect.height,
      });
      const screenshot_path = path.join(__dirname, `${name}.png`);
      await screenshot.write(screenshot_path);
      console.log(`Cropped screenshot saved to ${name}.png`);
      return screenshot_path;
    }
    throw new Error(`Screenshot file does not exist at ${tempPath}`);
  } catch (error) {
    console.error('Error taking screenshot:', error);
    throw error;
  }
});

function createWindow() {
  win = new BrowserWindow({
    width: 1920,
    height: 1080,
    x: 0,
    y: 0,
    resizable: false,
    frame: false,
    show: false,
    center: true,
    acceptFirstMouse: true,
    backgroundMaterial: 'none', //('auto' | 'none' | 'mica' | 'acrylic' | 'tabbed'),
    backgroundColor: '#000',
    skipTaskbar: true,
    closable: false,
    opacity: 0,
    fullscreen: true,
    minimizable: false,
    hasShadow: false,
    transparent: false,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  // win.webContents.toggleDevTools();
  win.loadFile('index.html');
  win.webContents.on('did-finish-load', () => {
    win.show();
    win.moveTop();
    win.focus();
    win.setOpacity(0);
    setTimeout(() => {
      win.setOpacity(0.3);
    }, 200);
  });
}

app.commandLine.appendSwitch('wm-window-animations-disabled');
// app.commandLine.appendSwitch('--disable-gpu')
app.commandLine.appendSwitch('--force-gpu-rasterization')
app.commandLine.appendSwitch('--enable-gpu-rasterization')

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('browser-window-focus', () => {
  globalShortcut.register("CommandOrControl+R", () => false);
  globalShortcut.register("F5", () => false);
});

app.on('browser-window-blur', () => {
  globalShortcut.unregister('CommandOrControl+R');
  globalShortcut.unregister('F5');
});
