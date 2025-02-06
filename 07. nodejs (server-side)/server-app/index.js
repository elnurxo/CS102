const express = require("express");
const app = express();
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const { rateLimit } = require("express-rate-limit");
const authenticate_API_KEY = require("./src/middlewares/authApiKey.js");
const productSchema = require("./src/validations/productValidate.js");
//require products
let products = require("./src/data.js");

//simple middleware
app.use(express.json()); //post body json

//rate limit for dos attack
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  message: "Too many requests, please try again later...",
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-8", // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  //   store: ... , // Redis, Memcached, etc. See below. //cache
});

app.use(limiter);

//custom middleware - API KEY authentication
// app.use();

//simple get request
app.get("/api", (_, response) => {
  response.status(200).json({
    message: "Welcome to ExpressJS API!",
    status: 200,
  });
});

//PRODUCTS CRUD -> Create, Read, Update, Delete

//get all products - search query feat
app.get("/api/products", (req, res) => {
  const nameQuery = req.query.name;

  if (nameQuery) {
    //filter
    const filteredProducts = products.filter((product) => {
      return product.name
        .toLowerCase()
        .trim()
        .includes(nameQuery.toLowerCase().trim());
    });

    res.status(200).json({
      message: "products retrieved successfully!",
      data: filteredProducts,
    });
  } else {
    res.status(200).json({
      message: "products retrieved successfully!",
      data: products,
    });
  }
});

//get product by id
app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const productByID = products.find((product) => {
    return product.id == id;
  });

  if (productByID) {
    res.status(200).json({
      message: "product retrieved successfully!",
      data: productByID,
    });
  } else {
    res.json({
      message: "product not found!",
      data: null,
    });
  }
});

//delete product by id
app.delete(
  "/api/products/:id",
  (req, res, next) => authenticate_API_KEY(req, res, next),
  (req, res) => {
    const id = req.params.id;
    const checkProduct = products.find((x) => x.id == id);
    if (!checkProduct) {
      return res.json({
        message: "product not found!",
        data: null,
      });
    } else {
      //array methods
      products = [
        ...products.filter((product) => {
          return product.id != id;
        }),
      ];
      //   products.splice(products.indexOf((x)=>x.id==id), 1);
      res.json({
        message: "product deleted successfully!",
        data: products,
      });
    }
  }
);

//post request
app.post(
  "/api/products",
  (req, res, next) => authenticate_API_KEY(req, res, next),
  (req, res, next) => {
    const isValidated = productSchema.validate(req.body);
    if (!isValidated.error) {
      next();
    } else {
      res.json({
        message: isValidated.error.details[0].message,
        status: "fail",
      });
    }
  },
  (req, res) => {
    const newProduct = req.body;
    newProduct.id = uuidv4();
    products.push(newProduct);
    res.status(201).json({
      message: "product posted successfully!",
      data: newProduct,
    });
  }
);

//update request
app.patch(
  "/api/products/:id",
  (req, res, next) => authenticate_API_KEY(req, res, next),
  (req, res) => {
    const id = req.params.id;
    const updatedProduct = req.body;

    const found = products.find((x) => x.id == id);
    if (found) {
      if (updatedProduct.name) {
        found.name = updatedProduct.name;
      }
      if (updatedProduct.price) {
        found.price = updatedProduct.price;
      }
      res.json({
        message: "product updated successfully!",
        data: found,
      });
    } else {
      res.json({
        message: "product not found!",
        data: null,
      });
    }
  }
);

//APP LISTENING
app.listen(process.env.PORT, () => {
  console.log(`Server app listening on port ${process.env.PORT}`);
});
