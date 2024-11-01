import { TrayIcon } from "@tauri-apps/api/tray";
import { defaultWindowIcon } from "@tauri-apps/api/app";
import { Menu } from "@tauri-apps/api/menu";

export default async function newTray(): Promise<TrayIcon> {
  const menu = await Menu.new({
    items: [
      {
        id: "quit",
        text: "Quit",
        action: (itemId: string) => {
          console.log(itemId, "quit pressed");
        },
      },
    ],
  });
  const defaultIcon = await defaultWindowIcon();
  const tray = await TrayIcon.new({
    icon: defaultIcon ?? undefined,
    menu,
    menuOnLeftClick: true,
    action: (event: any) => {
      switch (event.type) {
        case "Click":
          // console.log(`mouse ${event.button} button pressed, state: ${event.buttonState}`);
          break;
        case "DoubleClick":
          // console.log(`mouse ${event.button} button pressed`);
          break;
        case "Enter":
          // console.log(`mouse hovered tray at ${event.rect.position.x}, ${event.rect.position.y}`);
          break;
        case "Move":
          // console.log(`mouse moved on tray at ${event.rect.position.x}, ${event.rect.position.y}`);
          break;
        case "Leave":
          // console.log(`mouse left tray at ${event.rect.position.x}, ${event.rect.position.y}`);
          break;
      }
    },
  });
  return tray;
}
