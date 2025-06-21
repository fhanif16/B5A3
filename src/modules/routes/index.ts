import { Router } from "express";
import bookRoute from "../book/book.router";
import borrowRoute from "../borrow/borrow.router";

const routes = Router();
routes.use("/books", bookRoute)
routes.use("/borrow",borrowRoute )


export default routes