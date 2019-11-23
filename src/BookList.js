import React, { Component } from "react";

// Components
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
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
    const bookColor = this.props.match.params.bookColor;
    let books = this.state.filteredBooks;

    if (bookColor) {
      books = this.filterByColor(bookColor);
    }

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
