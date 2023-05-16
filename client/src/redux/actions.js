import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  GET_VIDEOGAMES,
  FILTER_BY_GENRES,
  FILTER_CREATED,
  GET_VIDEOGAME_BY_NAME,
  POST_VIDEOGAMES,
  GET_GENRES,
} from "./types";

import axios from "axios";
const endpoint = "http://localhost:3001/videogames";
const endpointGenres = "http://localhost:3001/genres";

export function getVideogames() {
  return async (dispatch) => {
    // dispatch(setLoading(true));
    const res = await axios(endpoint);
    const res_1 = await res.data;
    return dispatch({
      type: GET_VIDEOGAMES,
      payload: res_1,
    });
  };
}
export const getVideogamebyName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${endpoint}?name=${name}`);
      return dispatch({
        type: GET_VIDEOGAME_BY_NAME,
        payload: data,
      });
    } catch (error) {
      if(!name)
      console.log("¡No hay personajes con este ID!");

      return error.message;
    }
  };
};

export function filterByGenres(genres) {
  return {
    type: FILTER_BY_GENRES,
    payload: genres,
  };
}

export const orderGames = (order) => {
  return { type: ORDER, payload: order };
};

export const filterCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload,
  };
};
export const postVideogames = (payload) => {
  return async (dispatch) => {
    // dispatch(setLoading(true));
    const res = await axios.post(endpoint, payload);
    const res_1 = await res.data;
    return dispatch({
      type: POST_VIDEOGAMES,
      payload: res_1,
    });
  };
};

export function getGenres() {
  return async (dispatch) => {
    // dispatch(setLoading(true));
    const res = await axios(endpointGenres);
    const res_1 = await res.data;
    return dispatch({
      type: GET_GENRES,
      payload: res_1,
    });
  };
}
////aun no
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);

      if (!data.length) throw Error("No hay favoritos");

      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const removeFav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);

      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};
