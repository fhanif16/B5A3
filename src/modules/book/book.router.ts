import { Router } from "express";
import { bookController } from "./book.controller";

const bookRoute = Router();
bookRoute.post ("/", bookController.createBook);
bookRoute.get("/:bookId", bookController.getBookById)
bookRoute.put("/:bookId", bookController.updateBook)
bookRoute.delete("/:bookId", bookController.deleteBookById)
bookRoute.get("/", bookController.getBooks)


export default bookRoute