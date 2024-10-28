// Helps create reusable scripts inside created windows e.g. components renderer scripts and bridge console errors/logs and terminal
export default function newScript(scriptPath: string) {
    return `
(() => {
    const newScript = document.createElement('script');
    newScript.type = 'module';
    newScript.src = 'file://${scriptPath}';
    newScript.onerror = function() {
        console.error('Failed to load ${scriptPath}');
    };
    document.head.appendChild(newScript);
})();
`;
}