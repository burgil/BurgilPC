import type { Express } from 'express';
import http from 'node:http';
import WS from 'ws';
import { createClient, LiveTranscriptionEvents } from '@deepgram/sdk';

export default function express(app: Express) {
  const server = http.createServer(app);
  const deepgramClient = createClient(process.env.DEEPGRAM_API_KEY);
  const wss = new WS.Server({ server });
  wss.on("connection", (ws) => {
    console.log("socket: client connected");
    const deepgram = deepgramClient.listen.live({
      language: "en",
      punctuate: true,
      smart_format: true,
      model: "nova-2",
      // keywords: []
    });

    const keepAlive = setInterval(() => {
      console.log("deepgram: keepalive");
      deepgram.keepAlive();
    }, 10 * 1000);

    ws.on("close", () => {
      console.log("socket: client disconnected");
      if (!deepgram) {
        console.log("socket: could not close deepgram, service is not available");
        return;
      }
      deepgram.requestClose();
      deepgram.removeAllListeners();
      clearInterval(keepAlive);
    });

    deepgram.addListener(LiveTranscriptionEvents.Open, async () => {
      console.log("deepgram: connected");

      deepgram.addListener(LiveTranscriptionEvents.Transcript, (data) => {
        console.log("deepgram: transcript received - socket: transcript sent to client");
        ws.send(JSON.stringify(data));
      });

      deepgram.addListener(LiveTranscriptionEvents.Close, async () => {
        console.log("deepgram: disconnected");
        clearInterval(keepAlive);
        deepgram.requestClose();
      });

      deepgram.addListener(LiveTranscriptionEvents.Error, async (error) => {
        console.log("deepgram: error received");
        console.error(error);
      });

      deepgram.addListener(LiveTranscriptionEvents.Metadata, (data) => {
        console.log("deepgram: metadata received - ws: metadata sent to client");
        ws.send(JSON.stringify({ metadata: data }));
      });
    });

    ws.on("message", (message) => {
      console.log("socket: client data received");
      if (!deepgram) {
        console.log("socket: data couldn't be sent to deepgram, service is not available");
        return;
      }
      if (deepgram.getReadyState() === 1) { // open
        console.log("socket: data sent to deepgram");
        // @ts-ignore
        deepgram.send(message);
      } else if (deepgram.getReadyState() >= 2) { /* 2 = CLOSING, 3 = CLOSED */
        console.log("socket: data couldn't be sent to deepgram");
        deepgram.requestClose();
        deepgram.removeAllListeners();
      } else {
        console.log("socket: data couldn't be sent to deepgram");
      }
    });
  });
  server.listen(42422, () => {
    console.log("WS Server is listening on port 42422");
  });
}
