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
  componentDidMount() {
    BooksAPI.getAll()
      .then(book => {
        this.state.books = book;
        this.setState(this.state.books);
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div id="main">
        <WantToRead bookList={this.state.books} />
        <CurrentlyReading bookList={this.state.books} />
        <Read bookList={this.state.books} />
      </div>
    );
  }
}

export default main;
