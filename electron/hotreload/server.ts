import type Message from "ws"
import { WebSocketServer } from 'ws';
import { Buffer } from "node:buffer";
import config from "./config.ts";

const wss = new WebSocketServer({ port: config.hotreloadPort });
if (config.debug) console.log(`Hot Reload WebSocket server is running on ${config.secure ? 'wss' : 'ws'}://${config.address}:${config.hotreloadPort}`);

wss.on('connection', (ws) => {
    if (config.debug) console.log('Client connected');
    ws.on('message', (input: Message) => {
        let msg: string | Message = input;
        try { if (Buffer.isBuffer(msg)) msg = msg.toString(); } catch (_e) { 'pass' }
        if (typeof msg !== 'string') return;
        if (config.debug) console.log('Client sent a message:', msg);
        if (msg === 'reload') return triggerReload();
    });
});

export function triggerReload() {
    for (const client of wss.clients) {
        if (client.readyState === 1) {
            client.send('reload');
        }
    }
    if (config.debug) console.log('Reload signal sent to all clients');
}
