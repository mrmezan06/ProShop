const express = require('express');
const {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} = require('../controllers/productController');

const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

router.get('/', getProducts);

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', getProductById);
router.delete('/:id', protect, admin, deleteProduct);
router.post('/', protect, admin, createProduct);
router.put('/:id', protect, admin, updateProduct);

module.exports = router;
