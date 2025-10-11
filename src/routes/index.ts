import { Router } from "express";
import { bookRoute } from "../modules/book/book.route";
import borrowBookRoute from "../modules/borrow/borrow.route";

const routes = Router();

routes.use("/books", bookRoute);
routes.use("/borrow", borrowBookRoute);

export default routes;
