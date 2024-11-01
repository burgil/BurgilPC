import path from 'node:path';
import fs from 'node:fs';
import type { BrowserWindow } from 'electron';
import createWindow from '../utils/createWindow';
import app from '../src/index';

let newWindow: BrowserWindow | undefined;
export function createPlugins(): BrowserWindow | undefined {
    if (newWindow) {
        try { newWindow.close(); } catch (e) { console.log("Window was already closed.") }
        newWindow = undefined;
        return;
    }
    newWindow = createWindow({
        component: 'plugins',
        width: 800,
        height: 950,
        options: {
            transparent: false,
        },
        beforeLoad: (window) => {
            window.center();
        },
        beforeScripts: async (window) => {
            const installedPlugins = path.join(app.getAppPath(), 'installed-plugins/plugin-cache.json');
            await window.webContents.executeJavaScript(`window.plugins = ${fs.readFileSync(installedPlugins).toString()};`);
        },
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
