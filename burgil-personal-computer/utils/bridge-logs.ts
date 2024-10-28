import { ipcMain } from "electron";
export let didBridge = false;

export default function bridgeLogs() {
    didBridge = true;
    ipcMain.handle('log', (_event, message) => { // Bridges between console logs and errors with the terminal
        console.log("> ", message);
    });
    ipcMain.handle('log-error', (_event, errorMessage) => {
        console.error("! ", errorMessage);
    });
}