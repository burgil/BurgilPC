import path from 'node:path';
import { Menu, Tray } from 'electron';
import { createSettings } from '../windows/settingsWindow';
import createDisclaimer from '../windows/disclaimerWindow';
import { createInitial } from '../windows/initialWindow';
import { createPlugins } from '../windows/pluginsWindow';
import app from ".";

export default function createTray() {
    const logoPath = path.join(app.getAppPath(), 'logo/logo.png');
    const logoOffPath = path.join(app.getAppPath(), 'logo/logo-off.png');
    let isOn = true;
    const tray = new Tray(logoPath);
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'AI',
            click: () => {
                createInitial();
            }
        },
        {
            label: 'Plugins Marketplace',
            click: () => {
                createPlugins();
            }
        },
        {
            label: 'Disclaimer',
            click: () => {
                createDisclaimer();
            }
        },
        {
            label: 'Settings',
            click: () => {
                createSettings();
            }
        },
        { label: 'Exit', click: () => app.quit() }
    ]);
    tray.setToolTip('Burgil Personal Computer');
    // tray.setContextMenu(contextMenu);
    tray.popUpContextMenu(contextMenu);
    tray.closeContextMenu();
    tray.on("right-click", (_event, _bounds) => {
        setTimeout(() => {
            tray.popUpContextMenu(contextMenu);
        }, 100);
    });
    // tray.setIgnoreDoubleClickEvents(true)
    let debounceTray: Timer | undefined;
    tray.on("click", (_event, _bounds) => {
        if (debounceTray) {
            clearTimeout(debounceTray);
            debounceTray = undefined;
        }
        debounceTray = setTimeout(() => {
            if (isOn) {
                tray.setImage(logoOffPath);
                isOn = false;
            } else {
                tray.setImage(logoPath);
                isOn = true;
            }
        }, 300);
    });
    tray.on("double-click", (_event, _bounds) => {
        if (debounceTray) {
            clearTimeout(debounceTray);
            debounceTray = undefined;
        }
        createInitial();
    });
}