import React, { ChangeEvent, FormEvent, useState } from "react";
import { useBooksContext } from "../hooks/use-books-context";

interface EditTitle {
  onEdit: () => void;
  book: { title: string | number; id: number };
}

const BookEdit = ({ onEdit, book }: EditTitle) => {
  const [editedTitle, setEditedTitle] = useState<string | number>(book.title);
  const { editTitleById } = useBooksContext();
  const handleEditedTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onEdit();
    editTitleById(editedTitle, book.id);
  };
  return (
    <form onSubmit={handleSubmit} className="text-center ">
      <label>Edit Title</label>
      <input
        value={editedTitle}
        className="w-full pl-2"
        placeholder="Edit Title"
        onChange={handleEditedTitle}
      />
      <button
        type="button"
        className="border-2 border-white mt-1 px-1 rounded-md"
        onClick={() => onEdit()}
      >
        Save
      </button>
    </form>
  );
};

export default BookEdit;
