const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const loginRouter = require("./routes/login");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/login", loginRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
