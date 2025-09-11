import { Router } from "express";
import bookRoutes from "../models/book/book.route";
import { BorrowRoutes } from "../models/borrow/borrow.route";


export const router = Router()

const moduleRoutes = [
    {
        path: "/book",
        route: bookRoutes
    },
    {
        path: "/borrow",
        route: BorrowRoutes
    }
]
moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})
