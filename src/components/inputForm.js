import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const dispatch = useDispatch();
  const [Title, setTitle] = useState('');
  const [Author, setAuthor] = useState('');

  return (
    <div id="add-book">
      <h1>ADD NEW BOOK</h1>
      <form id="form-book">
        <input id="title" value={Title} onInput={(e) => setTitle(e.target.value)} placeholder="Book title" type="text" />
        <input id="author" value={Author} onInput={(e) => setAuthor(e.target.value)} placeholder="Author" type="text" />
        <button
          type="button"
          onClick={() => {
            dispatch(addBook({
              item_id: uuidv4(),
              title: Title,
              author: Author,
              category: 'Fiction',
            }));
            setAuthor('');
            setTitle('');
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default Form;
