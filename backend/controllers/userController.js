const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const becrypt = require('bcryptjs');
const matchPassword = require('../utils/matchingPassword');
const generateToken = require('../utils/generateToken');

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

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

// @desc    Register a new user
// @route   POST /api/users
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400).json({ message: 'User already exists!' });
  } else {
    // Some validation for creating a new user
    if (!name || !email || !password) {
      res.status(400).json({ message: 'Please fill in all fields!' });
      return;
    }
    if (name.length < 3) {
      res.status(400).json({ message: 'Name must be at least 3 characters!' });
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      res.status(400).json({ message: 'Please enter a valid email address!' });
      return;
    }
    if (password.length < 6) {
      res
        .status(400)
        .json({ message: 'Password must be at least 6 characters!' });
      return;
    }
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

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private

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

const updateUserProfile = asyncHandler(async (req, res) => {
  try {
    if (req.body.password) {
      const salt = await becrypt.genSalt(10);
      const hashedPassword = await becrypt.hash(req.body.password, salt);
      req.body.password = hashedPassword;
    }

    if (req.body.isAdmin) {
      // req.body.isAdmin = false;
      delete req.body.isAdmin;
      // res.status(400).json({ message: 'You cannot change your admin status!' });
    }

    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $set: req.body },
      { new: true }
    );
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: 'User not found!' });
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { authUser, getUserProfile, registerUser, updateUserProfile };
