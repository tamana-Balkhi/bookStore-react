// Actions for books
const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';

const initialState = [{
  id: 1,
  title: 'the Hunger Games',
  percentage: 64,
  author: 'Suzanne Collins',
  chapter: 17,
},
{
  id: 2,
  title: 'Dune',
  percentage: 35,
  author: 'Frank Herbert',
  chapter: 3,
},
{
  id: 3,
  title: 'The Capital of Twenry-First century',
  percentage: 18,
  author: 'Suzanne Collins',
  chapter: 'Introduction',
}];

// Actions creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

// Reducer
function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return state.concat(action.book);
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    default: return state;
  }
}

export default booksReducer;
