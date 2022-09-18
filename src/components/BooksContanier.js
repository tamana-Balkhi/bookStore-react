import React, { useState } from 'react';
import DisBooks from './displayBooks';
import Form from './inputForm';

const books = [
  {
    id: 1,
    title: 'book title',
    author: 'book author',
  },
];

function BooksContainer() {
  const [state] = useState(books);
  return (
    <>
      <div id="books-list">
        {state.map((book) => (
          <DisBooks key={book.id} book={book} />
        ))}
      </div>
      <Form />
    </>
  );
}

export default BooksContainer;
