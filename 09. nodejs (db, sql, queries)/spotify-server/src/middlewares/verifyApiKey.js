require("dotenv").config();
const API_KEY_ENV = process.env.API_KEY;

function verifyApiKey(req, res, next) {
  const API_KEY = req.headers["x-api-key"];
  if (API_KEY === API_KEY_ENV) {
    next();
  } else {
    res.status(403).json({
      message: "unauthorized!",
      status: "failed",
    });
  }
}

module.exports = verifyApiKey;
