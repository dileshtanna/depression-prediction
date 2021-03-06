const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const logger = require("morgan");
const login = require("./routes/api/login");
const signUp = require("./routes/api/sign-up");
const posts = require("./routes/api/posts");
const users = require("./routes/api/users");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/login", login);
app.use("/api/sign-up", signUp);
app.use("/api/posts/", posts);
app.use("/api/users/", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));
