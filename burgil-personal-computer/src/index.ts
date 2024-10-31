import { app, ipcMain } from 'electron';
import createNotifierWindow, { sendNotification } from '../windows/notifierWindow';
import createDisclaimer from '../windows/disclaimerWindow';
import createTray from './tray';
import path from 'node:path';
import CSP from '../utils/csp';
// import bridgeLogs from '../utils/bridge-logs';
// import { createInitial } from '../windows/initialWindow';

const allowedStyles = [ // Download static files and remove from this list in production
    'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
]

const allowedScripts = [
    'https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm/'
];

const allowedFonts = [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/'
];

const allowedConnect = [
    'ws://localhost:49142/',
    'https://huggingface.co/mlc-ai/',
    'https://raw.githubusercontent.com/mlc-ai/',
    'https://cdn-lfs-us-1.hf.co/repos/'
];
app.setPath('sessionData', path.join(app.getAppPath(), 'cache'));
app.whenReady().then(async () => {
    CSP([
        "default-src 'none'",
        `script-src 'self' file: 'unsafe-inline' 'wasm-unsafe-eval' ${allowedScripts.join(' ')}`,
        `style-src 'self' file: 'unsafe-inline' ${allowedStyles.join(' ')}`,
        `font-src 'self' ${allowedFonts.join(' ')}`,
        "img-src 'self' file:",
        "media-src 'self' file: data:",
        `connect-src 'self' ${allowedConnect.join(' ')}`,
    ]);
    createTray();
    // bridgeLogs();
    ipcMain.handle('disclaimer', (_event, _msg) => {
        createDisclaimer();
    });
    await createNotifierWindow();
    // createInitial();
    await sendNotification('Burgil Personal Computer', 'Choosing a name for myself...', 1000);
    // await sendNotification('Burgil Personal Computer', 'Choosing a name for myself...', 1000);
    // createDisclaimer();
    // createPlugins();
});

export default app;
