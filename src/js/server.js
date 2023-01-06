import http from 'http';
import app from './index.js';

const port = 4000;

const server = http.createServer(app);

server.listen(port);