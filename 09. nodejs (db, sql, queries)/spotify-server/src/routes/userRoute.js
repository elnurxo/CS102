const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController.js");
// const verifyApiKey = require("../middlewares/verifyApiKey.js");

userRouter.get("/", userController.getAll);

userRouter.get("/:id", userController.getOne);

userRouter.post("/register", userController.register);

userRouter.post("/login", userController.login);

userRouter.get("/verify/:token", userController.verify);


module.exports = userRouter;
