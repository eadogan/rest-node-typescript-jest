"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // this shim is required
// import { cors } from "cors";
var express_1 = __importDefault(require("express"));
var typedi_1 = require("typedi");
var routing_controllers_1 = require("routing-controllers");
var index_1 = require("./controllers/index");
// required by routing-controllers
(0, routing_controllers_1.useContainer)(typedi_1.Container);
var app = (0, express_1.default)();
var routingControllersOptions = {
    routePrefix: "/api/v1",
    defaultErrorHandler: false,
    cors: true,
    controllers: index_1.controllers,
    interceptors: [],
};
// Wrap server with routing-controllers
(0, routing_controllers_1.useExpressServer)(app, routingControllersOptions);
exports.default = app;
//# sourceMappingURL=app.js.map