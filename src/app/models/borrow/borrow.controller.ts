import { Request, Response } from "express";
import { borrowBookService, getBorrowedBooksSummaryService } from "./borrow.service";

const borrowBook = async (req: Request, res: Response) => {
  try {
    const { book, quantity, dueDate } = req.body;

    const borrow = await borrowBookService.borrowBook(
      book,
      quantity,
      new Date(dueDate)
    );
    res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      data: borrow,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message,
      error: err,
    });
  }
};

const borrowSummary = async (req: Request, res: Response) =>{
    try {
        const BorrowSummary = await getBorrowedBooksSummaryService()
        res.status(201).json({
      success: true,
      message: "Book Summary successfully",
      data: BorrowSummary,
    });
    } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Failed to fetch borrowed books summary",
      error: err
    });
  }
   
}

export const borrowControl = {
  borrowBook,
  borrowSummary
};
