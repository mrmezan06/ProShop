const express = require('express');
const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');

const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    // Checking Error Handling
    // res.status(401);
    // throw new Error('Not authorized');
    res.json(products);
  })
);

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      //   res.status(404).json({ message: 'Product not found' });
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

module.exports = router;
