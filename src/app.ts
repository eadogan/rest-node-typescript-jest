import "reflect-metadata"; // this shim is required
import { cors } from "cors";
import express from "express";
import { Container } from "typedi";
import { useContainer, useExpressServer } from "routing-controllers";
import { controllers } from "./controllers/index";

// required by routing-controllers
useContainer(Container);

const app: express.Express = express();

const routingControllersOptions: any = {
  defaultErrorHandler: false,
  cors: true,
  controllers,
  interceptors: [],
};

// Wrap server with routing-controllers
useExpressServer(app, routingControllersOptions);

export default app;
