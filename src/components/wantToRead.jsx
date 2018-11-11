import React, { Component } from "react";

class wantToRead extends Component {
  //This creates books based on the location of the books
  displayBooks = () => {
    return this.props.bookList.map(item => {
      if (item.shelf === "wantToRead") {
        return (
          <div key={item.id} id={item.id} id="book" className="menuDisplay">
            <img
              id={item.id}
              src={item.imageLinks.smallThumbnail}
              height="100"
              width="80"
              location={item.location}
              alt={item.authors}
            />
            <form id="locationControl" className="menu">
              <button
                id={item.id}
                type="button"
                onClick={e => this.props.moveBook(e)}
              >
                Want To Read
              </button>
              <button
                id={item.id}
                type="button"
                onClick={e => this.props.moveBook(e)}
              >
                Currently Reading
              </button>
              <button
                id={item.id}
                type="button"
                onClick={e => this.props.moveBook(e)}
              >
                Read
              </button>
              <button
                id={item.id}
                type="button"
                onClick={e => this.props.moveBook(e)}
              >
                None
              </button>
            </form>
          </div>
        );
      }
    });
  };

  render = () => {
    return (
      <div className="wantToRead">
        <h2 className="heading">Want to Read</h2>
        <hr className="style-two" />
        <div className="wanttoreadcontainer" id="book" />
        {this.displayBooks()}
      </div>
    );
  };
}

export default wantToRead;
