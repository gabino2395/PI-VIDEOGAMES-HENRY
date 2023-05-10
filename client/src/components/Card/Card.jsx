import React from "react";

const Card = ({ name, image, genres }) => {
  return (
    <div>
      <h3>{name}</h3>
      <ul>
        <li>{genres}</li>
      </ul>
      <img src={image} alt="" width="200px" height="250px" />
    </div>
  );
};

export default Card;
