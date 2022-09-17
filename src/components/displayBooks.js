/* eslint-disable react/prop-types,  react/destructuring-assignment */

function DisBooks(props) {
  const {
    book,
  } = props;
  return (
    <div className="book">
      <div className="b-info">
        <h2>{ book.title }</h2>
        <h3>{ book.author }</h3>
        <div className="actions-container">
          <button type="button" className="btn" id="comment">Comments</button>
          <button type="button" className="btn" id="comment">Remove</button>
          <button type="button" className="btn" id="comment">Edit</button>
        </div>
      </div>

      <div className="progress-percent">
        <h3>{ book.percentage } 0%</h3>
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