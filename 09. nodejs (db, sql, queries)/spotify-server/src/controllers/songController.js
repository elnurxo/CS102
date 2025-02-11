let songs = require("../models/songs.js");
const { v4: uuidv4 } = require("uuid");

//get all
function getAllSongs(req, res) {
  //query - title
  const { title } = req.query;

  try {
    if (title) {
      res.status(200).json({
        data: songs.filter((x) =>
          x.title.toLowerCase().trim().includes(title.toLowerCase().trim())
        ),
        message: "songs retrieved successfully!F",
      });
    } else {
      res.status(200).json({
        data: songs,
        message: "songs retrieved successfully!F",
      });
    }
  } catch (error) {
    res.json({
      error: error,
      message: error.message ? error.message : "failed to retrieve songs!",
    });
  }
}

//get one
function getOneSong(req, res) {
  //params - id
  const { id } = req.params;

  try {
    const foundSong = songs.find((x) => x.id == id);
    if (foundSong) {
      res.status(200).json({
        data: foundSong,
        message: "song retrieved successfully!",
      });
    } else {
      res.status(204).json({
        data: null,
        message: "song not found with given ID!",
      });
    }
  } catch (error) {
    res.json({
      error: error,
      message: error.message ? error.message : "failed to retrieve songs!",
    });
  }
}

//delete one
function deleteSong(req, res) {
  //params - id
  const { id } = req.params;

  try {
    const foundSong = songs.find((x) => x.id == id);
    if (foundSong) {
      songs = [...songs.filter((x) => x.id != id)];
      res.status(200).json({
        data: songs,
        message: "song deleted successfully!",
      });
    } else {
      res.status(204).json({
        data: null,
        message: "song not found with given ID!",
      });
    }
  } catch (error) {
    res.json({
      error: error,
      message: error.message ? error.message : "failed to delete song!",
    });
  }
}

//post
function postSong(req, res) {
  //body - payload new data
  const newSong = req.body;

  try {
    newSong.id = uuidv4();
    songs.push(newSong);
    res.status(201).json({
      data: newSong,
      message: "song posted successfully!",
    });
  } catch (error) {
    res.json({
      error: error,
      message: error.message ? error.message : "failed to post song!",
    });
  }
}

//update
function updateSong(req, res) {
  //body - payload new data
  const { id } = req.params;
  const { title, genre, releaseYear, artist, coverImage } = req.body;

  try {
    const foundSong = songs.find((x) => x.id == id);
    if (foundSong) {
      //update
      foundSong.title = title ? title : foundSong.title;
      foundSong.genre = genre ? genre : foundSong.genre;
      foundSong.releaseYear = releaseYear ? releaseYear : foundSong.releaseYear;
      foundSong.artist = artist ? artist : foundSong.artist;
      foundSong.coverImage = coverImage ? coverImage : foundSong.coverImage;
    } else {
      res.status(204).json({
        data: null,
        message: "song not found with given ID!",
      });
    }
  } catch (error) {
    res.json({
      error: error,
      message: error.message ? error.message : "failed to update song!",
    });
  }
}

const songController = {
  getAll: getAllSongs,
  getOne: getOneSong,
  delete: deleteSong,
  post: postSong,
  update: updateSong,
};

module.exports = songController;
