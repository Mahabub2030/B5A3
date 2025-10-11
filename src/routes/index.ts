import { Router } from "express";
import { bookRoute } from "../modules/book/book.route";
import borrowBookRoute from "../modules/borrow/borrow.route";
// randome route here
const routes = Router();

routes.use("/books", bookRoute);
routes.use("/borrow", borrowBookRoute);

export default routes;
