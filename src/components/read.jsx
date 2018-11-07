import React, { Component } from "react";

class read extends Component {
  //This will display the book in this container
  displayBooks = () => {
    return this.props.bookList.map(item => {
      if (item.shelf === "read") {
        return (
          <img
            id={item.id}
            src={item.imageLinks.smallThumbnail}
            height="100"
            width="80"
            location={item.location}
            alt={item.authors}
          />
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
