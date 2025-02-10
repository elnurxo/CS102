const jwt = require("jsonwebtoken");
require("dotenv").config();

function verifyJWTToken(req, res, next) {
  try {
    let token = req.headers["authorization"];
    if (token) {
      token = token.split(" ")[1];
      const verifiedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
      if (verifiedToken) {
        req.user = verifiedToken;
        next();
      } else {
        res.status(401).json({
          message: "invalid token!",
          status: "failed",
        });
      }
    } else {
      res.status(401).json({
        message: "no token provided!",
        status: "failed",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: error.message ? error.message : "failed authorization!",
    });
  }
}

module.exports = verifyJWTToken;
