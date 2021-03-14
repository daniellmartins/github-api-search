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
    <div>
      <form onSubmit={_handleSubmit}>
        <input value={value} type="text" onChange={_handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
