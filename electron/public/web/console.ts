const originalConsoleLog = console.log;
const originalConsoleError = console.error;

console.log = (...args) => {
    originalConsoleLog.apply(console, args);
    window.electronAPI.IPC('log', args.join(' '));
};

console.error = (...args) => {
    originalConsoleError.apply(console, args);
    window.electronAPI.IPC('log-error', args.join(' '));
};

window.addEventListener('error', (event) => {
    window.electronAPI.IPC('log-error', `Error caught in renderer: ${event.error}`);
});

window.addEventListener('unhandledrejection', (event) => {
    window.electronAPI.IPC('log-error', `Unhandled rejection: ${event.reason}`);
});
