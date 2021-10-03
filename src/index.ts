import app from "./app";
import connection from "../src/database/connection";

const PORT: number = 3000;
const handleConncetion = async () => {
  app.listen(PORT, () => {
    console.log(`Server listening port ${PORT}...`);
  });
};

connection.create(handleConncetion);
