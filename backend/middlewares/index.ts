import stt from './stt';
import tts from './tts';
import type { Express } from 'express';

interface Middlewares {
    [key: string]: (app: Express) => void;
}

const middlewares: Middlewares = {
    stt,
    tts,
}

export default middlewares;