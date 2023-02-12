const express = require('express');
const {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} = require('../controllers/productController');

const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getProducts);
router.get('/top', getTopProducts);
router.post('/:id/reviews', protect, createProductReview);
router.get('/:id', getProductById);
router.delete('/:id', protect, admin, deleteProduct);
router.post('/', protect, admin, createProduct);
router.put('/:id', protect, admin, updateProduct);

module.exports = router;
