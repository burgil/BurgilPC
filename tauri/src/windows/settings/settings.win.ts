import { testWindow } from "@/utils/newWindow";

export default {
    mount: async () => {
        const settings = await testWindow('settings');
        setInterval(() => {
            console.log("sending")
            settings.webview.emit("message", "test");
        }, 4000)
    },
    unmount: async () => {
    }
}