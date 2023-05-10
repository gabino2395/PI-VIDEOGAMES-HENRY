const { DataTypes, UUIDV4 } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const id4 = uuidv4();
module.exports = (sequelize) => {
  sequelize.define(
    "Videogame",
    {
      id: {
        // type: DataTypes.INTEGER,
        type: DataTypes.UUID,
        // autoIncrement: true,
        defaultValue: () => uuidv4(),

        allowNull: true,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      platforms: {
        // type: DataTypes.STRING,
        type: DataTypes.ARRAY(DataTypes.STRING),

        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      released: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      created: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: true,
      },
    },

    // id: {
    //   // type: DataTypes.UUID,
    //   // defaultValue: ()=> uuidv4(),
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   // defaultValue: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    // },
    // name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   // unique: true,
    // },
    // image: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // description: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // released: {
    //   type: DataTypes.DATE,
    //   // allowNull: false,
    // },
    // rating: {
    //   type: DataTypes.FLOAT,
    //   allowNull: false,
    // },
    // platforms: {
    //   // type:DataTypes.BOOLEAN,
    //   type: DataTypes.ARRAY(DataTypes.STRING),
    //   allowNull: false,
    // },
    // created: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: true,
    //   allowNull: true,
    // },
    // },

    {
      timestamps: false,
    }
  );
};
