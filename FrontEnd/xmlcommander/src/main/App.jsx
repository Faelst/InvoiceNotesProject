import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Logo from "../Components/Logo";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import Routes from "./Router";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <Nav />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
