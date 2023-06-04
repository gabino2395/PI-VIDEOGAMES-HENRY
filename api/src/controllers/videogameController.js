const axios = require("axios");
const { Videogame, Genre } = require("../db/db");
const { API_KEY } = process.env;

///
//funcion para traer por id
const getInfoId = async (id) => {
  try {
    let getGameById = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );
    getGameById = getGameById.data;
    getGameById = {
      id: getGameById.id,
      //cambiar esto luego
      image: getGameById.background_image
        ? getGameById.background_image
        : "https://besthqwallpapers.com/Uploads/8-3-2020/124076/thumb2-404-wallpaper-not-found-violet-sign-4k-violet-brickwall-404-wallpaper-not-found-violet-blank-display.jpg",
      name: getGameById.name,
      description: getGameById.description_raw,
      genres: getGameById.genres.map((el) => el.name),
      released: getGameById.released,
      rating: getGameById.rating,
      platforms: getGameById.platforms.map((el) => el.platform.name),
      website: getGameById.website,
    };
    return getGameById;
  } catch (e) {
    return "Not found.";
  }
};

/// funcion para traer todos los los juegos de la api
const getInfo = async () => {
  let i = 1;
  let listGames = [];

  while (i < 5) {
    let getApi = axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`
    );

    listGames.push(getApi);

    i++;
  }
  listGames = (await Promise.all(listGames)).map((el) =>
    el.data.results.map((el) => {
      return {
        id: el.id,
        image: el.background_image,
        name: el.name,
        rating: el.rating,
        genres: el.genres.map((el) => el.name),
        platforms: el.platforms.map((el) => el.platform.name),
      };
    })
  );
  let allGames = [];

  listGames.map((el) => {
    allGames = allGames.concat(el);
  });

  return allGames;
};
//funcion para traer los juegos  solo de la DB
const getDB = async () => {
  try {
    let allGamesDB = (
      await Videogame.findAll({
        attributes: [
          "name",
          "image",
          "id",
          "description",
          "released",
          "rating",
          "platforms",
          "created",
        ],
        include: {
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      })
    ).map((el) => el.toJSON());
    allGamesDB = allGamesDB.map((el) => ({
      id: el.id,
      name: el.name,
      image: el.image,
      description: el.description,
      rating: el.rating,
      released: el.released,
      genres: el.Genres.map((e) => e.name),
      platforms: el.platforms,
      created: el.created,
      // website: el.website
    }));

    return allGamesDB;
  } catch (e) {
    return { error: "Not found." };
  }
};
// funcion para traer a todos, de la api y de la DB
const getAllVideogamesHelper = async () => {
  // const apiInfo = await getApiInfo();
  const apiInfo = await getInfo();

  // const dbInfo = await getDbInfo();
  const dbInfo = await getDB();

  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

module.exports = {
  getDB,
  getInfoId,
  getAllVideogamesHelper,
};
