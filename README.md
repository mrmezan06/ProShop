# ProShop

- [x] Author: [Mejanur Rahman](https://www.github.com/mrmezan06)

- [x] Version: 1.0.0

## Description

This is a simple web application that allows users to search for books and add them to their reading list. The application uses the Google Books API to search for books and the MongoDB database to store the reading list. The application is built using the MERN stack. The application is deployed on [Netlify](https://app.netlify.com/). The application is live at [https://proshop-inventory.netlify.app/](https://proshop-inventory.netlify.app/) & back-end running on [Render](https://www.render.com).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Packages](#packages)
- [Live Demo](#livedemo)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the application follow the instructions below:

```bash
git clone https://github.com/mrmezan06/ProShop.git
npm install
cd frontend
npm install --legacy-peer-deps
npm start
```

Note: The application uses MongoDB as the database. You will need to create a MongoDB database and add the connection string to the .env file.
You need to provide some credientials in the .env file.
[x] MONGO_URI = "Your MongoDB connection string"
[x] PORT = 5000
[x] NODE_ENV = "development"
[x] JWT_SECRET = "Your JWT secret"
[x] PAYPAL_CLIENT_ID = "Your PayPal client ID"

## Live Demo ![](https://img.shields.io/badge/Live-Server-brightgreen)

[![](https://img.shields.io/badge/ProShop-Live-brightgreen)](https://proshop-inventory.netlify.app/)

## Packages

### Front-end

- [x] [axios](https://www.npmjs.com/package/axios)
- [x] [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)
- [x] [react-router-bootstrap](https://www.npmjs.com/package/react-router-bootstrap)
- [x] [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [x] [react-helmet](https://www.npmjs.com/package/react-helmet)
- [x] [react-paypal-button-v2](https://www.npmjs.com/package/react-paypal-button-v2)
- [x] [react-redux](https://www.npmjs.com/package/react-redux)
- [x] [redux](https://www.npmjs.com/package/redux)
- [x] [redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension)
- [x] [redux-thunk](https://www.npmjs.com/package/redux-thunk)
- [x] [react](https://www.npmjs.com/package/react)

### Back-end

- [x] [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [x] [dotenv](https://www.npmjs.com/package/dotenv)
- [x] [express](https://www.npmjs.com/package/express)
- [x] [express-async-handler](https://www.npmjs.com/package/express-async-handler)
- [x] [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [x] [mongoose](https://www.npmjs.com/package/mongoose)
- [x] [morgan](https://www.npmjs.com/package/morgan)
- [x] [multer](https://www.npmjs.com/package/multer)
- [x] [cors](https://www.npmjs.com/package/cors)
- [x] [colors](https://www.npmjs.com/package/colors)
- [x] devDependencies
  - [x] [nodemon](https://www.npmjs.com/package/nodemon)
  - [x] [concurrently](https://www.npmjs.com/package/concurrently)

## Usage

To use the application follow the instructions below:

```bash
npm run dev
```

It will concurrently run the front-end and back-end server.

## Contributing

If you would like to contribute it, you can follow these guidelines for how to do so. Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

- [x] (This README was generated with ❤️ by [readme-md-generator]()
