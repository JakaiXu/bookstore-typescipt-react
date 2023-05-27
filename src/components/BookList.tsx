import BookShow from "./BookShow";
import { useBooksContext } from "../hooks/use-books-context";
const BookList = () => {
  const { books } = useBooksContext();
  const renderedList = books.map((book) => (
    <div
      key={book.id}
      className="w-32 h-48 border-2 m-5 shadow-xl rounded-md bg-amber-400 text-orange-800 font-bold relative"
    >
      <BookShow book={book} />
    </div>
  ));
  return (
    <div className="mt-3 border-t shadow-xl w-full flex flex-wrap flex-row justify-center">
      {renderedList}
    </div>
  );
};

export default BookList;
