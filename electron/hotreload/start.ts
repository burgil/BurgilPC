import { $ } from "bun";
import config from "./config.ts";

const bundle = (input: string, output: string, isDir = false) => `${input} --${isDir ? 'outdir' : 'outfile'}=${output} --bundle --platform=browser --format=esm --target=${config.target}${config.minify ? ' --minify' : ''}`;
const hotreload = bundle(`${config.paths.hotreloadFolder}/${config.paths.hotreload.client}`, `${config.paths.outFolder}/${config.paths.hotreload.output}`);
const publicFolder = bundle(`${config.paths.publicFolder}/**/*.ts`, `${config.paths.outFolder}/${config.paths.publicFolder}`, true);

setTimeout(async () => {
    console.log('Press CTRL+C in the terminal to terminate the process.');
}, 2000);

await Promise.all([
    // All commands in here run in parallel
    // Bundle hotreload and start hotreload server:
    $`bunx esbuild ${hotreload} && bun ${config.paths.hotreloadFolder}/${config.paths.hotreload.server}`,
    // Watch for changes in the src, utils, windows and hotreload folders - On change - Restart Electron:
    $`bunx nodemon --ext ${config.watchElectronExtensions} --watch ${config.paths.srcFolder} --watch ${config.paths.utilsFolder} --watch ${config.paths.windowsFolder} --watch ${config.paths.hotreloadFolder} --exec 'tsc --project tsconfig.browser.json && bunx esbuild ${publicFolder} && electron .'`,
    // Watch for changes in the public folder - On change - Refresh Page:
    $`bunx nodemon --ext ${config.watchPublicExtensions} --watch ${config.paths.publicFolder} --on-change-only --exec 'bunx esbuild ${publicFolder} && bun ${config.paths.hotreloadFolder}/${config.paths.hotreload.refresh}'`,
    // Watch for errors - Detect TypeScript errors without cleaning the console:
    $`tsc --project tsconfig.browser.json --watch --preserveWatchOutput`,
])

// End of file - Nothing will run below. Use CTRL+C in the terminal to terminate (due to awaiting running servers...)
