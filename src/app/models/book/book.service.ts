import { QueryBuilder } from "../../utils/QueryBuilder";
import { Book } from "../Book.model";
import { IBook } from "./book.interface";
import { booksSearchableFields } from "./tour.constant";

const createBook = async (payload: IBook) => {
  const newBook = await Book.create(payload);
  return newBook;
};
const getAllBook = async (query: Record<string, string>) => {
  const queryBuilder = new QueryBuilder(Book.find(), query);

  // chain query builder methods
  queryBuilder
    .search(booksSearchableFields)
    .filter()
    .sort()
    .fields()
    .paginate();

  // execute query and get meta in parallel
  const [data, meta] = await Promise.all([
    queryBuilder.build(), // build executes the query
    queryBuilder.getMeta(), // get pagination/meta info
  ]);

  return { data, meta };
};

const updateBook = async (id: string, payload: Partial<IBook>) => {
  const existingBook = await Book.findById(id);

  if (!existingBook) {
    throw new Error("book not found");
  }

  const bookUpdate = await Book.findByIdAndUpdate(id, payload, { new: true });

  return bookUpdate;
};
const deleteBook = async (id: string) => {
  return await Book.findByIdAndDelete(id);
};

export const bookSevice = {
  createBook,
  getAllBook,
  updateBook,
  deleteBook,
};
