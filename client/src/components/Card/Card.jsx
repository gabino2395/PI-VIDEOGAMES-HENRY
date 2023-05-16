import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
const Card = ({ name, image, genres, id,rating }) => {
  return (
    <div className="card">
      <div className="card-details">
        <ul className="genres-card2">
          <li className="genres-card-li">
            <ul>
              {genres.map((genre) => (
                <p>{genre}</p>
              ))}{" "}
            </ul>

            {/* <p>{genres[0]}</p> */}
            {/* <p>{genres[1]}</p> */}
            {/* <p>{genres[0] + "/" + genres[1] && genres[1]} </p> */}
          </li>
        </ul>
        <p className="card-rating">{rating  + ' ★' }</p>
        <h3 className="card-detail-name">{name}</h3>
        <div className="detail-btn-box">
          <Link className="detail-btn" to={`/detail/${id}`}>
            Detail
          </Link>
        </div>
      </div>
      <img src={image} alt="" width="200px" height="250px" />
    </div>
  );
};

export default Card;
