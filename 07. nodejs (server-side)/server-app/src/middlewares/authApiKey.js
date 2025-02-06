require('dotenv').config();

const authenticate_API_KEY = (request, response, next) => {
    const apiKEY = request.headers["x-api-key"];

    if (apiKEY) {
      if (apiKEY === process.env.API_KEY) {
        next();
      } else {
        response.json({
          message: "invalid api key!",
        });
      }
    } else {
      response.json({
        message: "no api key provided!",
      });
    }
};

module.exports = authenticate_API_KEY;