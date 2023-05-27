import React, { useState } from "react";
import { useBooksContext } from "../hooks/use-books-context";

const BookCreate = () => {
  const { createBook } = useBooksContext();

  const [term, setTerm] = useState<string | number>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === null) {
      return <h1>'need to add a book'</h1>;
    } else {
      setTerm(e.currentTarget.value);
      console.log(e.currentTarget.value);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createBook(term);
    setTerm("");
  };

  return (
    <div className="w-full h-64 bg-emerald-400 shadow-xl">
      <h1 className="text-4xl text-white text-center pt-10 m-10 font-bold">
        Add a Book
      </h1>
      <form onSubmit={handleSubmit} className="text-center">
        <div className="w-full">
          <label className="text-white text-xl mr-3">TITLE</label>
          <input
            className="w-80 h-10 pl-2 rounded-lg"
            value={term}
            placeholder="Add a Book ..."
            onChange={handleChange}
          />
          <button
            type="button"
            className="border-2 rounded-md ml-3 p-1 px-4 text-white shadow-md"
            onClick={() => {
              createBook(term);
              setTerm("");
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookCreate;
