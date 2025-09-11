import mongoose, { Schema } from "mongoose";
import { IBorrow } from "./borrow.interface";

const BorrowSchema: Schema<IBorrow> = new Schema(
  {
    book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
    quantity: { type: Number, required: true, min: 1 },
    dueDate: { type: Date, required: true },
  },
  { timestamps: true }
);
export const Borrow = mongoose.model<IBorrow>("Borrow", BorrowSchema);