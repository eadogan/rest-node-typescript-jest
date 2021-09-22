import mongoose from 'mongoose';

const URL: string = "mongodb://User:Pass@localhost:27017/restNodeDB?authSource=admin";

const conncetion = {
    async create(): Promise<void> {
        try {
            await mongoose.connect(URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                dbName: 'restMongodb'
            }).then(() => {
                console.log('Database connected');
            })
        } catch (err) {
            throw new Error(`ERROR: Database connection: ${err}`);
        }
    },

    async close(): Promise<void> {
        await mongoose.disconnect();
    }
}

export default conncetion;