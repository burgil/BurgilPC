# Key Features & Functionalities

- **Dual Hot-Reload System**: Instantly reloads on file changes, supporting both `public` assets and TypeScript source code in `src`.

- **Dual Hot-Reload**: A robust hot-reload system for both `public` assets and `src` code files ensures real-time updates for a smooth development experience.
- **Dual Hot Reload**: Integrated with Bun for concurrent hot reloading across backend and frontend components.
- **Dual Hot Reload**: Develop efficiently with dual hot reload for backend and frontend changes, powered by Bun.
- **Dual Hot Reload**: Real-time updates to both backend and frontend code through a Bun-powered hot reload system.
- **Dual Hot Reload System**:
  - **Frontend Hot Reload**: Instantly reloads changes in the `public` directory, watching and refreshing files on save. TypeScript is run seamlessly in the web environment, allowing developers to use bundled npm packages effortlessly.
  - **Backend Hot Reload**: Watches `src` and `windows` directories for updates in Electron and immediately reflects these changes, optimizing the development experience.

- **Automated Window Creation**: Scripted creation of pre-configured windows using `bun new-win`.

- **Dynamic Window Management**: Close and reopen windows independently, ideal for modular workflows.

- **Dynamic Window Management**: Includes flexible window handling that allows for independent window creation, closure, and reopening.
- **Window Management**: API support for flexible creation and management of multiple windows, each configurable with custom behaviors.
- **Window Management**: Effortlessly manage multiple application windows with a straightforward API.
- **Modular Window Management**: Simplified management of multiple application windows with independent, customizable controls.
- **Advanced Window Management**:
  - **Reusable Windows**: Allows the creation of windows that can be closed and reopened independently of each other.
  - **Automated Window Creation**: Using `bun new-win`, developers can generate new windows with preconfigured setups, saving time and ensuring consistency.
  - **Flexible Tray Integration**: Includes a tray button for easy access, allowing minimized or background functionality.

- **Tray Button**: Access settings or notifications directly from the tray.
- **Tray Button**: Access quick functions and settings directly from the tray.

## Notifications

Transparent and animated notifications for smooth user experience, complete with sound effects.

Transparent, animated notifications include sound effects and smooth fade-in/fade-out animations for alerts.

- **Advanced Notification System**: Customizable and visually engaging with transparency and animations.
- **Customized Notification System**: Built-in transparent, animated notifications with sound for an intuitive user experience.

### Plugin Marketplace

View and manage plugins with metadata, dependencies, and update options.

The plugin marketplace supports:

- **Plugin Management**: Add, remove, and update plugins easily.
- **Metadata Display**: Shows descriptions, dependencies, versions, and other relevant data.
- **Visual Customization**: Designed with a futuristic UI and color-coded themes for accessibility.

- **Plugin Marketplace**: UI for managing plugins, showing dependencies, metadata, and version history.
- **Plugin Marketplace**: Integrates a marketplace UI for plugin management, showcasing dependencies, metadata, and version history.
- **Plugin System**: A built-in plugin architecture supporting third-party plugins and custom extensions, which can be easily added to the `installed-plugins` directory.
- **Plugin System**: Expand functionality by easily adding plugins to the `plugins` directory.
- **Extensible Plugin System**: Easily expand functionality by adding plugins to the `installed-plugins` directory.
- **Plugin System**: Easy plugin management for adding/removing functionalities, ideal for extending app capabilities.
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

- **STT**: Converts speech to text with optional voice command support.
- **VAD**: Detects voice activity, enabling hands-free control.
- **TTS**: Text is spoken aloud, with real-time highlighting for accessibility.
- **Packages**: Uses `@ricky0123/vad-web` and `onnx` for VAD and STT processing.

- **AI Vision Server**: Python-based plugin leveraging OpenCV and PyQt5 for object detection.
- **AI Vision Server Plugin**: Python-based screen object detection powered by OpenCV and PyQt5.
- **STT, VAD, and TTS Support**: Built-in speech and text capabilities, including voice-activated commands and text-to-speech.
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

- **Security-First**: Strong Content Security Policy (CSP) and optional development bridge for console error logs.
- **Content Security Policy (CSP)**: Strong security settings, including support for WebAssembly execution where necessary, providing peace of mind in app safety.
- **Robust Content Security Protocols**:
  - Comprehensive Content Security Policy (CSP) to ensure safe execution.
  - Optional **Development Bridge** for relaying console logs and errors from individual windows back to the terminal, making debugging simpler and centralized.

### Compliance

The project aligns with GDPR and the EU AI Act, with a clear disclaimer and terms for restricted use cases.

- **Cross-Platform Compliance**: Designed for compatibility with GDPR and EU AI Act guidelines.

### Privacy Notice

All data is stored locally with no third-party access or tracking.
