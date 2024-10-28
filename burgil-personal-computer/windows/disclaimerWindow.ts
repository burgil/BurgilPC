import type { BrowserWindow } from 'electron';
import createWindow from '../utils/createWindow';

let newWindow: BrowserWindow | undefined;
export default function createDisclaimer(): BrowserWindow | undefined {
    if (newWindow) {
        try { newWindow.close(); } catch (e) { console.log("Window was already closed.") }
        newWindow = undefined;
        return;
    }
    newWindow = createWindow({
        component: 'disclaimer',
        width: 800,
        height: 970,
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
    return newWindow;
}
