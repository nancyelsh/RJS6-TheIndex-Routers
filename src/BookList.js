import React, { Component } from "react";

// Components
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  state = {
<<<<<<< HEAD
    filteredBooks: this.props.books
=======
    filteredBooks: this.props.books,
    filterBooksByColor: this.props.books,
    book: null
>>>>>>> 1eb696ba010528861951938a8caff4d91e6ceca4
  };

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      book.title.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  filterByColor = color => {
    return this.state.filteredBooks.filter(book => book.color === color);
  };

  render() {
<<<<<<< HEAD
    const bookColor = this.props.match.params.bookColor;
    let books = this.state.filteredBooks;

    if (bookColor) {
      books = this.filterByColor(bookColor);
    }

=======
>>>>>>> 1eb696ba010528861951938a8caff4d91e6ceca4
    return (
      <div className="book">
        <h3>Books</h3>
        <SearchBar onChange={this.filterBooks} />
        <BookTable books={books} />
      </div>
    );
  }
}

export default BookList;
