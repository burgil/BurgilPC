import { onDestroy } from 'svelte';
import { emit, listen } from "@tauri-apps/api/event";
const unlistens: (() => void)[] = [];

export default {
    init: () => {
        onDestroy(() => {
            for (const unlisten of unlistens) {
                unlisten();
            }
        });
    },
    listen: async (listenChannelID: string, listenCallback: (payload: unknown) => void) => {
        const unlisten = await listen(listenChannelID, (event) => listenCallback(event.payload));
        unlistens.push(unlisten);
    },
    send: async (event: string, payload?: unknown) => {
        emit(event, payload);
    }
}
