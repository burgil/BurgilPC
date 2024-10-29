# Usage

## Development Commands

- **Start Server**: Run `bun start` to initialize both frontend and backend hot reloading.
- **Open New Window**: Use `bun run new-win` to open a new window. Each window is managed independently, allowing flexible UI design.
- **Build**: Follow these steps for production:
  - **Build TypeScript**: `bun run build:typescript`
  - **Build Tailwind CSS**: `bun run build:tailwind`
  - **Package the App**: Compile and package using Electron Builder:

    ```bash
    bun run builder
    ```

- **Hot Reload**: Use `bun start` to initialize the dual hot reload server. It monitors changes in both backend and frontend code for a smooth development workflow.
- **Creating New Windows**: The `bun run new-win` script simplifies the opening of new application windows. Each window operates independently, allowing for modular and customizable UI layouts.

- **Hot Reload**: Run `bun start` to initiate a dual hot reload server. This setup will monitor changes in both backend and frontend code, automatically refreshing as you develop.
- **Creating New Windows**: Use the `bun new-win` script to open new application windows easily. Each window is managed independently, allowing a modular UI experience.
