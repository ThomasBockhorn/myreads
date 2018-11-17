import React, { Component } from "react";
import WantToRead from "./wantToRead";
import CurrentlyReading from "./currentlyReading";
import Read from "./read";
import * as BooksAPI from "../BooksAPI";

class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      display: "none"
    };
  }

  //This will load all the books from BooksAPI
  componentDidMount = () => {
    BooksAPI.getAll()
      .then(book => {
        this.state.books = book;
        this.setState(this.state.books);
      })
      .catch(error => console.log(error));
  };

  //This will update the books from BookAPI
  componentWillUpdate = () => {
    BooksAPI.getAll()
      .then(book => {
        this.state.books = book;
        this.setState(this.state.books);
      })
      .catch(error => console.log(error));
  };

  //This method will move the book to other shelves
  moveBook = e => {
    this.state.books.map(book => {
      if (e.target.innerText === "Want To Read") {
        if (book.id === e.target.id) {
          book.shelf = "wantToRead";
          this.setState();
        }
      } else if (e.target.innerText === "Currently Reading") {
        if (book.id === e.target.id) {
          book.shelf = "currentlyReading";
          this.setState();
        }
      } else if (e.target.innerText === "Read") {
        if (book.id === e.target.id) {
          book.shelf = "read";
          this.setState();
        }
      } else {
        if (book.id === e.target.id) {
          book.shelf = "none";
          this.setState();
        }
      }

      //Updates server
      BooksAPI.get(book.id).then(item => BooksAPI.update(item, book.shelf));
    });
  };

  render() {
    return (
      <div id="main">
        <WantToRead bookList={this.state.books} moveBook={this.moveBook} />
        <CurrentlyReading
          bookList={this.state.books}
          moveBook={this.moveBook}
        />
        <Read bookList={this.state.books} moveBook={this.moveBook} />
      </div>
    );
  }
}

export default main;
