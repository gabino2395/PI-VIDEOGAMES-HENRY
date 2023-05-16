import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchBar.css";
// import { useLoaction } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getVideogamebyName } from "../../redux/actions";
const SearchBar = ({ setStateCard, setErrors }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [input, setInput] = useState("");
  // const [errors, setErrors] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    setInput("");
    setInput(event.target.value);
  };
  const onSearch = (input) => {
    dispatch(getVideogamebyName(input));
    console.log(input);
    if (!input) {
      setStateCard("");
      setErrors("You have to  write something");
    }else{

      setStateCard("Results for: " + input);
      setErrors("");

    };
    }
  return (
    <div className="input-error-box">
    
    <div className="input-box input-bar">
      {/* SearchBar */}
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
