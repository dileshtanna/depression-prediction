var pgp = require("pg-promise")();
var db = pgp("postgres://postgres:123456@localhost:5432/depression_detection");

var express = require("express");
var router = express.Router();

router.get("/all", async (req, res, next) => {
  let result = await db.any(
    "select id,username,score,email,phone from users order by score"
  );

  res.status(200).json({
    status: 200,
    data: result,
    message: "Retrieved all Users"
  });
});

router.get("/posts/:name", async (req, res, next) => {
  let name = req.params.name;
  let result = await db.any(
    `select * from posts where username = '${name}' order by id desc`
  );
  res.status(200).json({
    status: 200,
    data: result,
    message: "Retrieved all Posts"
  });
});

router.get("/score/:name", async (req, res, next) => {
  let name = req.params.name;
  let result = await db.any(
    `select score from users where username = '${name}' `
  );
  res.status(200).json({
    status: 200,
    data: result,
    message: "Retrieved Score"
  });
});

module.exports = router;
