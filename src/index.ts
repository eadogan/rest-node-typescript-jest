import http from 'http';
import app from './app';

const PORT: number = 3000;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server listening port ${PORT}...`)
})