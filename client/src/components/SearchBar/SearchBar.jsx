//css
import "./SearchBar.css";
import React from "react";
//hooks
import { useState } from "react";
//redux
import { useDispatch } from "react-redux";
import { getVideogamebyName } from "../../redux/actions";
const SearchBar = ({ setStateCard, setErrors }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    setInput("");
    setInput(event.target.value);
  };
  const onSearch = (input) => {
    dispatch(getVideogamebyName(input));
    if (!input) {
      setStateCard("");
      setErrors("You have to  write something");
    } else if (input.length < 3) {
      setStateCard("");
      setErrors("for a better, write at least 3 letters");
    } else {
      setStateCard("Results for: " + input);
      setErrors("");
    }
  };
  return (
    <div className="input-error-box">
      <div className="input-box input-bar">
        <input
          className="search-input"
          type="text"
          value={input}
          placeholder="Find your game"
          onChange={handleChange}
        />
        <div>
            <button
              className="input-btn"
              onClick={() => {
                onSearch(input);
                setInput("");
              }}
            >
              +{" "}
            </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
