import cors from "cors";
import express, { Request, Response } from "express";

import mongoose from "mongoose";
import { bookRoute } from "./modules/book/book.route";
import borrowBookRoute from "./modules/borrow/borrow.route";

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes

app.use("/books", bookRoute);
app.use("/borrow", borrowBookRoute);

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "This is Library Management API",
  });
});
let isConnected = false;
export const connectDB = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.DATABASE_URL!);
    console.log("MongoDB connected (serverless)");
    isConnected = true;
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
};
export default app;
