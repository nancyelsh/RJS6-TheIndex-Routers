import React from "react";
import { Link } from "react-router-dom";

function BookRow(props) {
  const book = props.book;
  const authors = book.authors.map(author => (
    <Link to={`/authors/${author.id}`} key={author.id}>
      {author.name}
    </Link>
  ));
  return (
    <tr>
      <td>{book.title}</td>
      {/* <Link to={`/books/${author.id}`}>{author.name}</Link> */}
      <td>{authors}</td>
      <td>
<<<<<<< HEAD
        <Link to={`/books/${book.color}`}>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </Link>
=======
        <Link to={`/books/${book.color}`} key={book.color}>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </Link>
        {/* <button className="btn" style={{ backgroundColor: book.color }} /> */}
>>>>>>> 1eb696ba010528861951938a8caff4d91e6ceca4
      </td>
    </tr>
  );
}

export default BookRow;
