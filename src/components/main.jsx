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
    if (e.target.innerText === "Want To Read") {
      BooksAPI.get(e.target.id).then(book => {
        BooksAPI.update(book, "wantToRead");
      });
    } else if (e.target.innerText === "Currently Reading") {
      BooksAPI.get(e.target.id).then(book => {
        BooksAPI.update(book, "currentlyReading");
      });
    } else if (e.target.innerText === "Read") {
      BooksAPI.get(e.target.id).then(book => {
        BooksAPI.update(book, "read");
      });
    } else {
      BooksAPI.get(e.target.id).then(book => {
        BooksAPI.update(book, "none");
      });
    }
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
