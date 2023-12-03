import asyncHandler from "express-async-handler";

const authUser = asyncHandler(async (req, res) => {
  console.log("Auth User");
  res.status(200);
});

const registerUser = asyncHandler(async (req, res) => {
  console.log("Register User");
  res.status(200);
});

const logoutUser = asyncHandler(async (req, res) => {
  console.log("Logout User");
  res.status(200);
});

const getUser = asyncHandler(async (req, res) => {
  console.log("Get User");
  res.status(200);
});

export { authUser, registerUser, logoutUser, getUser };
