import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  GET_VIDEOGAMES,
  FILTER_BY_GENRES,
  GET_ALL_GENRES,
  FILTER_CREATED,
} from "./types";

import axios from "axios";
const endpoint = "http://localhost:3001/videogames";
const endpointGenres = "http://localhost:3001/genres";

export function getVideogames() {
  return async (dispatch) => {
    // dispatch(setLoading(true));
    const res = await axios(endpoint);
    const res_1 = await res.data;
    return dispatch(
      {
        type: GET_VIDEOGAMES,
        payload: res_1,
      }
      // dispatch(setLoading(false))
    );
  };
}
export function getGenres(value) {
  return async (dispatch) => {
    const res = await axios(endpointGenres);
    const res_1 = await res.data;
    return dispatch({
      type: GET_ALL_GENRES,
      payload: { payload: res_1, value: value },
    });
  };
}

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
