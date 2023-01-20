const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const becrypt = require('bcryptjs');
const matchPassword = require('../utils/matchingPassword');
const generateToken = require('../utils/generateToken');

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    if (await matchPassword(password, user.password)) {
      const { password, ...userWithoutPassword } = user._doc;
      res
        .status(200)
        .json({ ...userWithoutPassword, token: generateToken(user._id) });
    } else {
      res.status(401).json({ message: 'Wrong password!' });
    }
  } else {
    res.status(401).json({ message: 'User not found!' });
  }

  //   res.status(200).json({ user });
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400).json({ message: 'User already exists!' });
  } else {
    const salt = await becrypt.genSalt(10);
    const hashedPassword = await becrypt.hash(password, salt);
    const user = await User.create({ name, email, password: hashedPassword });
    if (user) {
      const { password, ...userWithoutPassword } = user._doc;
      res
        .status(201)
        .json({ ...userWithoutPassword, token: generateToken(user._id) });
    } else {
      res.status(400).json({ message: 'Invalid user data!' });
    }
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  //   const user = await User.findById(req.user._id);
  const user = req.user;
  if (user) {
    const { token, ...userWithoutToken } = user._doc;
    res.status(200).json({ ...userWithoutToken });
  } else {
    res.status(404).json({ message: 'User not found!' });
  }
});

module.exports = { authUser, getUserProfile, registerUser };
