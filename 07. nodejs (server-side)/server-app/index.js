const express = require("express");
const app = express();
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
//require products
let products = require("./src/data.js");

//simple middleware
app.use(express.json());

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
app.delete("/api/products/:id", (req, res) => {
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
});

//post request
app.post("/api/products", (req, res) => {
  const newProduct = req.body;

  //simple validation
  if (newProduct.name && newProduct.price) {
    newProduct.id = uuidv4();
    products.push(newProduct);
    res.status(201).json({
      message: "product posted successfully!",
      data: newProduct,
    });
  } else {
    res.json({
      message: "product format is invalid!",
      data: null,
    });
  }
});

//update request
app.patch("/api/products/:id", (req, res) => {
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
});

//APP LISTENING
app.listen(process.env.PORT, () => {
  console.log(`Server app listening on port ${process.env.PORT}`);
});
