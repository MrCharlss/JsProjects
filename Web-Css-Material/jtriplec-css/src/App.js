import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Stylesheet.css";
import Header from "./components/Header";
import MainSection from "./components/main";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainSection />
        <Footer />
      </div>
    );
  }
}

export default App;
