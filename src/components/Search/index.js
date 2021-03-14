import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
  let history = useHistory();

  const [value, setValue] = useState("");

  useEffect(() => {
    const pathname = window.location.pathname;
    const username = pathname.split("/");
    setValue(username[1]);
  }, []);

  function _handleChange(e) {
    setValue(e.target.value);
  }

  function _handleSubmit(e) {
    e.preventDefault();

    if (!value) return;

    history.push(`/${value}`);
  }

  return (
    <section className="search">
      <div className="container flex justify-center">
        <form className="search__form" onSubmit={_handleSubmit}>
          <input value={value} type="search" onChange={_handleChange} />

          <span className="search__form-buttom flex justify-center items-center">
            <button type="submit">
              <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width={14}
                height={12}
              >
                <path
                  fill="white"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </span>
        </form>
      </div>
    </section>
  );
};

export default Search;
