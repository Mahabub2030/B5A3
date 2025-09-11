import {  Request, Response } from "express";
import { Borrow } from "./borrow.model";
import { IBorrow } from "./borrow.interface";
import { Book } from "../Book.model";


const borrowBook = async (bookId: string, quantity: number, dueDate: Date): Promise<IBorrow> =>{
   
        
const book = await Book.findById(bookId);
  if (!book) throw new Error("Book not found");

  if (book.copies < quantity) throw new Error("Not enough copies available");

  book.copies -= quantity;
  if (book.copies === 0) book.available = false;

  await book.save();

  const borrow = new Borrow({ book: book._id, quantity, dueDate });
  return await borrow.save(); 
    
}

const borrowedBooksSummary = async(req: Request, res: Response) =>{

    try {
      const BorrowSummary = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" }
        }
      },
      {
        $lookup: {
          from: "books", 
          localField: "_id",
          foreignField: "_id",
          as: "bookInfo"
        }
      },
      { $unwind: "$bookInfo" },
      {
        $project: {
          _id: 0,
          book: {
            title: "$bookInfo.title",
            isbn: "$bookInfo.isbn"
          },
          totalQuantity: 1
        }
      }
    ]);

    res.status(200).json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: BorrowSummary
    });
    } catch (err) {
       res.status(500).json({
      success: false,
      error: err
    });
    }
}
export const getBorrowedBooksSummaryService = async () => {
  try {
    const summary = await Borrow.aggregate([
      // Group by book ID and sum quantity
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" }
        }
      },
      // Lookup book details from books collection
      {
        $lookup: {
          from: "books",         // name of the collection
          localField: "_id",     // book ID in borrow collection
          foreignField: "_id",   // book ID in books collection
          as: "bookInfo"
        }
      },
      { $unwind: "$bookInfo" },  // Flatten the array from lookup
      // Project only required fields
      {
        $project: {
          _id: 0,
          book: {
            title: "$bookInfo.title",
            isbn: "$bookInfo.isbn"
          },
          totalQuantity: 1
        }
      }
    ]);

    return summary;
  } catch (err) {
    throw new Error("Failed to get borrowed books summary: " + (err as Error).message);
  }
};

export const borrowBookService ={
    borrowedBooksSummary,
    borrowBook
}