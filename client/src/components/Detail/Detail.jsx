import React from "react";
//css
import "./Detail.css";
//hooks
import { useEffect, useState } from "react";
//router
import { useParams, Link } from "react-router-dom";
//
import axios from "axios";
import { URL } from "../../Utils/Utils";
const Detail = () => {
  const { id } = useParams();
  const [videogame, setVideogame] = useState({});
  const [loading, setLoading] = useState(true);
  const detail = async () => {
    const { data } = await axios(`${URL}/videogames/${id}`);
    console.log("llamado a la api");

    if (data.name) {
      setVideogame(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    detail();
    return setVideogame({});
    console.log("llamado a la api");
  }, [id]);
 
  const badRate = videogame.rating < 3;

  return (
    <div className="detail-box ">
      {loading ? (
        <div className="detail-back-box">
          <img className="backdrop-img" src="" alt="imagen" />

          <div className="detail-front-box">
            <div className="detail-front-cover skeleton">
              <div className="items-detail-box skeleton">
                <div className="detail-img2 skeleton"></div>
                <div>
                  <div className="text-detail  skeleton">
                    <div className="title" data-title>
                      <div className="skeleton skeleton-text"></div>
                      <div className="skeleton skeleton-text"></div>
                    </div>
                    <div className="title" data-title>
                      <div className="skeleton skeleton-text"></div>
                      <div className="skeleton skeleton-text"></div>
                    </div>{" "}
                    <div className="title" data-title>
                      <div className="skeleton skeleton-text"></div>
                      <div className="skeleton skeleton-text"></div>
                    </div>
                    <span className="skeleton-box box"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
     
        <div className="detail-back-box">
          <img className="backdrop-img" src={videogame.image} alt="" />

          <div className="detail-front-box">
            <div className="detail-front-cover">
              <div className="items-detail-box">
                <img className="detail-img" src={videogame.image} alt="" />
                <div>
                  <div className="text-detail">
                    <h1 className="detail-title">{videogame.name}</h1>
                    <h5 className="date-detail">
                      {" "}
                      Release date: {videogame.released}
                    </h5>
                    <h3 className="rating-detail">
                      Rating:
                      <span className={badRate ? "badRate" : "goodRate"}>
                        {" " + videogame.rating + " "}
                      </span>
                      <span className="star-icon">★</span>
                    </h3>
                    <h5>
                      <ul>
                        {videogame.platforms?.map((el) => (
                          <p className="platform"> {el}</p>
                        ))}
                      </ul>{" "}
                    </h5>
                    <h5>
                      <ul>
                        {videogame.genres?.map((genre) => (
                          <p className="platform">{genre}</p>
                        ))}{" "}
                      </ul>
                    </h5>

                    <p className="detail-description">
                      {" "}
                      {videogame.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Detail;
