const express = require("express");
const songRouter = express.Router();
const songController = require("../controllers/songController.js");
// const verifyApiKey = require("../middlewares/verifyApiKey.js");
const verifyJWTToken = require("../middlewares/verifyToken.js");
const verifyRole = require("../middlewares/verifyRole.js");

//get all - RBAC - client, admin
songRouter.get("/", verifyJWTToken, verifyRole('admin'), songController.getAll);

//get one
songRouter.get("/:id", songController.getOne);

//post
songRouter.post("/", songController.post);

//delete
songRouter.delete("/:id", songController.delete);

//update
songRouter.patch("/:id", songController.update);

module.exports = songRouter;
