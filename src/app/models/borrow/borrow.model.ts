



import mongoose from "mongoose";

const borrowSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  quantity: { type: Number, required: true },
  dueDate: { type: Date, required: true }
}, { timestamps: true });

export const borrorwSchema = mongoose.model('Borrow', borrowSchema);
