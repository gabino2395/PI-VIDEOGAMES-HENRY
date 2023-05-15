import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail = () => {
  const { id } = useParams();
  const [videogame, setVideogame] = useState({});
  const detail = async () => {
    const {data} = await axios(`http://localhost:3001/videogames/${id}`)
    if(data.name){
        setVideogame(data)
        }
}

useEffect(()=>{
    detail()
    return setVideogame({})
},[id])    

  return (
    <div>
      {" "}
      <div className="detail-box">
        <img className="detail-img" src={videogame?.image} alt="" />
        <div className="detail-inner-box">
          <h5>{videogame.name}</h5>

         
          <h5>Plataformas:{videogame?.platforms}</h5>
          <p> {videogame?.description}</p>
          <h5>
            Fecha de lanzamiento: {videogame?.released}
            {/* {videogame.origin ? <p>Origin: {videogame.origin.name}</p> : <p>no se encuentra</p>} */}
          </h5>
          <h5>Rating:{videogame?.rating}</h5>
          <h5>Generos:{videogame?.genres}</h5>
        </div>
      </div>
    </div>
  );
};
export default Detail;
