import { session } from 'electron';

export default function CSP(cspValue: string[]) {
    session.defaultSession.webRequest.onHeadersReceived((details, callback) => { // CSP
        callback({
            responseHeaders: {
                ...details.responseHeaders,
                'Content-Security-Policy': [cspValue.join('; ')]
            }
        });
    });
}