import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { useLoaction } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getVideogamebyName } from "../../redux/actions";
const SearchBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [input, setInput] = useState("");

  
  const handleChange = (event) => {
    event.preventDefault();
    setInput("");
    setInput(event.target.value);
  };
  const onSearch = (input) => {
    dispatch(getVideogamebyName(input));
    console.log(input);
  };
  return (
    <div>
      SearchBar
      <input
        type="text"
        value={input}
        placeholder="Find your game"
        onChange={handleChange}
      />
      <div>
        {/* <input
          type="search"
          onChange={handleChange}
          value={name}
          placeholder="Search a country"
        /> */}
        <button
          onClick={() => {
            onSearch(input);
            setInput("");
          }}
          // disabled={
          //   location.pathname !== "/about" && location.pathname !== "/favorites"
          //     ? false
          //     : true
          // }
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
