import asyncHandler from "express-async-handler";

const authUser = asyncHandler(async (req, res) => {
  console.log("Auth User");
  res.status(200).json({msg: "Auth User"});
});

const registerUser = asyncHandler(async (req, res) => {
  console.log("Register User");
  res.status(200).json({msg: "Register User"});
});

const logoutUser = asyncHandler(async (req, res) => {
  console.log("Logout User");
  res.status(200).json({msg: "Logout User"});
});

const getUser = asyncHandler(async (req, res) => {
  console.log("Get User");
  res.status(200).json({msg: "Get User"});
});

export { authUser, registerUser, logoutUser, getUser };
