import mongoose, { Model, Schema } from "mongoose";
import { IBook } from "./book.interface";

export enum History {
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
}

const bookSchema = new Schema<IBook>(
  {
    title: { type: String },
    author: { type: String },

    genre: {
      type: String,
      required: true,
      enum: History,
      isbn: { type: String, required: true, unique: true },
      description: { type: String },
      copies: {
        type: Number,
        required: true,
        min: [0, "Copies must be a positive number"],
      },
      available: { type: Boolean, default: true },
    },
  },
  { timestamps: true }
);
export const Book: Model<IBook> = mongoose.model<IBook>("Book", bookSchema);
