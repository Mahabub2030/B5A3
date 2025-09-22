import express from "express";
import { borrowControl } from "./borrow.controller";

const router = express.Router();

router.post("/:Id", borrowControl.borrowBook);
router.get("/", borrowControl.borrowSummary);

export const BorrowRoutes = router;
