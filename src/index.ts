import http from 'http';
import app from './app';
import connection from '../src/database/connection';

const PORT: number = 3000;
const server = http.createServer(app);

const handleConncetion = async () => {
    server.listen(PORT, () => {
        console.log(`Server listening port ${PORT}...`)
    })
}

connection.create(handleConncetion);