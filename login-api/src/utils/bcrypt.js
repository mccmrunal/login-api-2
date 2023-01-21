const bcrypt = require("bcryptjs");

module.exports = {
  compare: (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
    },
    };