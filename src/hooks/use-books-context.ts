import BooksContext from "../context/books";
import { useContext } from "react";

export const useBooksContext = () => {
  return useContext(BooksContext);
};
