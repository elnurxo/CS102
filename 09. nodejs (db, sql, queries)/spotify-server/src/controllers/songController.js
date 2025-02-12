const Song = require("../models/songs.js");
const { Op } = require("sequelize");

//get all
async function getAllSongs(req, res) {
  //query - title
  const { title } = req.query;

  try {
    if (title) {
      res.status(200).json({
        data: await Song.findAll({
          where: {
            title: {
              [Op.like]: `%${title}%`, // Use the LIKE operator for partial matching
            },
          },
        }),
        message: "songs retrieved successfully!",
      });
    } else {
      res.status(200).json({
        data: await Song.findAll(),
        message: "songs retrieved successfully!",
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
async function getOneSong(req, res) {
  //params - id
  const { id } = req.params;

  try {
    const foundSong = await Song.findByPk(id);
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
async function deleteSong(req, res) {
  //params - id
  const { id } = req.params;

  try {
    const foundSong = await Song.findByPk(id);
    if (foundSong) {
      // delete from SQL server - DB
      const deleted = await Song.destroy({
        where: { id },
      });
      res.status(200).json({
        data: deleted,
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
async function postSong(req, res) {
  //body - payload new data
  const newSong = req.body;

  try {
    // newSong.id = uuidv4();
    const postedSong = await Song.create(newSong);
    res.status(201).json({
      data: postedSong,
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
async function updateSong(req, res) {
  //body - payload new data
  const { id } = req.params;
  const { title, genre, releaseYear, artist, coverImage } = req.body;

  try {
    const foundSong = await Song.findByPk(id);
    if (foundSong) {
      const [updated] = await Song.update(
        {
          title,
          genre,
          releaseYear,
          artist,
          coverImage,
        },
        {
          where: { id },
          returning: true,
        }
      );
      res.status(200).json({
        data: updated,
        message: "song updated successfully!",
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
