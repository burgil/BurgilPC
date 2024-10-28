import { type BrowserWindow, ipcMain, screen } from 'electron';
import createWindow from '../utils/createWindow';

const notificationSize = 82; // Read only
const notifierWindowWidth = 422; // Read only
let notifierWindowHeight = 0;
let notifierWindowVisble = false;
let cancelledNotifications: string[] = [];
let registeredHandlers = false;
let newWindow: BrowserWindow | undefined;

export default async function createNotifierWindow() {
    if (newWindow) {
        try { newWindow.close(); } catch (e) { console.log("Window was already closed.") }
        newWindow = undefined;
        return;
    }
    let didResolve = false; // IPC "ready" can be called multiple times from hotreload
    await new Promise((resolveWindow) => {
        const { width } = screen.getPrimaryDisplay().workAreaSize;
        newWindow = createWindow({
            component: 'notifier',
            width: notifierWindowWidth,
            height: 100,
            options: {
                x: (width / 2) - (notifierWindowWidth / 2),
                y: 5,
                alwaysOnTop: true,
                skipTaskbar: true,
                thickFrame: false,
                minHeight: 0,
            },
            beforeLoad: undefined,
            beforeScripts: undefined,
            afterLoad: undefined,
            closed: () => {
                newWindow = undefined;
            },
            devTools: false
        });
        if (registeredHandlers) return;
        registeredHandlers = true;
        ipcMain.handle('ready', async (_event, _msg) => {
            if (!didResolve) {
                didResolve = true;
                resolveWindow(true);
            }
        });
        ipcMain.handle('cancel-notification-early', async (_event, msg) => {
            if (cancelledNotifications.includes(msg.id)) return;
            cancelledNotifications.push(msg.id);
            notifierWindowHeight -= notificationSize; // Adjust window size to account for the removal of the notification - with the 0 as the minimum window height
            if (notifierWindowHeight < 0) notifierWindowHeight = 0;
            if (notifierWindowHeight === 0) {
                newWindow?.hide();
                notifierWindowVisble = false;
            }
            newWindow?.setBounds({ height: notifierWindowHeight });
        });
        ipcMain.handle('notify', (_event, notifyMessage) => { // Currently when a button in the settings page is pressed, this is being triggered
            sendNotification(notifyMessage.title, notifyMessage.text, notifyMessage.duration);
        });
    });
}

export async function sendNotification(title: string, text: string, duration = 0) {
    await new Promise((resolveNotify) => {
        const { height } = screen.getPrimaryDisplay().workAreaSize;
        notifierWindowHeight += notificationSize; // Adjust window size to account for the new notification - with the window height as the maximum window height
        if (notifierWindowHeight > height) notifierWindowHeight = height;
        newWindow?.setBounds({ height: notifierWindowHeight });
        if (!notifierWindowVisble) {
            newWindow?.show();
            notifierWindowVisble = true;
        }
        const message = { title, text, duration, id: `${Date.now()}_${Math.random()}` };
        message.duration += Math.max(3000, message.text.length * 100); // Duration based on text length
        newWindow?.webContents.send('new-message', message);
        setTimeout(() => {
            if (cancelledNotifications.includes(message.id)) {
                cancelledNotifications = cancelledNotifications.filter((id) => id !== message.id);
                resolveNotify(true);
                return;
            }
            notifierWindowHeight -= notificationSize; // Adjust window size to account for the removal of the notification - with the 0 as the minimum window height
            if (notifierWindowHeight < 0) notifierWindowHeight = 0;
            if (notifierWindowHeight === 0) {
                newWindow?.hide();
                notifierWindowVisble = false;
            }
            newWindow?.setBounds({ height: notifierWindowHeight });
            resolveNotify(true);
        }, message.duration + 300);
    });
}
