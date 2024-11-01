import type { BrowserWindow } from 'electron';
import createWindow from '../utils/createWindow';

let newWindow: BrowserWindow | undefined;
export function createInitial(): BrowserWindow | undefined {
    if (newWindow) {
        try { newWindow.close(); } catch (e) { console.log("Window was already closed.") }
        newWindow = undefined;
        return;
    }
    newWindow = createWindow({
        component: 'initial',
        width: 800,
        height: 950,
        options: {
            transparent: false,
            frame: true
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
        devTools: true
    });
    return newWindow;
}
