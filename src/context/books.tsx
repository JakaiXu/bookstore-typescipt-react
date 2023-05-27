import React, { createContext, useState } from "react";
import axios from "axios";
type UseGlobalContextProps = {
  children: React.ReactNode;
};

interface ContextProps {
  books: { title: string | number; id: number }[];
  fetchBook: () => void;
  editTitleById: (title: string | number, id: number) => void;
  deleteBook: (id: number) => void;
  createBook: (title: string | number) => void;
}

// type ProviderContext = [ContextPros[], React.Dispatch<React.SetStateAction<ContextPros[]>>]

interface BookListProps {
  title: string | number; id: number ;
}
const BooksContext = createContext<ContextProps>({
  books:[{title:"",id:1}],
  fetchBook:() => {},
  editTitleById:() => {},
  deleteBook:() => {},
  createBook:() => {},
});

const UseGlobalContext = ({ children }: UseGlobalContextProps) => {
  const [books, setBooks] = useState<BookListProps[]>([]);

  const deleteBook = async (id: number) => {
    await axios.delete(`http://localhost:3005/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const editTitleById = async (title: string | number, id: number) => {
    const response = await axios.put(`http://localhost:3005/books/${id}`, {
      title: title,
    });
    const updatedBooks = books.map((book: BookListProps) => {
      if (book.id === id) return { ...book, ...response.data };
      return book;
    });
    setBooks(updatedBooks);
  };

  const fetchBook = async () => {
    const response = await axios.get("http://localhost:3005/books");
    setBooks(response.data);
  };

  const createBook = async (term: string | number) => {
    const response = await axios.post("http://localhost:3005/books", {
      title: term,
    });
    const updatedBooks = [...books, response.data.title];

    setBooks(updatedBooks);
  };

  return (
    <BooksContext.Provider
      value={{books, fetchBook, editTitleById, deleteBook, createBook }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
export { UseGlobalContext };
