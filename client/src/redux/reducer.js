import {
  ADD_FAV,
  FILTER,
  ORDER,
  REMOVE_FAV,
  GET_VIDEOGAMES,
  FILTER_BY_GENRES,
  GET_ALL_GENRES,
  FILTER_CREATED,
} from "./types";

const initialState = {
  videogames: [],
  allVideogames: [],
  getAllGenresState: [],
  filterByGenresState: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: payload,
        allVideogames: payload,
        getAllGenresState: payload,
        filterByGenresState: payload,
      };
    // case GET_GENRES:
    //   const games = state.getAllVideogames;
    //   const filterGenres = games.filter(el => el.genres.includes(payload.value));
    //   return {
    //       ...state,
    //       getAllGenres: payload.payload,
    //       getAllGames: filterGenres
    //   };

    case FILTER_BY_GENRES:
      // const games = [...state.getAllGenresState];
      const games = state.allVideogames;

      // const filterGenres = games.filter((el) => el.genres.includes(payload));
      const filterGenres = games.filter((el) => el.genres == payload);

      return {
        ...state,
        // videogames:
        //   payload === "All genres" ? [...state.allVideogames] : filterGenres,
        // videogames:filterGenres
        getAllGenresState: payload,
        videogames: filterGenres,
      };

    case ORDER:
      // const gamesOrdered = [...state.allVideogames];
      const gamesOrdered = state.allVideogames;

      return {
        ...state,
        videogames:
          payload === "A"
            ? gamesOrdered.sort((a, b) => a.id - b.id)
            : gamesOrdered.sort((a, b) => b.id - a.id),
      };

    case FILTER_CREATED:
      const gamesCreatedFilter = [...state.filterByGenresState];
      const gamesCreated =
        payload === "created" || payload !== "api"
          ? gamesCreatedFilter.filter((el) => el.created)
          : gamesCreatedFilter.filter((el) => !el.created);

      // const creadosFilter =
      //   payload === "created"
      //     ? gamesCreatedFilter.filter((el) => el.id.includes('-'))
      //     : gamesCreatedFilter.filter((el) => !el.id.includes('-'));
      return {
        ...state,
        videogames: payload === "All" ? state.allVideogames : gamesCreated,
      };

    // case REMOVE_FAV:
    //   return {
    //     ...state,
    //     myFavorites: payload,
    //     allCharactersFav: payload,
    //   };

    // case FILTER:
    //   const allCharactersFiltered = state.allCharactersFav.filter(
    //     (character) => character.gender === payload
    //   );
    //   return {
    //     ...state,
    //     myFavorites:
    //       payload === "allCharacters"
    //         ? [...state.allCharactersFav]
    //         : allCharactersFiltered,
    //   };

    default:
      return { ...state };
  }
};

export default reducer;
