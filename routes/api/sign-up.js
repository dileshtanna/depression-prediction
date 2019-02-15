var pgp = require("pg-promise")();
var db = pgp("postgres://postgres:123456@localhost:5432/depression_detection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var express = require("express");
var router = express.Router();

router.post("/", async (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let user = await db.any(`select * from users where username='${username}'`);
  console.log(user);
  if (user.length > 0) return res.status(400).json("User already exists");

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      if (err) throw err;
      password = hash;

      await db.none(
        `insert into users(username,password,email,phone,score) values('${username}','${password}','${
          req.body.email
        }','${req.body.phone}','0')`
      );

      res.status(200).json({
        status: 200,
        message: "Created One User"
      });
    });
  });
});

module.exports = router;
