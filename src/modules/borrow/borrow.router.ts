import { Router } from "express";
import { bookController } from "../book/book.controller";
import { borrowController } from "./borrow.controller";

const borrowRoute = Router()
borrowRoute.post("/",borrowController.createBorrowRequest )
borrowRoute.get("/",borrowController.getBorrowSummary)

export default borrowRoute