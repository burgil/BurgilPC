import express from 'express';
import path from 'node:path';
import middlewares from '../middlewares';

const port = process.env.PORT || 42421;
const hostname = '0.0.0.0';

const app = express();
app.use((req, res, next) => {
    if (req.originalUrl.includes('favicon.ico')) res.status(204).end();
    next();
});
app.use((req, res, next) => {
    const sourceIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`${sourceIP} - ${req.method} - ${req.url} - ${res.statusCode}`);
    next();
});
// app.use((res, callback) => {
//     res.setEncoding('binary');
//     res.data = '';
//     res.on('data', (chunk) => {
//         res.data += chunk;
//     });
//     res.on('end', () => {
//         callback(null, Buffer.from(res.data, 'binary'));
//     });
// });
for (const middleware in middlewares) {
    if (middlewares[middleware]) middlewares[middleware](app);
}
app.get('/', (_req, res) => res.sendFile(path.join(__dirname, './index.html')));
app.listen(+port, hostname, () => {
    console.log(`Server has started on port ${port}!`);
});