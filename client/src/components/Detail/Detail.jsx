import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Detail.css";
const Detail = () => {
  const { id } = useParams();
  const [videogame, setVideogame] = useState({});
  const [loading, setLoading] = useState(true);
  const detail = async () => {
    const { data } = await axios(`http://localhost:3001/videogames/${id}`);
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
  // const videogamee = [
  //   {
  //     id: 2,
  //   },
  //   {
  //     image:
  //       "https://media.rawg.io/media/screenshots/0af/0afe1ce86536d751f22ad77544d2293c.jpg",
  //   },
  //   { name: "Extreme Exorcism" },
  //   {
  //     description:
  //       "Extreme Exorcism is a paranormal platformer where every move you make comes back to haunt you.\nTake on the role of Mae Barrons; an Extreme Exorcist with extreme measures. Her supernatural skills are called upon when everything and everyone else has failed to rid a haunted house of its ghostly presence.\nConventional methods won’t cut it with these ghosts. Instead, Mae comes armed with a deadly arsenal of ghost-busting weapons, from rocket launchers to razor sharp boomerangs.\nBut these aren’t your average poltergeists. At the end of each round, a ghost appears and mimics your every move from the round before. The longer you survive the more extreme the game becomes.\nEngage in non-stop ghost annihilation in 10 eerie areas of the haunted house – each room presenting its own hellish hazard. Brave the winds on the balcony and the fire in the kitchen, surviving for as long as you can.\nWith a devilish local multiplayer – you can play co-op or deathmatch modes with up to 3 of your friends, and with 50 unique challenges even the most daring Extreme Exorcist will be put to the test.",
  //   },
  //   { genres: ["Action", "Adventure", "Casual", "Indie"] },
  //   { released: "2015-09-23" },
  //   {
  //     rating: 4.72,
  //     platforms: [
  //       "Wii U",
  //       "PlayStation 3",
  //       "PlayStation 4",
  //       "PC",
  //       "Xbox One",
  //       "macOS",
  //     ],
  //   },
  //   // "website": "http://extremeexorcism.com"
  //   // }
  // ];
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
                    <div class="title" data-title>
                      <div class="skeleton skeleton-text"></div>
                      <div class="skeleton skeleton-text"></div>
                    </div>
                    <div class="title" data-title>
                      <div class="skeleton skeleton-text"></div>
                      <div class="skeleton skeleton-text"></div>
                    </div>{" "}
                    <div class="title" data-title>
                      <div class="skeleton skeleton-text"></div>
                      <div class="skeleton skeleton-text"></div>
                    </div>
                    <span class="skeleton-box box"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // <div className="detail-back-box">
        //   <img className="backdrop-img" src="" alt="imagen" />

        //   <div className="detail-front-box">
        //     <div className="detail-front-cover">
        //       <div className="items-detail-box ">
        //         <img className="detail-img" src="" alt="imagen" />
        //         <div>
        //           <div className="text-detail " >
        //             <h1 className="detail-title">nombre</h1>
        //             <span class="skeleton-box box"></span>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
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
