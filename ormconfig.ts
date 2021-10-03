import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  type: "mongodb",
  url: "mongodb://User:Pass@localhost:27017/restNodeDB?authSource=admin",
  database: "restNodeDB",
  synchronize: true,
  logging: false,
  entities: ["src/entities/*.entity.ts"],
  migrations: ["src/database/migrations/**/*.ts"],
  migrationsRun: true,
  cli: {
    entitiesDir: "src/entities",
  },
};

export = config;
