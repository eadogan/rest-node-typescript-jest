import express from 'express';
import routers from '../src/routers/place.routes';
import connection from '../src/database/connection';

const app = express();
app.use(express.json());
routers(app);
connection.create();

export default app;