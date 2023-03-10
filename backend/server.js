const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');
// const products = require('./data/products');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
dotenv.config();

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.options('*', cors());

app.use(
  cors({
    origin: ['https://proshop-inventory.netlify.app', 'http://localhost:3000'],
  })
);

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.get('/', (req, res) => {
  res.send('API is running...');
});

/* return frontend on PORT 3000 */
/* if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
} */
/* File upload problem on cross server file system */
// __dirname is the current directory
// const __dirname = path.resolve();
// /frontend/public/images
// app.use(
//   '/',
//   express.static(path.join(__dirname, 'frontend', 'public', 'images'))
// );

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
  connectDB();
});
