import express from "express";

import bookRoutes from "./app/models/book/book.route";
import { router } from "./app/router";
const app = express();

app.use(express.json());
app.use("/api/v1", router);
app.use("/book", bookRoutes);

app.get("/", (req, res) => {
  res.send("Welcome! to Liabry  app");
});

export default app;
