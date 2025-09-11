import express from "express";
import { bookController } from "./book.controller";

export const bookRoutes = express.Router();

bookRoutes.post("/createBook", bookController.createBook);
bookRoutes.get("/",bookController.getAllBooks)
bookRoutes.patch("/:id",bookController.updateBook)
bookRoutes.delete("/:id", bookController.deleteBook)


export default bookRoutes;
