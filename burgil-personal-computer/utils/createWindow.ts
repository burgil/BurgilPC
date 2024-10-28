import path from 'node:path';
import { BrowserWindow, type BrowserWindowConstructorOptions } from 'electron';
import newScript from '../utils/newScript';
import app from '../src/index';
import { didBridge } from './bridge-logs';

/**
 * Configuration for creating a new window.
 * @typedef {Object} WindowConfig
 * @property {string} component - The name of the folder in `public/` containing the `.html` and compiled `.js` files.
 * @property {number} width - Window width in pixels.
 * @property {number} height - Window height in pixels.
 * @property {BrowserWindowConstructorOptions} options - Additional `BrowserWindow` options like frame, transparency, etc.
 * @property {(window: BrowserWindow) => void | Promise<void>} beforeLoad - Optional callback before the window loads content; supports async.
 * @property {(window: BrowserWindow) => void | Promise<void>} beforeScripts - Optional callback after content loads but before scripts are injected; supports async.
 * @property {(window: BrowserWindow) => void | Promise<void>} afterLoad - Optional callback after window and scripts have fully loaded; supports async.
 * @property {() => void | Promise<void>} closed - Optional callback upon window closure; supports async.
 * @property {boolean} devTools - If `true`, opens Developer Tools.
 */

type WindowConfig = {
    component: string;
    width?: number;
    height?: number;
    options?: BrowserWindowConstructorOptions;
    beforeLoad?: (window: BrowserWindow) => void | Promise<void>;
    beforeScripts?: (window: BrowserWindow) => void | Promise<void>;
    afterLoad?: (window: BrowserWindow) => void | Promise<void>;
    closed?: () => void | Promise<void>;
    devTools?: boolean;
};

/**
 * Creates and configures a new Electron `BrowserWindow` with lifecycle callbacks, dynamic content loading, and optional Developer Tools support.
 *
 * ### Important: Background App Behavior
 * By design, this function supports background operations by removing the default quit behavior on all-window close:
 * ```typescript
 * // app.on('window-all-closed', () => {
 * //     if (process.platform !== 'darwin') app.quit();
 * // });
 * ```
 * Essential for background apps or services that need to persist without a visible window.
 *
 * @function createWindow
 * @param {WindowConfig} config - Configuration options for the window.
 * @returns {BrowserWindow} - The created `BrowserWindow` instance.
 *
 * ### Setup Steps
 * #### Manual Creation:
 * 1. **Create Component Folder**:
 *    - Inside `public/`, make a folder with the desired component name.
 * 2. **Generate HTML, TypeScript, and CSS Files**:
 *    - Add `.html` and `.ts` files with the component name, e.g., `example.html`, `example.ts`.
 *    - Link an optional `.css` file directly in the HTML file (e.g., `<link rel="stylesheet" href="example.css">`).
 * 3. **Add Window Script**:
 *    - Create a new script in `windows/`, such as `exampleWindow.ts`, to manage this specific window using `createWindow`.
 *
 * #### Automating Creation with `new-win`:
 * For faster window setup, an automated script is available.
 *
 * ##### Using the Automation Script
 * 1. **Run the Command**:
 *    - Add `new-win` to your `package.json` scripts and run: `bun new-win`.
 * 2. **Provide Window Name**:
 *    - The script prompts for the new window name and performs basic validation to avoid overwriting existing components.
 * 3. **Automated File Generation**:
 *    - Automatically creates the required files and directories in `public/` and `windows/`.
 *    - Produces starter code for `html`, `ts`, and `css` files for the window.
 * 4. **Output Instructions**:
 *    - After setup, instructions for invoking the new window (step 6 in manual setup) are displayed, with a reminder to call it from `index.ts` or other app functions like tray actions.
 *
 * #### Example Window Script (exampleWindow.ts):
 * ```typescript
 * import type { BrowserWindow } from 'electron';
 * import createWindow from '../utils/createWindow';
 *
 * let newWindow: BrowserWindow | undefined;
 * export function createExample(): BrowserWindow | undefined {
 *     if (newWindow) {
 *         try { newWindow.close(); } catch (e) { console.log("Window was already closed."); }
 *         newWindow = undefined;
 *         return;
 *     }
 *     newWindow = createWindow({
 *         component: 'example',
 *         width: 800,
 *         height: 800,
 *         beforeLoad: (window) => { window.center(); },
 *         afterLoad: (window) => { window.show(); window.focus(); window.moveTop(); },
 *         closed: () => { newWindow = undefined; },
 *         devTools: false,
 *     });
 *     return newWindow;
 * }
 * ```
 *
 * ### Example
 * ```typescript
 * const myWindow = createWindow({
 *   component: 'exampleComponent',
 *   width: 800,
 *   height: 600,
 *   options: { resizable: true },
 *   beforeLoad: (window) => { window.center(); },
 *   afterLoad: (window) => { window.show(); window.focus(); },
 *   closed: () => { console.log("Window closed."); },
 *   devTools: true,
 * });
 * ```
 * 
 * #### Additional Usage (Manual or Automated):
 * - **Integrate Window Call**: Call `createExample()` at app ready state or from the tray.
 * - **Customize Appearance**: Adjust parameters like `width`, `height`, and `options` for each new window instance.
 * 
 * @description
 * The `createWindow` function serves as a versatile window manager for Electron apps, supporting dynamic loading, lifecycle events, and a custom automation script to streamline window creation. Each callback supports async, giving you flexibility for loading, scripting, and resource management.
 * 
 * ### Lifecycle Callbacks
 * - **beforeLoad**: Runs before the main content loads; often used for initial configurations.
 * - **beforeScripts**: Fires after content load, before scripts execute.
 * - **afterLoad**: Executed post-load, suitable for final window display adjustments.
 * - **closed**: Triggers upon window closure, ideal for cleanup.
 * 
 * Each callback supports asynchronous operations.
 */

export default function createWindow({
    component,
    width = 500,
    height = 500,
    options = {},
    beforeLoad,
    beforeScripts,
    afterLoad,
    closed,
    devTools = false
}: WindowConfig): BrowserWindow {
    const newWindow = new BrowserWindow({
        width,
        height,
        frame: false,
        transparent: true,
        show: false,
        alwaysOnTop: false,
        skipTaskbar: false,
        resizable: false,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'out/utils/bridge.js'),
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true
        },
        ...options,
    });
    (async () => {
        if (beforeLoad) {
            if (beforeLoad.constructor.name === "AsyncFunction") {
                await beforeLoad(newWindow);
            } else {
                beforeLoad(newWindow);
            }
        }
        newWindow.webContents.on('did-finish-load', async () => {
            if (beforeScripts) {
                if (beforeScripts.constructor.name === "AsyncFunction") {
                    await beforeScripts(newWindow);
                } else {
                    beforeScripts(newWindow);
                }
            }
            await newWindow.webContents.executeJavaScript('var exports = {};');
            if (didBridge) await newWindow.webContents.executeJavaScript(newScript(path.join(app.getAppPath(), 'out/public/web/console.js').replace(/\\/g, '/')));
            await newWindow.webContents.executeJavaScript(newScript(path.join(app.getAppPath(), `out/public/${component}/${component}.js`).replace(/\\/g, '/')));
            await newWindow.webContents.executeJavaScript("document.body.appendChild(Object.assign(document.createElement('script'), { type: 'module', src: `../../out/hotreload.js?t=${Date.now()}`, id: 'hotreload-script' }));");
            if (afterLoad) {
                if (afterLoad.constructor.name === "AsyncFunction") {
                    await afterLoad(newWindow);
                } else {
                    afterLoad(newWindow);
                }
            }
            if (devTools) setTimeout(() => { newWindow?.webContents.openDevTools({ mode: "detach", activate: true, }); }, 1000);
        });
        await newWindow.loadFile(path.join(app.getAppPath(), `public/${component}/${component}.html`));
    })();
    newWindow.once('closed', async () => {
        if (closed) {
            if (closed.constructor.name === "AsyncFunction") {
                await closed();
            } else {
                closed();
            }
        }
    });
    return newWindow;
}
