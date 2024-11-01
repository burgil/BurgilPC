import { onDestroy } from "svelte";

export default function importer(path: string): string {
    const parsedPath = new URL(path).pathname;
    const currentFileName = `${parsedPath.replace(".svelte", "")}.ts`;
    const parsedFileName = parsedPath.split('/');
    const cleanFileName = parsedFileName[parsedFileName.length - 1];
    const unmounts: (() => void)[] = [];
    import(/*@vite-ignore*/ currentFileName)
        .then((module) => {
            const win = module.default;
            console.log(`Loaded ${cleanFileName}`);
            win.mount();
            unmounts.push(win.unmount);
        })
        .catch((err) => {
            console.error("Failed to load module:", err);
        });
    onDestroy(() => {
        for (const unmount of unmounts) {
            unmount();
        }
    });
    return cleanFileName;
}

// In case this break production builds:
// <!-- <script lang="ts">
// import { onMount, onDestroy } from "svelte";
// import win from "./settings.win";
// onMount(win.mount);
// onDestroy(win.unmount);
// </script> -->
