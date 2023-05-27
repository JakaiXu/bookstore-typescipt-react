import React, {useEffect, useContext } from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";

import BooksContext from "../context/books";
const App = () => {
  const { fetchBook } = useContext(BooksContext);

  useEffect(() => {
    fetchBook();
  }, [fetchBook]);

  return (
    <div>
      <h1 className="m-6 text-4xl font-bold text-orange-800">Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
};

export default App;
