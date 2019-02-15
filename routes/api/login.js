var pgp = require("pg-promise")();
var db = pgp("postgres://postgres:123456@localhost:5432/depression_detection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var express = require("express");
var router = express.Router();
const keys = require("../../config/keys");

router.post("/", async (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  let user = await db.any(`select * from users where username='${username}'`);
  console.log(user);
  if (user.length === 0) return res.status(404).json("User Not Found");

  bcrypt.compare(password, user[0].password).then(isMatch => {
    if (isMatch) {
      const payload = { id: user[0].id, username: user[0].username };

      jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
        res.json({
          success: true,
          token: token
        });
      });
    } else {
      return res.status(400).json("Password incorrect");
    }
  });
});

module.exports = router;
