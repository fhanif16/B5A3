"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_router_1 = __importDefault(require("../book/book.router"));
const borrow_router_1 = __importDefault(require("../borrow/borrow.router"));
const routes = (0, express_1.Router)();
routes.use("/api/books", book_router_1.default);
routes.use("/api/borrow", borrow_router_1.default);
exports.default = routes;
