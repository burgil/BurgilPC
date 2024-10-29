> [!NOTE]
> The readme is under construction.. like you can see..

# Burgil Personal Computer

**Burgil Personal Computer** is a visionary smart PC built for a personal and unique AI experience. This evolving project goes beyond typical frameworks, embodying a lifelike assistant capable of listening, seeing, hearing, touching, and in the future, maybe even "smelling". It's designed for advanced interactivity with window management, real-time hot reload, and plugin support for seamless feature expansion with more groundbreaking capabilities on the horizon. This journey is just beginning, with each update bringing Burgil Personal Computer closer to becoming the smart, intuitive companion of the future. Stay tuned!

> [!IMPORTANT]
> **A Personal Project, Read-Only, Not Yet Licensed:**  
> Burgil Personal Computer is not a general-purpose framework or licensed software, and it is currently not intended for public use. Designed exclusively as a private project, this software aims to offer future commercialization in ways that add value responsibly, ensuring safe, ethical, and innovative applications.

> [!TIP]
> **Beta Access:**  
> For anyone interested in the beta, feel free to reach out directly! Updates, demos, and other progress videos will be posted.

---

## Table of Contents

1. [Subheading 1](docs/example.md)
2. [Subheading 2](docs/example.md)
3. [Subheading 3](docs/example.md)

---

Here are some additions and enhancements that could make my README even more comprehensive and engaging:

1. **Visuals and Demo Section**:
   - **Screenshots** or **GIFs** showing the UI, hot reload in action, or the plugin interface.
   - An **architecture diagram** showing how different components (hot reload, plugins, window management) work together.

2. **Getting Started Example**:
   - A short example demonstrating a quick setup, like creating a new window with `createWindow` or integrating a sample plugin. This gives new users an immediate, hands-on experience.

3. **Detailed Plugin Section**:
   - Describe each default plugin (`ai-vision-server`, `screenshot-taker`), its purpose, setup, and usage. If plugins require dependencies or configuration, mention those steps here.

4. **Advanced Configuration Options**:
   - Describe optional configurations, like how to modify `tailwind.config.js` for custom themes or tweak TypeScript settings.
   - Instructions for adjusting the hot reload server or any custom configuration options in the framework.

5. **Contributing Guidelines**:
   - Add a section for contributors, detailing setup for development, coding standards, and guidelines on submitting pull requests.

6. **Troubleshooting and FAQ**:
   - A dedicated section for common setup issues, debugging tips, and FAQs, like handling dependencies with Bun, or fixing build errors.

7. **Contact and Support**:
   - Mention any available support channels (e.g., GitHub Issues, a Discord server, or email contact) for users to ask questions or request features.

---

Burgil Personal Computer: A powerful Electron.js framework in TypeScript, featuring dual hot reload, window management, and a plugin system for seamless integration and expansion.

Burgil Personal Computer is a robust and extensible Electron.js framework built with TypeScript. It is designed for developers building modular, dynamic desktop applications with powerful window management, dual hot reload, and a versatile plugin architecture. With integrated AI components, Burgil Personal Computer supports various functionalities that make it ideal for creating advanced desktop experiences.

**Burgil Personal Computer** is a powerful Electron.js framework developed in TypeScript. This framework is designed to streamline the creation of desktop applications, featuring robust dual hot reload, dynamic window management, and a flexible plugin system for seamless integration and customization.

**Burgil Personal Computer** is a versatile Electron.js framework developed in TypeScript. Tailored for efficient desktop application development, it features dual hot reload, window management, and a plugin system that facilitates seamless integration, customization, and expansion.

**Burgil Personal Computer** is a powerful Electron.js framework built with TypeScript, designed to push the boundaries of desktop applications. With dual hot reload capabilities, advanced window management, a secure plugin system, and support for intelligent AI integrations, Burgil Personal Computer offers developers the tools to build highly interactive, secure, and extensible applications.

**Burgil Personal Computer** is an Electron.js framework built with TypeScript, offering robust window management, dual hot reload functionality, and an extensible plugin system. The project enables real-time, cross-platform app development with a focus on seamless UI/UX, moderation, and AI-driven capabilities.

**Burgil Personal Computer** is an advanced Electron.js framework built with TypeScript, designed to provide seamless window management, dual hot-reload support, plugin extensibility, and extensive security protocols. This project empowers developers to create powerful applications with real-time updates, interactive plugins, and a fully customizable UI. Developed with a focus on user-centered design, security, and advanced AI features, Burgil Personal Computer is ideal for creating a sophisticated, lifelike computer assistant.

---

Burgil Personal Computer pushes Electron.js to new heights, creating an ecosystem for secure, intelligent, and extensible applications. We look forward to seeing the possibilities you unlock with this framework!

This README covers installation, usage, directory structure, key features, and customization options to help users and developers get started.

This README provides a solid foundation for users to understand, set up, and explore the capabilities of Burgil Personal Computer.

This comprehensive README covers all the essential aspects of **Burgil Personal Computer**, with detailed feature explanations and attributions.

---

## Key Functionalities
## Key Features
## Features

1. **Dual Hot-Reload System**: Instantly reloads on file changes, supporting both `public` assets and TypeScript source code in `src`.
- **Dual Hot-Reload**: A robust hot-reload system for both `public` assets and `src` code files ensures real-time updates for a smooth development experience.
- **Dual Hot Reload**: Integrated with Bun for concurrent hot reloading across backend and frontend components.
- **Dual Hot Reload**: Develop efficiently with dual hot reload for backend and frontend changes, powered by Bun.
- **Dual Hot Reload**: Real-time updates to both backend and frontend code through a Bun-powered hot reload system.
- **Dual Hot Reload System**: 
  - **Frontend Hot Reload**: Instantly reloads changes in the `public` directory, watching and refreshing files on save. TypeScript is run seamlessly in the web environment, allowing developers to use bundled npm packages effortlessly.
  - **Backend Hot Reload**: Watches `src` and `windows` directories for updates in Electron and immediately reflects these changes, optimizing the development experience.

2. **Automated Window Creation**: Scripted creation of pre-configured windows using `bun new-win`.
3. **Dynamic Window Management**: Close and reopen windows independently, ideal for modular workflows.
- **Dynamic Window Management**: Includes flexible window handling that allows for independent window creation, closure, and reopening.
- **Window Management**: API support for flexible creation and management of multiple windows, each configurable with custom behaviors.
- **Window Management**: Effortlessly manage multiple application windows with a straightforward API.
- **Modular Window Management**: Simplified management of multiple application windows with independent, customizable controls.
- **Advanced Window Management**:
  - **Reusable Windows**: Allows the creation of windows that can be closed and reopened independently of each other.
  - **Automated Window Creation**: Using `bun new-win`, developers can generate new windows with preconfigured setups, saving time and ensuring consistency.
  - **Flexible Tray Integration**: Includes a tray button for easy access, allowing minimized or background functionality.

4. **Tray Button**: Access settings or notifications directly from the tray.
- **Tray Button**: Access quick functions and settings directly from the tray.

### Notifications
Transparent and animated notifications for smooth user experience, complete with sound effects.

### Notifications
Transparent, animated notifications include sound effects and smooth fade-in/fade-out animations for alerts.

6. **Advanced Notification System**: Customizable and visually engaging with transparency and animations.
- **Customized Notification System**: Built-in transparent, animated notifications with sound for an intuitive user experience.

### Plugin Marketplace
View and manage plugins with metadata, dependencies, and update options.

### Plugin Marketplace
The plugin marketplace supports:
- **Plugin Management**: Add, remove, and update plugins easily.
- **Metadata Display**: Shows descriptions, dependencies, versions, and other relevant data.
- **Visual Customization**: Designed with a futuristic UI and color-coded themes for accessibility.

7. **Plugin Marketplace**: UI for managing plugins, showing dependencies, metadata, and version history.
- **Plugin Marketplace**: Integrates a marketplace UI for plugin management, showcasing dependencies, metadata, and version history.
- **Plugin System**: A built-in plugin architecture supporting third-party plugins and custom extensions, which can be easily added to the `installed-plugins` directory.
- **Plugin System**: Expand functionality by easily adding plugins to the `plugins` directory.
- **Extensible Plugin System**: Easily expand functionality by adding plugins to the `installed-plugins` directory.
8. **Plugin System**: Easy plugin management for adding/removing functionalities, ideal for extending app capabilities.
- **Plugin System for Extensibility**:
  - **Plugin Marketplace**: Integrated interface to install, manage, and extend plugins, supporting seamless feature integration.
  - **Pre-installed Plugins**:
    - **AI Vision Server** (temporarily limited): An advanced object-detection system powered by OpenCV, PyQt5, and Python. This plugin performs screen detection in real-time and outputs object coordinates but remains restricted until moderation layers are implemented to ensure responsible use.
    - **Screenshot Taker**: Uses Jimp and Python's PyAutoGUI for quick screen captures, enhancing the vision server's capabilities by providing it with new detection targets.

### Screenshot Taker Plugin
A custom plugin that captures screen areas with a transparent overlay:
- **UI Interaction**: Allows a rectangular selection to capture images, and it only triggers on left mouse click.
- **File Saving**: Saves images in PNG format with user-defined filenames.

### AI Vision Server
Powered by Python, OpenCV, and PyQt5, this plugin enables real-time object detection on the screen.

- **Screenshot Capture**: Select screen areas to capture and save images with precise coordinates.
- **Event Logging**: Real-time feedback and error logging for reliable detection.

### AI Vision Server Plugin
- **Overview**: Uses Python, OpenCV, and PyQt5 to provide real-time object detection.
- **Capabilities**: Includes object location logging, screenshot capture, and coordinate retrieval.
- **Configuration**: Modify detection speed, range, and template settings through HTTP commands from Node.js.

### Speech Processing (STT/VAD/TTS)
Incorporates **speech-to-text**, **voice activity detection**, and **text-to-speech** capabilities.

- **Voice Command Recognition**: Activate commands through voice for hands-free operation.
- **Text Highlighting**: Spoken words are visually highlighted for accessibility.

### Speech Processing (STT/VAD/TTS)
- **STT**: Converts speech to text with optional voice command support.
- **VAD**: Detects voice activity, enabling hands-free control.
- **TTS**: Text is spoken aloud, with real-time highlighting for accessibility.
- **Packages**: Uses `@ricky0123/vad-web` and `silero_vad.onnx` for VAD and STT processing.

9. **AI Vision Server**: Python-based plugin leveraging OpenCV and PyQt5 for object detection.
- **AI Vision Server Plugin**: Python-based screen object detection powered by OpenCV and PyQt5.
10. **STT, VAD, and TTS Support**: Built-in speech and text capabilities, including voice-activated commands and text-to-speech.
- **Voice Capabilities**: Speech-to-Text (STT), Voice Activity Detection (VAD), and Text-to-Speech (TTS) features with text highlighting for an enhanced, interactive user experience.
- **AI Integration**: Burgil Personal Computer includes an "AI Vision Server" and other AI components located in the `AI Research` folder, offering functionalities like automated vision processing and real-time user interactions.

- **Tailwind CSS & TypeScript**: Styled with Tailwind CSS and built with TypeScript for efficient, type-safe development.
- **Tailwind CSS Integration**: Customize the application's appearance with Tailwind CSS, using a modular and responsive design.
- **TypeScript Support**: Type-safe development ensures code reliability and consistency.
- **Tailwind CSS Integration**: Style the application using Tailwind for responsive and customizable design.
- **TypeScript Support**: Type-safe development ensuring code reliability and maintainability.

- **Accessibility & UI Enhancements**: Enhanced user interaction with features like overlay gradient animations, custom dialogs, and compatibility with Electron's native controls.

- **Future-proof Backend Support**:
  - **Backend API**: The backend is being developed with business expansion in mind. Initially hosted with Flask (to be upgraded), it serves as the backbone for future integrations.
  - AI-focused research with **Burgil Personal Computer (BPC)**: This project explores intelligent desktop environments featuring robust STT (Speech-to-Text), VAD (Voice Activity Detection), TTS (Text-to-Speech), and local LLM (Language Model) testing.

### Security Protocols
The app follows a strict Content Security Policy to restrict WebAssembly and other potentially unsafe resources.

5. **Security-First**: Strong Content Security Policy (CSP) and optional development bridge for console error logs.
- **Content Security Policy (CSP)**: Strong security settings, including support for WebAssembly execution where necessary, providing peace of mind in app safety.
- **Robust Content Security Protocols**:
  - Comprehensive Content Security Policy (CSP) to ensure safe execution.
  - Optional **Development Bridge** for relaying console logs and errors from individual windows back to the terminal, making debugging simpler and centralized.

### Compliance
The project aligns with GDPR and the EU AI Act, with a clear disclaimer and terms for restricted use cases.

- **Cross-Platform Compliance**: Designed for compatibility with GDPR and EU AI Act guidelines.

### Privacy Notice
All data is stored locally with no third-party access or tracking.

---

## Security and Privacy

- **Content Security Policies (CSP)**: Ensures that scripts are securely controlled and executed.
- **Moderation Layers**: Plugins like AI Vision Server are rigorously controlled, with moderation planned to prevent misuse. Future enhancements will emphasize privacy and user control over data.
- **Privacy Notice**: Burgil Personal Computer does not collect user data, storing everything locally for personal use only.

---

## Configuration

### Content Security Policy (CSP)
Burgil Personal Computer enforces a strict CSP to restrict any potentially unsafe sources while allowing essential functionality like WebAssembly. Additional configurations are available in the `csp.config.js` file to ensure optimal security.

### Privacy Notice and Compliance
The framework is committed to data privacy and regulation compliance:
- **Local Storage Only**: All data is stored locally with zero external tracking.
- **GDPR and AI Act Compliance**: Terms of use align with GDPR standards and the EU AI Act, focusing on preventing usage in restricted high-risk AI areas.

## Configuration

- **Tailwind CSS**: Configured via `tailwind.config.js` and customized in `tailwind.css`.
- **TypeScript**: TypeScript configurations are split for browser (`tsconfig.browser.json`) and main processes (`tsconfig.json`).

---

## Development and Debugging

### Logging
Full debug logs are available for extensive troubleshooting, including overlay status, window lifecycle events, and plugin activity.

### Hot Reload
The hot reload system watches both `src` and `public` directories:
- **`src`**: Watches for TypeScript changes and rebuilds.
- **`public`**: Monitors asset updates, instantly refreshing the app view.

---

## Customization

1. **Styling**: Tailwind CSS for responsive and lightweight styling.
2. **UI Animations**: Easily adjustable animations for notifications and alerts.
3. **Hot Reload**: Customize the refresh interval and directory monitoring settings.

---

## Planned Features

1. **Enhanced AI Capabilities**: Future releases will extend object detection to cover additional categories and add AI moderation layers.
2. **Lifelong Learning Model Integration**: Further development in speech and visual recognition.
3. **Plugin Marketplace Expansion**: Enhanced support for official and unofficial plugins with better dependency management.

## Planned Features

1. **AI Research Area**: This space will enable advanced research on AI for the 'Burgil Personal Computer'.
2. **Plugin for Drawing on Screen**: A plugin is under development, focusing on security and moderation.
3. **Enhanced Marketplace Features**: Future updates will include automated dependency management and better compatibility checks.

---

## Development Example

Burgil Personal Computer simplifies development by allowing real-time updates with minimal configuration. Modify any `public` asset, and the smart hot reload immediately refreshes the UI. Backend changes, including window management code, are live-reloaded as well.

---

## Documentation

For more details on advanced usage, window management, AI integration, and custom plugins, refer to the [docs/](docs/) directory.

## Documentation

For more details on advanced usage, window management, and customization, see the full [documentation](docs/README.md).

---

## Disclaimer

**Burgil Personal Computer** is intended for personal computer use only and is in a pre-release stage, pending final security and moderation adjustments. Commercial or business use is not permitted without express permission.

## Disclaimer

**Burgil Personal Computer** is a pre-release version intended for personal computer use only, not for commercial or business purposes. Full open-source release will follow after final security and moderation enhancements are complete.

--- 

## License

This project is currently not being licensed.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Author

Developed by **Burgil**.

## Acknowledgments

**Special Thanks to Contributors:**
- **@ricky0123** for the `vad-web` package, a vital part of the voice activity detection system.
- **mlc-ai/web-llm** and **onnxruntime-web** for language model support.
- **Font Awesome** for icon assets.

*Please note:* Burgil Personal Computer integrates these resources with custom modifications specific to the project, and unused elements are also present for future enhancements.

---

## Contact

For any issues, inquiries, or support, please reach out via **burgil@burgil**.

## Contact

For support, contact us at: **burgil@burgil**

## Contact

Reach out via email at [burgil@burgil](mailto:burgil@burgil) for inquiries or potential collaborations.

---

## Contributing

Contributions are welcome! Please submit an issue or PR for bugs, features, or general feedback.

---

## Credits and Logo

The logo and all design elements were created by the project's primary developer, ensuring a cohesive, visually engaging theme throughout the application.

---

## Project Structure

- **src**: Main source code, including core logic and modular window management.
- **public**: Static assets such as images, fonts, and CSS, actively watched for hot-reload.
- **utils**: Contains helper functions, reusable modules, and utility files.
- **windows**: Houses configurations for window properties and lifecycle management.

## Project Structure

- **src**: Core application files.
- **public**: Static assets, monitored for live updates.
- **utils**: Helper functions and utility files.
- **windows**: Configurations and files for each app window.

## Project Structure

- **AI Research**: Houses BPC research and advanced prompt engineering configurations.
- **Backend**: The current API server, supporting plugin and AI integrations.
- **Hot Reload**: Contains TypeScript configurations for frontend and backend hot reload functionalities.
- **Installed Plugins**: Directory for core and custom plugins.
- **Public**: HTML, CSS, and TypeScript assets for UI components.
- **Utils**: Helper functions like CSP and window management utilities.
- **Windows**: Contains each window's dedicated TypeScript configuration.

## Directory Structure

- **`src`**: Core application code, including main files like `index.ts` and `tray.ts`.
- **`public`**: Contains multiple subdirectories (`disclaimer`, `initial`, `notifier`, `plugins`, `settings`, and `web`) for individual UI components, each with its HTML, CSS, and TypeScript files.
- **`utils`**: Houses utility scripts for window creation (`createWindow.ts`), content security policy setup (`csp.ts`), and more.
- **`hotreload`**: Scripts managing the dual hot reload functionality, with files like `client.ts`, `config.ts`, `refresh.ts`, and `server.ts`.
- **`installed-plugins`**: Dedicated folder for plugins, with examples like `ai-vision-server` and `screenshot-taker` for extended functionalities.
- **`backend`**: Backend server setup, including `server.js` and supporting configuration files.
- **`AI Research`**: Reference files, prompts, and models for AI integration and experimentation within the framework.

The directory structure reveals a well-organized project with several important components:

1. **Core Directories**:
   - **`src`**: Likely the main source folder with core TypeScript files like `index.ts` and `tray.ts`.
   - **`public`**: Contains multiple subdirectories for UI components, such as `disclaimer`, `initial`, `notifier`, `plugins`, `settings`, and `web`, each with HTML, CSS, and TypeScript files.
   - **`utils`**: Provides utility scripts, including `bridge.ts`, `createWindow.ts`, and `csp.ts`.
   - **`hotreload`**: Includes scripts for managing the hot reload feature, such as `client.ts`, `refresh.ts`, and `server.ts`.
   - **`installed-plugins`**: Contains directories like `ai-vision-server` and `screenshot-taker`, indicating plugins with specific functionalities.

2. **Configuration Files**:
   - **`package.json`**: Main configuration for dependencies and scripts.
   - **`tailwind.config.js`** and **`tailwind.css`**: Tailwind CSS configuration and styles.
   - **`tsconfig.json`** and **`tsconfig.browser.json`**: TypeScript configurations for different environments.

3. **Backend and AI Research**:
   - **`backend`**: Contains server files, including `server.js` and its own `package.json`.
   - **`AI Research`**: Includes research material, prompts, and documentation, useful for AI-related functionalities within the app.

Key files like `src/index.ts`, `utils/createWindow.ts`, and `hotreload/server.ts` can provide more specific insights into the framework's functionality and hot reload features. Let me know if you'd like a closer look at these, or if there's a particular aspect you're interested in!


- **`.gitignore`**: Likely specifying files and folders to exclude from version control.
- **`BPC.code-workspace`**: A workspace configuration file, likely for VS Code.
- **`bun.lockb`**: Indicates usage of Bun, a JavaScript runtime and package manager.
- **`globals.d.ts`**: TypeScript definitions file, possibly defining global types.
- **`package.json`**: Contains project dependencies, scripts, and metadata.
- **`README.md`**: An existing readme file.
- **`start.cmd`**: Likely a command script for initiating the project.
- **`tailwind.config.js`** and **`tailwind.css`**: Configurations for Tailwind CSS, suggesting usage of Tailwind for styling.
- **`tsconfig.browser.json`**: A TypeScript configuration file, potentially tailored for browser compatibility.

### Key Details from `README.md`:
- **Setup**: The commands `bun install` and `bun start` are mentioned, indicating Bun is used to manage packages and start the project.

### Key Details from `package.json`:
- **Project Name**: It appears to be named "Burgil Personal Computer" (which might be an alternate or related name to "Burgil Personal Computer").
- **Author**: "Burgil".
- **Description**: The description matches the project name, possibly indicating the current scope.
- **Scripts**:
  - **`start`**: Executes `bun hotreload/start.ts`, hinting at a hot reload setup managed by Bun.
  - **`new-win`**: A script that runs `bun utils/new-win.ts`, possibly for opening new windows.
  - **Build Scripts**:
    - **`builder`**: Combines Tailwind CSS and TypeScript builds with Electron Builder to package the app.
    - **`build:typescript`**: Cleans the `out` directory before compiling TypeScript.
    - **`build:tailwind`**: Runs Tailwind CSS compilation.

## Project Structure

- **src/**: Main application source files in TypeScript.
- **public/**: Contains UI assets (HTML, CSS, JS/TS) including styled components and user interactions.
- **installed-plugins/**: Third-party plugins and custom integrations.
- **utils/**: Helper modules for window management, hot reload, etc.
- **AI Research/**: Files for AI functionalities, including configuration for models, settings, and usage scripts.
- **out/**: Compiled output for production.

---

## Key Scripts

- **`start`**: Initializes the Bun-powered dual hot reload.
- **`new-win`**: Runs `utils/new-win.ts` to create additional application windows.
- **Build Scripts**:
  - **`builder`**: Compiles TypeScript and Tailwind, and packages with Electron Builder.
  - **`build:typescript`** and **`build:tailwind`**: Individual build steps for TypeScript and Tailwind.

---

## Personal Note:

```
there is also a nice way to set content security policy and security protocols in place, an optional development bridge between the console errors and logs of windows with the terminal (send logs to the terminal)
there is also a way to create windows easily that can be closed and reopened while other windows are also closed.
there is a nice tray button and a very organized project structure

and there is an automation script with bun new-win that can create new windows, and the hot reload is smart it watches for changes in the public directory and refreshes the page instantly and rebuilds the typescript, typescript usually can't run on the web but it runs it, and it supports bundled npm packages so developing is fun again, and there is a hotreload for when you make changes to the src or windows of the electron app itself, and an upcoming backend for my future business endeavors, and plugins that will let you integrate other apps and share functionality between them, for example running a python server, and there is an AI research I am conducting in regards of developing what I like to call Burgil Personal Computer, there are already 5 windows: nice notification system that I built, with transparent ui that looks too good to be true, there is a basic design for the plugin marketplace, this is the place where I will be working the most in terms of frontend design, and there is already a nice settings page and a disclaimer page and a page for testing STT, VAD, TTS and local LLM all in one place! with optimized libraries from safe places, thank everyone else whose projects I used in one way or another but in no way that makes my app irellevant in fact this is like asking whats next now that we have all this cool technologies can we make a stack out of them?
in this repo there is minimal code snippets and text from groq, deepgram, openai, expressjs, 
runtimes used are nodejs, bun, python
there are cool plugins that I created for detecting objects on the screen in real time, in the examples I used the trash bin icon, since I see risks involved in developing what I called the "ai-vision-server" plugin then I am waiting with this feature, giving eyes to the computer can wait, giving hands brain mouth and ears is the top priority, later moderation layers will be added to prevent abuse and only then I consider going open source, for drawing on the screen on the "ai-vision-server" I used opencv python and pyqt5
pyautogui is used to take screenshots, flask is used to host the backend example but it will be switched soon, jimp is used in another plugin called "screenshot-taker" that can help the ai-vision-server find new objects it can detect on the screen, outputting the coordinates of them for mouse movement, but since this is why we can't have good things this feature will wait until I can ensure in some way it wont be abused in any way.
logos were created by myself, name is up for change, feel free to contact for VCs, theres also tailwind, a lot of snippets for css, js, html, ts and python written exclusively by Burgil, me. there are some unused libraries that needs to be removed, links in the html to font awesome, local llm thanks to @mlc-ai/web-llm the vad is thanks to @ricky0123/vad-web and onnxruntime-web
but make it clear that these are just small core elements of a much bigger picture and that they were heavily modified and sprinkled with burgil magic dust and hands, 
and mostly code written by none other than myself.
```

---

Here's a comprehensive 100-point breakdown for Burgil Personal Computer, capturing all project aspects from security to functionality, future enhancements, and setup elements. Once this plan is finalized, we can develop it into a well-structured README.

1. **Project Name**: Burgil Personal Computer (subject to change)
2. **Framework**: Built with Electron.js and TypeScript.
3. **Hot-Reload System**: Smart hot-reloading watches for public directory changes, instantly refreshing the page.
4. **TypeScript**: Fully TypeScript-compatible, rebuilding automatically on file changes.
5. **Window Creation**: Automated window setup with `bun new-win` script for streamlined development.
6. **Dynamic Window Management**: Windows can be independently closed and reopened, enhancing modularity.
7. **Tray Button**: Provides a convenient interface in the tray.
8. **Project Structure**: Organized directories and files for easy navigation and maintenance.
9. **Security Protocols**: Strict Content Security Policy (CSP) and optional development bridge.
10. **Development Bridge**: Console logs can be routed to the terminal for streamlined debugging.
11. **Automation Support**: Scripts streamline window and module creation.
12. **Public Folder Watch**: Monitors the `public` directory for changes, instantly refreshing on updates.
13. **Bundled Packages**: Support for bundled npm packages in the app.
14. **AI Research**: Contains `AI Research` directory with an experimental Burgil Personal Computer concept.
15. **Object Detection**: `ai-vision-server` plugin detects objects on the screen in real-time.
16. **Screen Drawing**: OpenCV and PyQt5 enable drawing on the screen with the `ai-vision-server`.
17. **Screenshot Capture**: `screenshot-taker` plugin saves screen areas with coordinates for detection.
18. **Moderation Layers**: Planned moderation to secure sensitive AI features before open-sourcing.
19. **Local LLM Testing**: Dedicated page to test local Large Language Models (LLM).
20. **STT/VAD/TTS Integration**: Speech-to-text (STT), Voice Activity Detection (VAD), and Text-to-speech (TTS) support.
21. **LLM Libraries**: Uses optimized libraries like `@mlc-ai/web-llm`.
22. **VAD Library**: Integrates `@ricky0123/vad-web` for voice activity detection.
23. **ONNX Runtime**: Includes `onnxruntime-web` for efficient machine learning model execution.
24. **Notification System**: Transparent UI, visually appealing, and customizable.
25. **Plugin Marketplace**: Interface for plugins, displaying metadata such as version and dependencies.
26. **Settings Page**: Customizable settings accessible in a user-friendly UI.
27. **Disclaimer Page**: Tailored disclaimer page with accessible, prominent legal sections.
28. **Automated Setup**: Scripts for automating build and testing steps.
29. **AI Vision Server**: Utilizes Python, OpenCV, and PyQt5 for detection and drawing on-screen.
30. **Image Recognition**: Capable of identifying on-screen objects, like the trash bin icon.
31. **Event Logging**: Logs key actions and errors for easier debugging.
32. **Backend Server**: Flask-based backend for handling certain plugin functionalities.
33. **Future Backend**: Plan to switch to a different backend for better scalability.
34. **Python Runtime**: Python scripts enable backend and vision server functionality.
35. **Node.js Runtime**: Core framework runtime supporting extensive JS functionality.
36. **Bun Runtime**: Bundling and package management handled by Bun.
37. **Tailwind CSS**: Simplified, responsive, and visually appealing styling.
38. **Custom CSS/JS/HTML**: Unique snippets to manage UI and plugin interfaces.
39. **Content Security**: Strong CSP settings for WebAssembly support and other content sources.
40. **STT Testing**: Section for evaluating speech-to-text functionality.
41. **Voice Highlighting**: Spoken text highlights for better accessibility.
42. **EU AI Act Compliance**: Meets requirements to limit high-risk AI use.
43. **GDPR Compliance**: Ensures privacy protection and data minimization.
44. **Privacy Notice**: Clear statement that no data is collected; stored locally.
45. **Unused Libraries**: Prunes unnecessary libraries for optimized performance.
46. **Fonts**: Font Awesome integration for icon customization.
47. **Organized File Structure**: Easily navigable with grouped directories and files.
48. **Future Plugin Integration**: Plan for plugins to allow inter-app functionality sharing.
49. **Modular Window Design**: Easily add and remove windows as per user needs.
50. **New Window Creation**: Automated script creates pre-configured windows.
51. **Easy Window Reopen**: Open previously closed windows without restarting.
52. **Error Handling**: Comprehensive error handling with alerts/logs.
53. **Console Debugging**: Console output streamed to terminal.
54. **Backend API**: API endpoints for real-time object detection.
55. **Python Integration**: Python code support, including AI model execution.
56. **Local Storage**: Stores configuration settings locally for persistence.
57. **Modular Plugins**: Plugins easily add, remove, and update functionalities.
58. **Testing Modules**: Modules in place for all critical functionalities.
59. **Screen Detection Security**: Delays open-sourcing until secure, moderated release.
60. **Open Source Plan**: Full open-source release planned post-stabilization.
61. **Notification Animations**: Visually rich animations for notifications.
62. **Plugin Dependencies**: Plugins check and list dependencies.
63. **API Documentation**: Clear API documentation for easy integration.
64. **JavaScript Utility Functions**: Helper functions in JS/TS to streamline development.
65. **HTML Utility Functions**: Helper functions for rapid UI prototyping.
66. **Tailwind Animations**: Stylish, lightweight animations via Tailwind CSS.
67. **Notification Sounds**: Optional sounds for key events.
68. **Alert Management**: Configurable alerts for important actions.
69. **Keyboard Shortcuts**: Easy navigation with shortcut keys.
70. **Accessibility Compliance**: Follows accessibility best practices.
71. **Responsiveness**: Fully responsive across screen sizes.
72. **Minimalist Design**: Simple and functional UI/UX.
73. **AI Research Files**: Reference material for AI exploration.
74. **Content Moderation**: Limitations on AI vision to prevent misuse.
75. **Image Caching**: Cached detected images for rapid access.
76. **Visual Prompts**: Visual guidelines to improve UX.
77. **Data Privacy**: Focus on secure data storage practices.
78. **Scripted Automation**: Scripts for automated build and deployment.
79. **Backend Flask**: Backend with Flask to serve API endpoints.
80. **Plugin Cache**: Plugin details stored in a JSON cache.
81. **Cross-Platform**: Cross-platform support for macOS, Windows, and Linux.
82. **Logging Framework**: Organized and detailed logs for error handling.
83. **Event Emitter**: Uses events to manage window and plugin actions.
84. **Node-PyQt5 Integration**: Coordinates Node and Python for vision capabilities.
85. **Real-Time Feedback**: Instant feedback for actions in UI.
86. **File Compression**: Efficient storage of plugin data.
87. **Command Line Options**: CLI options for easy debugging.
88. **Transparency Effects**: Enhanced UI with transparent effects.
89. **Notification Shadows**: Custom shadows for enhanced visibility.
90. **Security Focus**: Prevents malicious access via CSP and other protocols.
91. **Permissions Management**: Manages sensitive AI capabilities with permissions.
92. **Adaptive Layouts**: Optimized layouts across screens.
93. **Git Integration**: GitHub repository with stable branch setup.
94. **Plugin Management**: Handles adding, removing, and updating plugins.
95. **Window State Persistence**: Saves window size/position across sessions.
96. **Automated Tests**: In-progress plan for automated end-to-end tests.
97. **Cross-Compatibility**: Testing for compatibility with key libraries.
98. **JavaScript Polyfills**: Polyfills for browser compatibility.
99. **Styling Libraries**: Light styling frameworks to reduce load time.
100. **Pre-Release Limitations**: Clear communication about pre-release status, limited use cases, and open-source plans after stabilization.

---

## Installation

### Prerequisites
- **Node.js** and **Bun** (for package management and development).
- **Python** (for AI plugins like `ai-vision-server`).
- **Node.js** and **Bun** (for efficient package management and development).
- **Python** for AI-based plugins such as the AI Vision Server.
- Dependencies include `@tensorflow/tfjs-node`, `@tensorflow-models/text-generation`, and `@ricky0123/vad-web` for advanced AI features and audio processing.

Ensure you have [Bun](https://bun.sh) installed, as it is required to manage packages and scripts.
- **Bun**: Burgil Personal Computer relies on Bun for package management. Install Bun by following the instructions [here](https://bun.sh/).

## Getting Started

### Steps

To get started with Burgil Personal Computer:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/burgil/Burgil Personal Computer.git
   cd Burgil Personal Computer
   ```
2. **Install Dependencies**:
   ```bash
   bun install
   ```
3. **Run the Development Server**:
   ```bash
   bun start
   ```

### Create a New Window

Use the automation script to set up a new window:
```bash
bun new-win
```
It will prompt you to enter the window name.

---

## Usage

### Development Commands
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

---

### Building the Project

1. **Build TypeScript**:
   ```bash
   bun run build:typescript
   ```

2. **Build Tailwind CSS**:
   ```bash
   bun run build:tailwind
   ```

3. **Package the App**:
   Run the full build process and package the app using Electron Builder:
   ```bash
   bun run builder
   ```

---

## Plugins

Extend Burgil Personal Computer by placing plugins in the `installed-plugins` directory. Examples include:
- **ai-vision-server**: Adds AI-based vision capabilities with Python and Node.js integration.
- **screenshot-taker**: Provides functionality for capturing screenshots with optional overlay settings.

For developing custom plugins, see the template provided in `WIP`.

## Plugin Integration

Burgil Personal Computer supports plugins for extending functionality. Place plugins in the `plugins` directory, following the provided template in `WIP` to develop your custom plugins.

### Plugin Development
Extend functionality by adding plugins to `installed-plugins`, using the template in `WIP`. Each plugin can be customized and is managed within the main application scope.

---

### AI Components
The **AI Vision Server** and related AI files can be found in the `installed-plugins/ai-vision-server` folder, with Python and Node.js scripts for handling AI-based tasks. See `commands.md` files for details on executing AI functionalities.
