import React, { Component } from "react";
import axios from "axios";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

class BookList extends Component {
  state = {
    filteredBooks: this.props.books,
    filterBooksByColor: this.props.books,
    book: null
  };

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      book.title.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  getColor = async () => {
    const colorID = this.props.match.params.colorID;
    try {
      const res = await instance.get(`/api/books/${colorID}`);
      const book = res.data;
      this.setState({
        book: book
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="book">
        <div>
          <h3>Books</h3>
          <SearchBar onChange={this.filterBooks} />
        </div>
        <BookTable books={this.state.filteredBooks} />
      </div>
    );
  }
}

export default BookList;
