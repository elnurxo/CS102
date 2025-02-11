const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3030;
const songRouter = require("./src/routes/songRoute.js");
const limiter = require("./src/config/rateLimiter.js");
const userRouter = require("./src/routes/userRoute.js");
const cors = require("cors");
const helmet = require("helmet");

//middleware
app.use(limiter);
app.use(express.json()); //post JSON
app.use("/api/songs", songRouter); //CRUD
app.use("/api/users", userRouter); //CRUD

// const allowedOrigins = ["http://localhost:3001", "https://example2.com"];
// const corsOptions = {
//   origin: (origin, callback) => {
//     // Allow requests with no origin (e.g., mobile apps or curl)
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   methods: "GET,POST,PUT,DELETE,OPTIONS", // Allowed HTTP methods
//   allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
//   exposedHeaders: ["X-My-Custom-Header", "X-Another-Custom-Header"], // Headers exposed to the client
//   credentials: true, // Allow credentials (cookies, authorization headers)
//   maxAge: 3600, // Cache the preflight request for 1 hour
// };
app.use(cors()); //allow all origins
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
