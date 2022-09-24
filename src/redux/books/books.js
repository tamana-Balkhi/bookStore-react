import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8jPJscW2sY5rPxOZDiOs/books';

const initialState = [];

const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(apiURL, book);
  if (response.status === 201) {
    return book;
  }
  return response.data;
});

const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await axios.get(apiURL);
  return response.data;
});

const removeBook = createAsyncThunk('books/removeBook', async (book) => {
  await axios.delete(`${apiURL}/${book.item_id}`);
  return book;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers to handle loading state as needed
    builder
      .addCase(addBook.fulfilled, (state, action) => {
        // Add book
        state.push(action.payload);
      })
      .addCase(addBook.pending, (state, action) => {
        // Add book
        state.push(action.payloadCreator);
      })
      .addCase(addBook.rejected, (state, action) => {
        // Add book
        state.push(action.error.message);
      })
    // getbook
      .addCase(getBooks.fulfilled, (state, action) => Object.entries(action.payload).map(
        ([id, [book]]) => ({ ...book, item_id: id }),
      ))
      .addCase(getBooks.pending, (state, action) => Object.entries(action.payloadCreator).map(
        ([id, [book]]) => ({ ...book, item_id: id }),
      ))
      .addCase(getBooks.rejected, (state, action) => Object.entries(action.error.message).map(
        ([id, [book]]) => ({ ...book, item_id: id }),
      ))
      // remove
      .addCase(removeBook.fulfilled, (state, action) => {
        state.forEach((book) => {
          if (book.item_id === action.payload.item_id) {
            state.splice(state.indexOf(book), 1);
          }
        });
      });
  },
});

export default booksSlice.reducer;
export { getBooks, removeBook, addBook };
