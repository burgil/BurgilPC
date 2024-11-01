const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  takeScreenshot: (data) => ipcRenderer.invoke('take-screenshot', data),
  showModal: () => ipcRenderer.invoke('show-modal'),
  hideModal: () => ipcRenderer.invoke('hide-modal'),
});
