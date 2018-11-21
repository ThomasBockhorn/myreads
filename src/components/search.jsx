import React, { Component } from "react";
import queryString from "query-string";
import * as BooksAPI from "../BooksAPI";

class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      books: []
    };
  }

  //This will load the books with the search query
  componentWillMount() {
    const parsed = queryString.parse(this.props.location.search);
    const searchTerm = parsed.search;
    if (searchTerm !== "") {
      BooksAPI.search(searchTerm)
        .then(result => {
          if (result.error !== "empty query") {
            this.setState({
              isLoaded: true,
              books: result
            });
          }
        })
        .catch(result => {
          this.setState({
            isLoaded: false
          });
        });
    }
  }

  //This method will change the shelf location of the book to the default "wantToRead"
  changeShelf = e => {
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
    }
  };

  //This will delete the selected book
  deleteSelected = e => {
    //This will change the shelf of the book from none to wantToRead shelf
    this.changeShelf(e);

    //This will delete the current search list
    const newSearch = this.state.books.filter(term => term.id !== e.target.id);
    this.setState({ books: newSearch });
  };

  //This will display the books
  searchDisplay = () => {
    if (this.state.books.length !== 0) {
      return this.state.books.map(item => {
        if (item.imageLinks) {
          return (
            <div id="book" key={item.id} className="menuDisplay">
              <img
                id={item.id}
                src={item.imageLinks.smallThumbnail}
                height="100"
                width="80"
                alt={item.authors}
              />

              <form id="locationControl" className="menu">
                <button
                  id={item.id}
                  type="button"
                  onClick={e => this.deleteSelected(e)}
                >
                  Want To Read
                </button>
                <button
                  id={item.id}
                  type="button"
                  onClick={e => this.deleteSelected(e)}
                >
                  Currently Reading
                </button>
                <button
                  id={item.id}
                  type="button"
                  onClick={e => this.deleteSelected(e)}
                >
                  Read
                </button>
              </form>
            </div>
          );
        }
      });
    } else {
      return <div />;
    }
  };

  render() {
    return <div id="searchfield">{this.searchDisplay()}</div>;
  }
}

export default search;
