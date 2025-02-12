const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.js");

const Song = sequelize.define(
  "Song",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    coverImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timeStamps: true }
);

module.exports = Song;