import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import DisBooks from './displayBooks';
import Form from './inputForm';

export default function BooksContainer() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <>
      <ul id="books-list">
        {books.map((book) => (
          <li key={book.item_id}>
            <DisBooks book={book} />
          </li>
        ))}
      </ul>
      <Form />
    </>
  );
}
