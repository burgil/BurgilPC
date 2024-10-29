# Project Structure

The project has a well-organized project with several important components:

- **src/**: Main application source files in TypeScript.
- **`src`**: Likely the main source folder with core TypeScript files like `index.ts` and `tray.ts`.
- **`src`**: Core application code, including main files like `index.ts` and `tray.ts`.
- **src**: Main source code, including core logic and modular window management.
- **src**: Core application files.

- **public/**: Contains UI assets (HTML, CSS, JS/TS) including styled components and user interactions.
- **`public`**: Contains multiple subdirectories for UI components, such as `disclaimer`, `initial`, `notifier`, `plugins`, `settings`, and `web`, each with HTML, CSS, and TypeScript files.
- **`public`**: Contains multiple subdirectories (`disclaimer`, `initial`, `notifier`, `plugins`, `settings`, and `web`) for individual UI components, each with its HTML, CSS, and TypeScript files.
- **Public**: HTML, CSS, and TypeScript assets for UI components.
- **public**: Static assets such as images, fonts, and CSS, actively watched for hot-reload.
- **public**: Static assets, monitored for live updates.

- **utils/**: Helper modules for window management, hot reload, etc.
- **`utils`**: Provides utility scripts, including `bridge.ts`, `createWindow.ts`, and `csp.ts`.
- **`utils`**: Houses utility scripts for window creation (`createWindow.ts`), content security policy setup (`csp.ts`), and more.
- **Utils**: Helper functions like CSP and window management utilities.
- **utils**: Contains helper functions, reusable modules, and utility files.
- **utils**: Helper functions and utility files.

- **Windows**: Contains each window's dedicated TypeScript configuration.
- **windows**: Houses configurations for window properties and lifecycle management.
- **windows**: Configurations and files for each app window.

- **AI Research/**: Files for AI functionalities, including configuration for models, settings, and usage scripts.
- **`AI Research`**: Includes research material, prompts, and documentation, useful for AI-related functionalities within the app.
- **`AI Research`**: Reference files, prompts, and models for AI integration and experimentation within the framework.
- **AI Research**: Houses BPC research and advanced prompt engineering configurations.

- **`backend`**: Contains server files, including `server.js` and its own `package.json`.
- **`backend`**: Backend server setup, including `server.js` and supporting configuration files.
- **Backend**: The current API server, supporting plugin and AI integrations.

- **`hotreload`**: Includes scripts for managing the hot reload feature, such as `client.ts`, `refresh.ts`, and `server.ts`.
- **`hotreload`**: Scripts managing the dual hot reload functionality, with files like `client.ts`, `config.ts`, `refresh.ts`, and `server.ts`.
- **Hot Reload**: Contains TypeScript configurations for frontend and backend hot reload functionalities.

- **installed-plugins/**: Third-party plugins and custom integrations.
- **`installed-plugins`**: Contains directories like `ai-vision-server` and `screenshot-taker`, indicating plugins with specific functionalities.
- **`installed-plugins`**: Dedicated folder for plugins, with examples like `ai-vision-server` and `screenshot-taker` for extended functionalities.
- **Installed Plugins**: Directory for core and custom plugins.

- **out/**: Compiled output for production.

- **`.gitignore`**: Likely specifying files and folders to exclude from version control.
- **`BPC.code-workspace`**: A workspace configuration file, likely for VS Code.
- **`bun.lockb`**: Indicates usage of Bun, a JavaScript runtime and package manager.
- **`globals.d.ts`**: TypeScript definitions file, possibly defining global types.
- **`package.json`**: Main configuration for dependencies and scripts.
- **`package.json`**: Contains project dependencies, scripts, and metadata.
- **`README.md`**: An existing readme file.
- **`start.cmd`**: Likely a command script for initiating the project.
- **`tailwind.config.js`** and **`tailwind.css`**: Tailwind CSS configuration and styles.
- **`tailwind.config.js`** and **`tailwind.css`**: Configurations for Tailwind CSS, suggesting usage of Tailwind for styling.
- **`tsconfig.json`** and **`tsconfig.browser.json`**: TypeScript configurations for different environments.
- **`tsconfig.browser.json`**: A TypeScript configuration file, potentially tailored for browser compatibility.

Key files like `src/index.ts`, `utils/createWindow.ts`, and `hotreload/server.ts` can provide more specific insights into the framework's functionality and hot reload features.
