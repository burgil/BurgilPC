import sdk, { type AudioConfig } from 'microsoft-cognitiveservices-speech-sdk';
import { Buffer } from 'node:buffer';
import { PassThrough } from 'node:stream';
import fs from 'node:fs';
import type { Express } from 'express';

export default function express(app: Express) {
    app.get('/text-to-speech', async (req, res) => {
        const { phrase } = req.query;
        if (!phrase || typeof phrase !== 'string') {
            res.status(404).send('Invalid query string');
            return;
        }
        const audioStream = await textToSpeech(phrase);
        res.set({
            'Content-Type': 'audio/mpeg',
            'Transfer-Encoding': 'chunked'
        });
        audioStream.pipe(res);
    });
}

async function textToSpeech(text: string): Promise<PassThrough | fs.ReadStream> {
    return new Promise((resolve, reject) => {
        const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.TTS_KEY1 ?? '', process.env.TTS_REGION ?? '');
        speechConfig.speechSynthesisOutputFormat = 5; // mp3
        let audioConfig: AudioConfig | undefined;
        const filename = null;
        if (filename) audioConfig = sdk.AudioConfig.fromAudioFileOutput(filename);
        const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
        synthesizer.speakTextAsync(text, result => {
            const { audioData } = result;
            synthesizer.close();
            if (filename) {
                // return stream from file
                const audioFile = fs.createReadStream(filename);
                resolve(audioFile);
            } else {
                // return stream from memory
                const bufferStream = new PassThrough();
                bufferStream.end(Buffer.from(audioData));
                resolve(bufferStream);
            }
        }, error => {
            synthesizer.close();
            reject(error);
        });
    });
}
