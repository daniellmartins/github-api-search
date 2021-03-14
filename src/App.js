import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Footer, Header, Search } from "./components";

import Routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Search />

      <Routes />

      <Footer />
    </BrowserRouter>
  );
};

export default App;
