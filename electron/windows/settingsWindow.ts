import { ipcMain, type BrowserWindow } from 'electron';
import createWindow from '../utils/createWindow';

let registeredHandlers = false;
let newWindow: BrowserWindow | undefined;
export function createSettings(): BrowserWindow | undefined {
    if (newWindow) {
        try { newWindow.close(); } catch (e) { console.log("Window was already closed.") }
        newWindow = undefined;
        return;
    }
    newWindow = createWindow({
        component: 'settings',
        width: 500,
        height: 500,
        options: {

        },
        beforeLoad: (window) => {
            window.center();
        },
        beforeScripts: undefined,
        afterLoad: (window) => {
            window.show();
            window.focus();
            window.moveTop();
        },
        closed: () => {
            newWindow = undefined;
        },
        devTools: false
    });
    if (registeredHandlers) return;
    registeredHandlers = true;
    ipcMain.handle('resize', (_event, resizeMessage) => {
        if (resizeMessage.page === 'settings' && newWindow) {
            newWindow.setBounds({ width: resizeMessage.width, height: resizeMessage.height });
            // newWindow.center();
        }
    });
    return newWindow;
}
