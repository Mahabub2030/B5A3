import { NextFunction, Request, Response } from "express";
import { Borrow } from "./borrow.model";


const borrowBook = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        
const payload = req.body;
const borrow = await Borrow.create(payload);

    } catch (error) {
        
    }
}