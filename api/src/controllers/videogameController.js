const axios = require("axios");
const { Videogame, Genre } = require("../db/db");
const { API_KEY } = process.env;
// const { Op } = require("sequelize");
const getApiInfo = async () => {
  const apiUrl = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
  const apiInfo = await apiUrl.data.map((el) => {
    return {
      id: el.id,
      image: el.background_image,
      name: el.name,
      rating: el.rating,
      genres: el.genres.map((el) => el.name),
      platforms: el.platforms.map((el) => el.platform.name),
    };
  });

  return apiInfo;
};



//helpers version//////////

const getInfoByName = async (game) => {
  try {
    let getGamesNames = await axios.get(
      `https://api.rawg.io/api/games?search=${game}&key=${API_KEY}`
    );
    getGamesNames = getGamesNames.data.results.map((el) => {
      return {
        id: el.id,
        image: el.background_image
          ? el.background_image
          : "https://w0.peakpx.com/wallpaper/588/185/HD-wallpaper-404-not-found-red-sign-red-brickwall-404-not-found-red-blank-display-404-not-found-neon-symbol.jpg",
        name: el.name,
        genres: el.genres.map((el) => el.name),
      };
    });

    return getGamesNames;
  } catch (e) {
    return { error: "Not found." };
  }
};

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
const postVideogames = async (req, res) => {
  const {
    name,
    description,
    platforms,
    released,
    created,
    rating,
    image,
    genres,
  } = req.body;
  try {
    const newVideogame = await Videogame.create({
      name,
      description,
      platforms,
      released,
      created,
      rating,
      image,
    });
    const genreNames = await Genre.findAll({
      where: {
        // id: {
        //   [Op.in]: genres,
        // },
        name:genres
      },
    });
    await newVideogame.addGenre(genreNames);
    res.status(200).json({
      message: "Videogame created successfully",
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};


//helpers para traer todos los juegos//////////

const getInfo = async () => {
  let i = 1;
  let listGames = [];

  while (i < 9) {
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

const getDbInfo = async () => {
  return await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      // attributes: '',

      through: {
        attributes: [],
      },
    },
  });
};
const getDB = async() => {
  try{
      let allGamesDB = (await Videogame.findAll({
          attributes: [ 'name', 'image', 'id', 'description', 'released', 'rating', 'platforms','created' ],
          include: {
              model: Genre,
              attributes: [ 'name' ],
              through: {
                  attributes: []
              }
          }
      })).map(el => el.toJSON());
      allGamesDB = allGamesDB.map(el => ({
          id: el.id,
          name: el.name,
          image: el.image,
          description: el.description,
          rating: el.rating,
          released: el.released,
          genres: el.Genres.map(e => e.name),
          platforms: el.platforms,
          created:el.created
          // website: el.website
      }));

      return allGamesDB;
  }
  catch(e){
      return { error: 'Not found.' };
  }
};

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
  getInfoByName,
  getAllVideogamesHelper,
  getApiInfo,
  getDbInfo,
  postVideogames,
};
