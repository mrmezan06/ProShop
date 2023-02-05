const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      //   console.error(error);
      res.status(401).send({ message: 'Not authorized, token failed' });
    }
    // console.log(req.headers.authorization);
    // next();
  }

  if (!token) {
    res.status(401).send({ message: 'Not authorized, no token' });
    // throw new Error('Not authorized, no token');
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: 'Not authorized as an admin' });
  }
};

module.exports = { protect, admin };
