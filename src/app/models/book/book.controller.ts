import { Request, Response } from "express";
import { Book } from "../Book.model";
import { IBook } from "./book.interface";
import { bookSevice } from "./book.service";

export const createBook = async (req: Request, res: Response) => {
  try {
    const payload: IBook = req.body;
    const books = await Book.create(payload);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: books,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Validation failed",
      error: err,
    });
  }
};
const getAllBooks = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const result = await bookSevice.getAllBook(query as Record<string, string>);

    res.status(201).json({
      success: true,
      message: "Book geting successfully",
      data: result.data,
      meta:result.meta
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: " Booking geting failed",
      error: err,
    });
  }
};
const updateBook = async(req: Request, res: Response) =>{
 try {
   const payload :IBook ={
    ...req.body
  }
  const result = await bookSevice.updateBook(req.params.id, payload)


 res.status(201).json({
      success: true,
      message: "Book Updateing successfully",
      data: result,
   
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: " Booking updaeting failed",
      error: err,
    });
  }
}
const  deleteBook = async (req: Request, res: Response) =>{
  try {
    const {id} = req.params;
  const result = await bookSevice.deleteBook(id)


res.status(201).json({
      success: true,
      message: "Book Delete successfully",
      data: result,
   
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: " Book Delete failed",
      error: err,
    });
  }
}




export const bookController = {
  createBook,
  getAllBooks,
  updateBook,
  deleteBook
};
