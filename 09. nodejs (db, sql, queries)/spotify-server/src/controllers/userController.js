let users = require("../models/users.js");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const transporter = require("../config/sendMailer.js");
const jwt = require("jsonwebtoken");

//get all users
function getAllUsers(req, res) {
  try {
    const { email } = req.query;
    if (email) {
      const filteredUsers = users.filter((x) => {
        return x.email
          .toUpperCase()
          .trim()
          .includes(email.toUpperCase().trim());
      });
      res.status(200).json({
        data: filteredUsers,
        message: "users get successfully!",
      });
    } else {
      res.status(200).json({
        data: users, //extract password from here
        message: "users get successfully!",
      });
    }
  } catch (error) {
    res.json({
      message: error.message ? error.message : "failed to get users!",
      status: "failed",
    });
  }
}

//get one user by ID
function getUserById(req, res) {
  try {
    const { id } = req.params;
    const foundUser = users.find((x) => x.id == id);
    if (foundUser) {
      //ok
      res.status(200).json({
        message: "user get successfully!",
        data: foundUser,
      });
    } else {
      res.status(204).json({
        message: "user not found with given ID!",
        data: null,
      });
    }
  } catch (error) {
    res.json({
      message: error.message ? error.message : "failed to get user!",
      status: "failed",
    });
  }
}

//register - POST
async function registerUser(req, res) {
  try {
    const { username, fullName, email, password } = req.body;
    const newUser = {
      id: uuidv4(),
      username: username,
      fullName: fullName,
      email: email,
      role: "admin",
      password: password, //hashed
      createdAt: new Date(),
      lastLogin: new Date(),
      isVerified: false,
    };
    const hashedPassword = bcrypt.hashSync(newUser.password, 10);
    newUser.password = hashedPassword;
    //validation check - duplicate username or email
    const duplicate = users.find((x) => {
      return x.username == username || x.email == email;
    });

    if (duplicate) {
      return res.json({
        message: "username or email already take in!",
        status: "failed",
      });
    } else {
      users.push(newUser);
      //send email
      //generate token to verify account
      const token = jwt.sign(
        {
          email: newUser.email,
          role: newUser.role,
          userId: newUser.id,
        },
        process.env.JWT_SECRET_KEY
      );

      await transporter.sendMail({
        from: "Code Academy 👻",
        to: email,
        subject: "Verify your account!",
        text: "This is test mail verification",
        html: `<a href="http://localhost:7070/api/users/verify/${token}">verify your account</a> <p>if this email was not sent by you, ignore this email!</p>`,
      });

      res.status(201).json({
        data: newUser,
        message: "user registered successfully!",
      });
    }
  } catch (error) {
    res.json({
      data: null,
      error: error,
      status: "failed",
      message: "user registered failed!",
    });
  }
}

//login - token Generate
function loginUser(req, res) {
  const { email, password } = req.body;

  const foundUser = users.find((x) => x.email === email);
  if (foundUser) {
    //login - check password and email
    if (foundUser.isVerified) {
      const checkPassword = bcrypt.compareSync(password, foundUser.password);
      if (checkPassword == true) {
        //ok
        foundUser.lastLogin = new Date();

        res.status(200).json({
          token: jwt.sign(
            {
              userId: foundUser.id,
              role: foundUser.role,
              email: foundUser.email,
            },
            process.env.JWT_SECRET_KEY,
            {
              expiresIn: "6h",
            }
          ), //refresh
          message: `welcome ${foundUser.username}`,
          status: "success",
        });
      } else {
        res.status(401).json({
          message: "email or password is incorrect!",
          status: "failed",
        });
      }
    } else {
      return res.json({
        message: "verify your account now!",
        status: "failed",
      });
    }
  } else {
    return res.json({
      message: "no such user!",
      status: "failed",
    });
  }
}

//logout - token destroy

//update

//delete

//verify
function verifyAccount(req, res) {
  const { token } = req.params;
  if (token) {
    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (verifiedToken) {
      const foundUser = users.find((x) => x.email == verifiedToken.email);
      if (foundUser) {
        foundUser.isVerified = true;
        return res.status(200).json({
          message: "account verified successfully!",
          status: "success",
        });
      } else {
        return res.json({
          message: "invalid account!",
          status: "failed",
        });
      }
    } else {
      return res.json({
        message: "invalid token provided!",
        status: "failed",
      });
    }
  } else {
    return res.json({
      message: "token not provided!",
      status: "failed",
    });
  }
}

const userController = {
  getAll: getAllUsers,
  getOne: getUserById,
  register: registerUser,
  login: loginUser,
  verify: verifyAccount,
};

module.exports = userController;
