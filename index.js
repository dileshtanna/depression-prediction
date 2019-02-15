const express = require("express");
const app = express();

const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");

const login = require("./routes/api/login");
const signUp = require("./routes/api/sign-up");
const posts = require("./routes/api/posts");
const users = require("./routes/api/users");
app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("combined"));
app.use("/api/login", login);
app.use("/api/sign-up", signUp);
app.use("/api/posts/", posts);
app.use("/api/users/", users);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));
