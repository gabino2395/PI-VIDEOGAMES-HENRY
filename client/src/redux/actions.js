import {

  ORDER,
  GET_VIDEOGAMES,
  FILTER_BY_GENRES,
  FILTER_CREATED,
  GET_VIDEOGAME_BY_NAME,
  POST_VIDEOGAMES,
  GET_GENRES,
  EDIT_VIDEOGAME,
  DELETE_VIDEOGAME,
  CLEAN_VIDEOGAMES,
} from "./types";

import axios from "axios";
import { URL } from "../Utils/Utils";
export function getVideogames() {
  return async (dispatch) => {
    // dispatch(setLoading(true));
    const res = await axios(`${URL}/videogames`);
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
      const { data } = await axios(`${URL}/videogames?name=${name}`);
      return dispatch({
        type: GET_VIDEOGAME_BY_NAME,
        payload: data,
      });
    } catch (error) {
      if (!name) console.log("¡No hay personajes con este ID!");

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
    const res = await axios.post(`${URL}/videogames`, payload);
    const res_1 = await res.data;
    return dispatch({
      type: POST_VIDEOGAMES,
      payload: res_1,
    });
  };
};

export const updateVideogame = async (id,game) => {
  return async (dispatch) => {
    try {
        const { data } = await axios.put(`${URL}/videogames/${id}`, game)
        return dispatch({
            type: EDIT_VIDEOGAME,
            payload: data
        })
    } catch (error) {
        return error.message;
    }
}
};

export const deleteVideogame = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${URL}/videogames/${id}`);
      return dispatch({
        type: DELETE_VIDEOGAME,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};
export function getGenres() {
  return async (dispatch) => {
    // dispatch(setLoading(true));
    const res = await axios(`${URL}/genres`);
    const res_1 = await res.data;
    return dispatch({
      type: GET_GENRES,
      payload: res_1,
    });
  };
}

export const cleanGames = () =>{
  return {
      type: CLEAN_VIDEOGAMES,
  }
}
