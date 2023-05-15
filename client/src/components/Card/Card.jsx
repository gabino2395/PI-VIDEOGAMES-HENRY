import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, image, genres ,id}) => {
  return (
    <div>
      <Link to={`/detail/${id}`}>
      <h3>{name}</h3>
      <ul>
        <li>{genres}</li>
      </ul>
      <img src={image} alt="" width="200px" height="250px" />
      </Link>
    </div>
  );
};

export default Card;
