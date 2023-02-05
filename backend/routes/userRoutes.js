const express = require('express');
const router = express.Router();
const {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} = require('../controllers/userController');

const { protect, admin, adminDelete } = require('../middleware/authMiddleware');

router.get('/', protect, admin, getUsers);
router.post('/', registerUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.delete('/:id', protect, adminDelete, deleteUser);
router.get('/:id', protect, admin, getUserById);
router.put('/:id', protect, admin, updateUser);

module.exports = router;
