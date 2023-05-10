const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Genre",
    {
      // id: {
      //   type: DataTypes.UUID,
      //   // autoIncrement: true,
      //   allowNull: false,
      //   primaryKey: true,
      // },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },




      // id: {
      //   type: DataTypes.UUID,
      //   defaultValue: DataTypes.UUIDV4,
      //   allowNull: false,
      //   primaryKey: true,
      // },
      // name: {
      //   type: DataTypes.STRING,
      // },
    }, 
    // { timestamps: false }
  );
};
