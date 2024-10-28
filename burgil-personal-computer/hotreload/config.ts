export default {
    port: 80,
    hotreloadPort: 49142,
    debug: false,
    address: 'localhost',
    secure: false, // Requires SSL Configuration, More Info: http-server --help
    hotreload: true,
    reconnectDelay: 500,
    minify: false,
    target: 'esnext',
    watchElectronExtensions: 'ts', // Avoid using .js or add  --ignore out/hotreload.js and --ignore out/index.js (Or automate it)
    watchPublicExtensions: 'ts,css,html', // Avoid using .js or add  --ignore out/hotreload.js and --ignore out/index.js (Or automate it)
    paths: {
        srcFolder: 'src', // restart electron
        outFolder: 'out',
        publicFolder: 'public', // refresh page
        hotreloadFolder: 'hotreload', // restart electron
        utilsFolder: 'utils', // restart electron
        windowsFolder: 'windows', // restart electron
        hotreload: {
            output: 'hotreload.js',
            client: 'client.ts',
            server: 'server.ts',
            refresh: 'refresh.ts',
        },
    },
    autoFixCSS: true
};
