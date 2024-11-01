import newTray from "../../utils/newTray";
import type { TrayIcon } from "@tauri-apps/api/tray";
// import newWindow from "../utils/newWindow";

let mainTray: TrayIcon;

export default {
    mount: async () => {
        mainTray = await newTray();
        // newWindow();
    },
    unmount: async () => {
        await mainTray.close();
    }
}