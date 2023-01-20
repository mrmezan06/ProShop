const becrypt = require('bcryptjs');

const matchPassword = async (enteredPassword, userPassword) => {
  return await becrypt.compare(enteredPassword, userPassword);
};

module.exports = matchPassword;
