import {
  ORDER,
  GET_VIDEOGAMES,
  FILTER_BY_GENRES,
  FILTER_CREATED,
  GET_VIDEOGAME_BY_NAME,
  POST_VIDEOGAMES,
  GET_GENRES,
  DELETE_VIDEOGAME,
  EDIT_VIDEOGAME,
  CLEAN_VIDEOGAMES,
  ORDER_RATING,
  FILTER_PLATFORMS,
} from "./types";

const initialState = {
  videogames: [],
  allVideogames: [],
  genres: [],
  ratingVideogames: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: payload,
        allVideogames: payload,
        ratingVideogames: payload,
      };

    case FILTER_BY_GENRES:
      const games = [...state.allVideogames];

      const filterGenres = games.filter((el) => el.genres == payload);
      if (payload === "All genres") {
        return {
          ...state,
          videogames: state.allVideogames,
        };
      }
      return {
        ...state,
        videogames: games.filter((el) => el.genres == payload),
      };

    case FILTER_PLATFORMS:
      const gamesPlatforms = state.allVideogames;
      console.log(gamesPlatforms);
      const filterPlatforms = gamesPlatforms.filter(
        (el) => el.genres == payload
      );
      if (payload === "All platforms") {
        return {
          ...state,
          videogames: state.allVideogames,
        };
      }
      return {
        ...state,
        videogames: gamesPlatforms.filter((el) => el.platforms == payload),
      };
    case ORDER:
      const gamesOrdered = [...state.videogames];

      return {
        ...state,
        videogames:
          payload === "Ascendant"
            ? gamesOrdered.sort((a, b) => a.id - b.id)
            : gamesOrdered.sort((a, b) => b.id - a.id),
      };
    case ORDER_RATING:
      const gamesOrderedRate = [...state.videogames];

      return {
        ...state,
        videogames:
          payload === "Worst-rating"
            ? gamesOrderedRate.sort((a, b) => a.rating - b.rating)
            : gamesOrderedRate.sort((a, b) => b.rating - a.rating),
      };
    case FILTER_CREATED:
      const allGames = state.allVideogames;

      if (payload === "Created") {
        const filterId = allGames.filter((el) => el.created);
        return {
          ...state,
          videogames: filterId,
        };
      }

      return {
        ...state,
        videogames: allGames.filter((el) => !el.created),
      };
    case POST_VIDEOGAMES:
      return {
        ...state,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: payload,
      };
    case GET_VIDEOGAME_BY_NAME:
      return {
        ...state,
        videogames: payload,
        // allVideogames: payload,
      };
    case EDIT_VIDEOGAME:
      return {
        ...state,
        videogames: payload,
      };
    case DELETE_VIDEOGAME:
      return {
        ...state,
        videogames: payload,
      };
    case CLEAN_VIDEOGAMES:
      return {
        ...state,
        videogames: [],
        allVideogames: [],
      };
    default:
      return { ...state };
  }
};

export default reducer;
