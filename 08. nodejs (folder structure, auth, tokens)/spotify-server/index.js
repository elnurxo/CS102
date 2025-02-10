const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3030;
const songRouter = require("./src/routes/songRoute.js");
const limiter = require("./src/config/rateLimiter.js");
const userRouter = require("./src/routes/userRoute.js");

//middleware
app.use(limiter);
app.use(express.json()); //post JSON
app.use("/api/songs", songRouter); //CRUD
app.use("/api/users", userRouter); //CRUD


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
