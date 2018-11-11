import React, { Component } from "react";

class read extends Component {
  //This will display the book in this container
  displayBooks = () => {
    return this.props.bookList.map(item => {
      if (item.shelf === "read") {
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

  render() {
    return (
      <div className="read">
        <h2 className="heading">Read</h2>
        <hr className="style-two" />
        <div className="readcontainer" id="book" />
        {this.displayBooks()}
      </div>
    );
  }
}

export default read;
