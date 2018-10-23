import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import Search from "./components/search";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Main} />
            <Route path="/search" component={Search} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
