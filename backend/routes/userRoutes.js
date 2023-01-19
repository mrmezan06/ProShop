const express = require('express');
const router = express.Router();
const {
  authUser,
  getUserProfile,
  registerUser,
} = require('../controllers/userController');

const protect = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);

module.exports = router;
