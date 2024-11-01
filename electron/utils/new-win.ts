import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the new window name: ", (componentName) => {
    rl.close();
    const componentPath = path.join(__dirname, `../public/${componentName}`);
    const windowsPath = path.join(__dirname, `../windows/${componentName}Window.ts`);
    const capitalName = capitalize(componentName);

    if (fs.existsSync(componentPath) || fs.existsSync(windowsPath)) {
        console.log(`${capitalName} Component or window already exists. Choose another name.`, {
            componentPath,
            windowsPath
        });
        return;
    }

    // Step 1: Create directories and files
    fs.mkdirSync(componentPath, { recursive: true });
    fs.writeFileSync(path.join(componentPath, `${componentName}.html`), `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${capitalName}</title>
    <link rel="stylesheet" href="${componentName}.css">
</head>
<body>
    
</body>
</html>`);
    fs.writeFileSync(path.join(componentPath, `${componentName}.ts`), `console.log('Running ${capitalName} logic');`);
    fs.writeFileSync(path.join(componentPath, `${componentName}.css`), `/* Styles for ${capitalName} */`);

    // Step 2: Generate the window file
    const windowTemplate = `import type { BrowserWindow } from 'electron';
import createWindow from '../utils/createWindow';

let newWindow: BrowserWindow | undefined;
export function create${capitalName}(): BrowserWindow | undefined {
    if (newWindow) {
        try { newWindow.close(); } catch (e) { console.log("Window was already closed.") }
        newWindow = undefined;
        return;
    }
    newWindow = createWindow({
        component: '${componentName}',
        width: 800,
        height: 800,
        options: {

        },
        beforeLoad: (window) => {
            window.center();
        },
        beforeScripts: undefined,
        afterLoad: (window) => {
            window.show();
            window.focus();
            window.moveTop();
        },
        closed: () => {
            newWindow = undefined;
        },
        devTools: true
    });
    return newWindow;
}
`;
    fs.writeFileSync(windowsPath, windowTemplate);

    // Step 3: Instructions
    console.log(`
Window '${componentName}' created!
1. Add call to 'create${capitalName}' in index.ts or tray.ts as needed.
2. Review and adjust the HTML, TypeScript, and CSS files in 'public/${componentName}' as desired.
`);
});

function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
