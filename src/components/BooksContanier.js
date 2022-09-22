import { useSelector } from 'react-redux';
import DisBooks from './displayBooks';
import Form from './inputForm';

function BooksContainer() {
  const books = useSelector((state) => state.books);
  return (
    <>
      <div id="books-list">
        {books.map((book) => (
          <DisBooks key={book.id} book={book} />
        ))}
      </div>
      <Form />
    </>
  );
}

export default BooksContainer;
