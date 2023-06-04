import React from "react";
//css
import "./Card.css";
//redux
import { useDispatch } from "react-redux";
//router
import { Link, Navigate, useNavigate } from "react-router-dom";
//
import axios from "axios";
import { URL } from "../../Utils/Utils";
const Card = ({ name, image, genres, id, rating, loading, created }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (id) => {
    dispatch(deleteVideogame(id));
    navigate("/home");
    console.log("eliminado");
  };

  const deleteVideogame = async (id) => {
    try {
      console.log("algo");
      await axios.delete(`${URL}/videogames/${id}`);
      alert('personaje eliminado con exito')
      navigate("/heroSection");
    } catch (error) {
      return error.message;
    }
  };

  return (
    <>
      {loading ? (
        <h1 className="loadging-card">"cargando"</h1>
      ) : (
        <div className="card ">
          <div className="card-details">
            <ul className="genres-card">
              <li className="genres-card-li">
                {created ? (
                  <button
                    className="delete-btn"
                    onClick={() => handleClick(id)}
                    type=""
                  >
                    <span className="material-symbols-outlined delete-btn">
                      delete
                    </span>
                  </button>
                ) : (
                  ""
                )}
                {created ? (
                  <Link
                    to={`/editGame/${id}`}
                    className="delete-btn edit"
                    type=""
                  >
                    <span className="material-symbols-outlined edit">edit</span>{" "}
                  </Link>
                ) : (
                  ""
                )}
                <ul>
                  {genres.map((genre) => (
                    <p>{genre}</p>
                  ))}{" "}
                </ul>
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
      )}
    </>
  );
};

export default Card;
