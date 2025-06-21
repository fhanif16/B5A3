import { Router } from "express";
import bookRoute from "../book/book.router";
import borrowRoute from "../borrow/borrow.router";

const routes = Router();
routes.use("/api/books", bookRoute)
routes.use("/api/borrow",borrowRoute )


export default routes