import newWindow from "../../utils/newWindow";

export default {
    mount: async () => {
        await newWindow('settings', false, {
            width: 500,
            height: 500,
        }, {
            url: 'settings',
            width: 500,
            height: 500,
            x: 0,
            y: 0,
        });
    },
    unmount: async () => {
    }
}