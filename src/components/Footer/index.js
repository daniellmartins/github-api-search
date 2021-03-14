import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container flex justify-center">
        <p>
          Created by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            title="Go to Profile in GitHub"
            href="https://github.com/daniellmartins"
          >
            Daniel Martins
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
