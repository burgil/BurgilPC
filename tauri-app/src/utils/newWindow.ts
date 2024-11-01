import { Window, getCurrentWindow, getAllWindows, currentMonitor, primaryMonitor, monitorFromPoint, availableMonitors, cursorPosition, type WindowOptions } from "@tauri-apps/api/window";
import { Webview, getCurrentWebview, getAllWebviews, type WebviewOptions } from "@tauri-apps/api/webview";

function newWebview(appWindow: Window, winID: string, options: WebviewOptions) {
    const webview = new Webview(appWindow, winID, options);
    webview.once("tauri://created", () => {
        console.log('newWindow', winID, '-', "WebView created")
    });
    webview.once("tauri://error", (e) => {
        console.log('newWindow', winID, '-', "an error happened creating the webview", e)
    });
    // await webview.emit("some-event", "data");
    // const unlisten = await webview.listen("event-name", (e) => {});
    // unlisten();
}

export default async function newWindow(winID: string, parentWin: boolean | string | Window | undefined, win_options: WindowOptions, web_options: WebviewOptions) {
    const wins = await getAllWindows();
    console.log('newWindow', winID, '-', "wins", wins)
    for (const win of wins) {
        if (win.label === winID) {
            console.log('newWindow', winID, '-', "win already exist");
            const allWebs = await getAllWebviews();
            for (const web of allWebs) {
                if (web.label === winID) {
                    console.log('newWindow', winID, '-', "web view already exist");
                    return;
                }
            }
            newWebview(win, winID, web_options);
            return;
        }
    }
    console.log('newWindow', winID, '-', "doesn't exist, creating win")
    const win = new Window(winID, {
        parent: typeof parentWin === 'boolean' ? (parentWin ? getCurrentWindow() : undefined) : parentWin,
        ...win_options
    });
    win.once('tauri://created', () => {
        console.log('newWindow', winID, '-', "Window created");
        newWebview(win, winID, web_options);
    });
    win.once('tauri://error', (e) => {
        console.log('newWindow', winID, '-', "an error happened creating the window", e);
    });
    win.once('tauri://webview-created', () => {
        console.log('newWindow', winID, '-', "webview-created")
    });
    win.once('tauri://window-created', () => {
        console.log('newWindow', winID, '-', "window-created")
    });
    win.once('tauri://destroyed', () => {
        console.log('newWindow', winID, '-', "destroyed")
    });
}
