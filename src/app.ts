import express, { Application, Request, Response } from "express";

import bookRoutes from "./app/models/book/book.route";
import { router } from "./app/router";
const app: Application = express();

app.use(express.json());
app.use("/api/v1", router);
app.use("/book", bookRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome! to Liabry  app");
});

export default app;
