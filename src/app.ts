import express from 'express';

function startServer() {
    const PORT: number = 3000;

    const app = express();
    app.use(express.json());
    app.listen(PORT, () => {
        console.log(`Server is listening port ${PORT}...`)
    });
}

export default startServer