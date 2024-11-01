import newTray from "@/utils/newTray";
import type { TrayIcon } from "@tauri-apps/api/tray";

let mainTray: TrayIcon;

export default {
    mount: async () => {
        mainTray = await newTray();
    },
    unmount: async () => {
        await mainTray.close();
    }
}