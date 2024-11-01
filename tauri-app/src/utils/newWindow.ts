import { Window, getCurrentWindow, getAllWindows, currentMonitor, primaryMonitor, monitorFromPoint, availableMonitors, cursorPosition, type WindowOptions } from "@tauri-apps/api/window";
import { Webview, getCurrentWebview, getAllWebviews, type WebviewOptions } from "@tauri-apps/api/webview";

type NewWindow = { window: Window, webview: Webview };
export type {
    Window,
    Webview,
    NewWindow
};

/*
Usage Example:
// import type { Window, Webview, NewWindow } from "@/utils/newWindow";
// import newWindow, { testWindow } from "@/utils/newWindow";
*/
export async function testWindow(name: string): Promise<NewWindow> {
    return await newWindow(name, false, {
        width: 500,
        height: 500,
    }, {
        url: name,
        width: 500,
        height: 500,
        x: 0,
        y: 0,
    });
}

async function newWebview(appWindow: Window, winID: string, options: WebviewOptions): Promise<Webview> {
    return new Promise((resolve, reject) => {
        const webview = new Webview(appWindow, winID, options);
        webview.once("tauri://created", () => {
            console.log('newWindow', winID, '-', "WebView created")
            resolve(webview);
        });
        webview.once("tauri://error", (e) => {
            console.log('newWindow', winID, '-', "an error happened creating the webview", e)
            reject(`newWindow ${winID} - an error happened creating the webview: ${e}`);
        });
        // await webview.emit("some-event", "data");
        // const unlisten = await webview.listen("event-name", (e) => {});
        // unlisten();
    });
}

export default async function newWindow(winID: string, parentWin: boolean | string | Window | undefined, win_options: WindowOptions, web_options: WebviewOptions): Promise<NewWindow> {
    const windows = await getAllWindows();
    console.log('newWindow', winID, '-', "windows", windows)
    for (const window of windows) {
        if (window.label === winID) {
            console.log('newWindow', winID, '-', "win already exist");
            const webviews = await getAllWebviews();
            for (const webview of webviews) {
                if (webview.label === winID) {
                    console.log('newWindow', winID, '-', "web view already exist");
                    return { window, webview };
                }
            }
            const webview = await newWebview(window, winID, web_options);
            return { window, webview };
        }
    }
    return new Promise((resolve, reject) => {
        console.log('newWindow', winID, '-', "creating win")
        let finished = false;
        let timeout = false;
        setTimeout(() => {
            if (!finished) {
                timeout = true;
                reject(`newWindow ${winID} - timed out after 3s`);
            }
        }, 3000);
        const window = new Window(winID, {
            parent: typeof parentWin === 'boolean' ? (parentWin ? getCurrentWindow() : undefined) : parentWin,
            ...win_options
        });
        window.once('tauri://created', async () => {
            if (timeout || finished) return;
            finished = true;
            console.log('newWindow', winID, '-', "Window created");
            try {
                const webview = await newWebview(window, winID, web_options);
                resolve({ window, webview });
            } catch (e) {
                reject(e);
            }
        });
        window.once('tauri://error', (e) => {
            if (timeout || finished) return;
            finished = true;
            console.log('newWindow', winID, '-', "an error happened creating the window", e);
            reject(`newWindow ${winID} - an error happened creating the window: ${e}`);
        });
        window.once('tauri://webview-created', () => {
            if (timeout) return;
            console.log('newWindow', winID, '-', "webview-created")
        });
        window.once('tauri://window-created', () => {
            if (timeout) return;
            console.log('newWindow', winID, '-', "window-created")
        });
        window.once('tauri://destroyed', () => {
            if (timeout) return;
            console.log('newWindow', winID, '-', "destroyed")
        });
    });
}
