import { Express } from 'express';
import { getPlace, createPlace } from '../controllers/place.controller';

export default function(app: Express) {
    app.get('/place-to-stay', getPlace);
    app.post('/place-to-stays/ingest', createPlace)
}