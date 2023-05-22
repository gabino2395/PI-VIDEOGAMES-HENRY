import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
const Card = ({ name, image, genres, id, rating, loading }) => {
  return (
    <>
    {
      loading ? <h1 className="loadging-card">
"cargando"
      </h1> :


      <div className="card ">
        <div className="card-details">
          <ul className="genres-card">
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
          <h3 className="card-detail-name">{name}</h3>
          <p className="card-rating">{rating + " ★"}</p>
          <div className="detail-btn-box">
            <Link className="detail-btn" to={`/detail/${id}`}>
              Detail
            </Link>
          </div>
        </div>
        <img src={image} alt="" width="200px" height="250px" />
      </div>
    }
    </>
  );
};

export default Card;
