const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const becrypt = require('bcryptjs');

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    becrypt.compare(password, user.password, (err, result) => {
      if (result) {
        res.status(200).json({ user });
      } else {
        res.status(401).json({ message: 'Wrong password!' });
      }
    });
    /* if (await user.matchPassword(password)) {
      const { password, ...userWithoutPassword } = user._doc;
      res.status(200).json({ ...userWithoutPassword, token: null });
    } else {
      res.status(401).json({ message: 'Wrong password!' });
    } */
  } else {
    res.status(401).json({ message: 'User not found!' });
  }

  //   res.status(200).json({ user });
});

module.exports = { authUser };
