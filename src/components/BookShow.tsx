import React, { useState } from "react";
import { AiFillEdit, AiFillCloseCircle } from "react-icons/ai";
import { useBooksContext } from "../hooks/use-books-context";
import BookEdit from "./BookEdit";
interface Book {
  book: { title: string | number; id: number };
}
const BookShow = ({ book }: Book) => {
  const [edit, setEdit] = useState<boolean>(false);
  const { deleteBook } = useBooksContext();
  const toggleEdit = () => {
    setEdit(!edit);
  };
  const onEdit = () => {
    setEdit(false);
  };
  let content = (
    <div className="relative top-36 text-center ">{book.title}</div>
  );
  if (edit) {
    content = (
      <div className="absolute top-24 m-2 bg-gray-200 shadow-xl">
        <BookEdit onEdit={onEdit} book={book} />
      </div>
    );
  }

  return (
    <div>
      <div>
        <i
          onClick={() => deleteBook(book.id)}
          className="absolute right-1 top-1"
        >
          <AiFillCloseCircle />
        </i>
      </div>
      <i className="absolute right-6 top-1" onClick={toggleEdit}>
        <AiFillEdit />
      </i>
      <img
        src={`https://picsum.photos/seed/${book.id}/94/90`}
        alt="book pic"
        className="absolute top-10 left-4 rounded-lg"
      />
      {content}
    </div>
  );
};

export default BookShow;
