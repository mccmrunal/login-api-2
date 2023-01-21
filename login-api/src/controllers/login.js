const bcrypt = require("../utils/bcrypt");
const { check, validationResult } = require("express-validator");

const loginController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
  
    const { username, password } = req.body;
    const hardcodedUsername = "user";
    const hardcodedPassword = "$2y$10$XH09OavHPpaNGEp71G1.WuuJcj9bK28O4GycFzu7Vx6vYUiVj8.xG";
  
    try {
      const isMatched = await bcrypt.compare(password, hardcodedPassword);
      if (username !== hardcodedUsername || !isMatched) {
        return res.status(401).json({ message: "Invalid username or password" });
      }
      return res.status(200).json({ message: "Successfully logged in" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  

module.exports = loginController;
