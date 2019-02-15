var pgp = require("pg-promise")();
var db = pgp("postgres://postgres:123456@localhost:5432/depression_detection");

var express = require("express");
var router = express.Router();

router.get("/all", async (req, res, next) => {
  let result = await db.any("select username,score,email,phone from users");

  res.status(200).json({
    status: 200,
    data: result,
    message: "Retrieved all Users"
  });
});

module.exports = router;
