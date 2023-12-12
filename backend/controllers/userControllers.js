import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

const sendUserData = (res, user) => {
  res.status(201).json({
    _id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
  });
};

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    sendUserData(res, user);
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name , username, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Email already exists");
  } 
  else {
    const userNameExists = await User.findOne({ username });

    if (userNameExists) {
      res.status(400);
      throw new Error("Username already exists");
    }
  }

  const user = await User.create({
    name,
    username,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    sendUserData(res, user);
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("userjwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User logged out" });
});

const getUser = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user.id,
    name: req.user.name,
    username: req.user.username,
    email: req.user.email,
  };

  res.status(200).json(user);
});

export { authUser, registerUser, logoutUser, getUser };
