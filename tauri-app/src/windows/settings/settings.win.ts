import { testWindow } from "@/utils/newWindow";

export default {
    mount: async () => {
        await testWindow('settings');
    },
    unmount: async () => {
    }
}