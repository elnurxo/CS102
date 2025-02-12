const User = require("../models/users.js");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const transporter = require("../config/sendMailer.js");
const jwt = require("jsonwebtoken");

async function getAllUsers(req, res) {
  try {
    const { email } = req.query;
    let users; //undefined

    if (email) {
      users = await User.findAll({
        where: {
          email: {
            [Op.like]: `%${email.trim().toUpperCase()}%`,
          },
        },
        attributes: { exclude: ["password"] },
      });
    } else {
      users = await User.findAll({
        attributes: { exclude: ["password"] },
      });
    }

    res.status(200).json({
      data: users,
      message: "Users fetched successfully!",
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      message: error.message || "Failed to get users!",
      status: "failed",
    });
  }
}

async function getUserById(req, res) {
  try {
    const { id } = req.params;

    // Fetch the user by ID
    const foundUser = await User.findByPk(id, {
      attributes: { exclude: ["password"] }, // Exclude password from the response
    });

    if (foundUser) {
      res.status(200).json({
        message: "User retrieved successfully!",
        data: foundUser,
      });
    } else {
      res.status(404).json({
        message: "User not found with the given ID!",
        data: null,
      });
    }
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({
      message: error.message || "Failed to get user!",
      status: "failed",
    });
  }
}

async function registerUser(req, res) {
  try {
    const { username, fullName, email, password } = req.body;

    // Check if username or email already exists in the database
    const duplicate = await User.findOne({
      where: {
        [Op.or]: [{ username }, { email }],
      },
    });

    if (duplicate) {
      return res.status(400).json({
        message: "Username or email is already taken!",
        status: "failed",
      });
    }

    // Hash the password before saving to the database
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create the new user in the database
    const newUser = await User.create({
      username,
      fullName,
      email,
      password: hashedPassword,
      role: "client", // default role
      isVerified: false, // initially false
      lastLogin: new Date(), // set current date
    });

    // Generate a JWT token for email verification
    const token = jwt.sign(
      {
        email: newUser.email,
        role: newUser.role,
        userId: newUser.id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "6h" } // Optional expiration for token
    );

    // Send verification email with the generated token
    await transporter.sendMail({
      from: "Code Academy 👻",
      to: newUser.email,
      subject: "Verify your account!",
      text: "This is a test mail verification.",
      html: `<a href="http://localhost:7070/api/users/verify/${token}">Verify your account</a><p>This Link is valid for 6 hours!</p> <p>If this email was not sent by you, please ignore it!</p>`,
    });

    res.status(201).json({
      data: {
        id: newUser.id,
        username: newUser.username,
        fullName: newUser.fullName,
        email: newUser.email,
      },
      message: "User registered successfully!",
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({
      message: error.message || "User registration failed!",
      status: "failed",
    });
  }
}

//login - token Generate
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    // Find the user by email using Sequelize
    const foundUser = await User.findOne({
      where: { email },
    });

    if (foundUser) {
      // Check if the account is verified
      if (foundUser.isVerified) {
        // Compare the provided password with the stored hash
        const checkPassword = bcrypt.compareSync(password, foundUser.password);
        if (checkPassword) {
          // Update the last login time
          foundUser.lastLogin = new Date();
          await foundUser.save();

          // Generate the JWT token
          const token = jwt.sign(
            {
              userId: foundUser.id,
              role: foundUser.role,
              email: foundUser.email,
            },
            process.env.JWT_SECRET_KEY,
            {
              expiresIn: "6h", // Optional: Set token expiration time
            }
          );

          return res.status(200).json({
            token,
            message: `Welcome ${foundUser.username}!`,
            status: "success",
          });
        } else {
          return res.status(401).json({
            message: "Email or password is incorrect!",
            status: "failed",
          });
        }
      } else {
        return res.status(400).json({
          message: "Please verify your account!",
          status: "failed",
        });
      }
    } else {
      return res.status(404).json({
        message: "No such user found!",
        status: "failed",
      });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({
      message: error.message || "Failed to log in!",
      status: "failed",
    });
  }
}

//logout - token destroy

//update

//delete

//verify
async function verifyAccount(req, res) {
  try {
    const { token } = req.params;

    if (token) {
      // Verify the token using the secret key
      const verifiedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

      if (verifiedToken) {
        // Find the user by email using Sequelize
        const foundUser = await User.findOne({
          where: { email: verifiedToken.email },
        });

        if (foundUser) {
          // Update the user's 'isVerified' field to true
          foundUser.isVerified = true;
          await foundUser.save();

          return res.status(200).json({
            message: "Account verified successfully!",
            status: "success",
          });
        } else {
          return res.status(404).json({
            message: "Invalid account!",
            status: "failed",
          });
        }
      } else {
        return res.status(400).json({
          message: "Invalid token provided!",
          status: "failed",
        });
      }
    } else {
      return res.status(400).json({
        message: "Token not provided!",
        status: "failed",
      });
    }
  } catch (error) {
    console.error("Error verifying account:", error);
    return res.status(500).json({
      message: error.message || "Account verification failed!",
      status: "failed",
    });
  }
}

//forgot-password

//reset-password

const userController = {
  getAll: getAllUsers,
  getOne: getUserById,
  register: registerUser,
  login: loginUser,
  verify: verifyAccount,
};

module.exports = userController;
