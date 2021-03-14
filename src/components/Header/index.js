import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container flex flex-row justify-between items-center">
        <Link title="Go to Home Page" to="/">
          <h1>GitHub API Search</h1>
        </Link>
        <a
          target="_blank"
          rel="noreferrer"
          title="Go to Source Code"
          href="https://github.com/daniellmartins/github-api-search"
        >
          GitHub
        </a>
      </div>
    </header>
  );
};

export default Header;
