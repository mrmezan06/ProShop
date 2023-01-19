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

module.exports = { authUser };
