/* eslint-disable react/prop-types,  react/destructuring-assignment */
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function DisBooks(props) {
  const {
    book,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className="book">
      <div className="b-info">
        <h2>{ book.title }</h2>
        <h3>{ book.author }</h3>
        <div className="actions-container">
          <button type="button" className="btn" id="btn">Comments</button>
          <button type="button" className="btn" id="btn" onClick={() => dispatch(removeBook(book))}>Remove</button>
          <button type="button" className="btn" id="btn">Edit</button>
        </div>
      </div>

      <div className="progress-percent">
        <h3>
          { book.percentage }
        </h3>
      </div>

      <div className="update-progress">
        <span>Current Chapter</span>
        <h2>{ book.chapter }</h2>
        <button type="button" className="update">Update progress</button>
      </div>

    </div>
  );
}

export default DisBooks;
