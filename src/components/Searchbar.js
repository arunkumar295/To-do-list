import React from "react";

const Searchbar = ({ search, setSearch }) => {
  return (
    <form className="searchform my-4" onClick={(e) => e.preventDefault()}>
      <input
        style={{ width: "19%" }}
        id="search"
        type="text"
        role="search"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </form>
  );
};
export default Searchbar;
