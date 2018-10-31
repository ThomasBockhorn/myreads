import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";

function wantToRead() {
  return (
    <div className="wantToRead">
      <h2 className="heading">Want to Read</h2>
      <hr className="style-two" />
      <div className="wanttoreadcontainer" />
    </div>
  );
}

export default wantToRead;
