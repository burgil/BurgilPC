import { contextBridge, ipcRenderer } from 'electron/renderer';

contextBridge.exposeInMainWorld('electronAPI', {
    IPC: (key: string, msg: All | ((args: All[]) => void)) => {
        if (typeof msg === 'function') {
            ipcRenderer.on(key, (_event, ...args: (All)[]) => msg([...args]));
        } else {
            ipcRenderer.invoke(key, msg);
        }
    }
});
