<script lang="ts">
  import { onDestroy } from "svelte";
  import tray from "../utils/tray.svelte";
  import type { TrayIcon } from "@tauri-apps/api/tray";
  import { Window, getCurrentWindow } from "@tauri-apps/api/window";
  import { Webview } from "@tauri-apps/api/webview";

  function newWindow() {
    const currWindow = getCurrentWindow()
    const appWindow = new Window("main87", {
      width: 100,
      height: 100,
      parent: currWindow
    });
    const webview = new Webview(appWindow, 'main87', {
      url: "https://github.com/tauri-apps/tauri", // 'app.html',
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    });
    webview.once("tauri://created", function () {
      console.log("webview successfully created")
    });
    webview.once("tauri://error", function (e) {
      console.log("an error happened creating the webview", e)
    });
    // await webview.emit("some-event", "data");
    // const unlisten = await webview.listen("event-name", (e) => {});
    // unlisten();
  }

  let mainTray: TrayIcon;
  async function mount() {
    mainTray = await tray.mount();
    newWindow();
  }
  mount();
  onDestroy(async () => {
    await tray.unmount(mainTray);
  });
</script>

<h1>yos2sssssssssssssSsssdss45ss</h1>
