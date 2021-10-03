"use strict";
var config = {
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
module.exports = config;
//# sourceMappingURL=ormconfig.js.map