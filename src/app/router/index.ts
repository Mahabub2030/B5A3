import { Router } from "express";
import bookRoutes from "../models/book/book.route";


export const router = Router()

const moduleRoutes = [
    {
        path: "/book",
        route: bookRoutes
    }
]
moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})
