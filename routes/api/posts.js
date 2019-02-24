var pgp = require("pg-promise")();
var db = pgp("postgres://postgres:123456@localhost:5432/depression_detection");
const vader = require("vader-sentiment");
var express = require("express");
var router = express.Router();

router.post("/get-all", async (req, res, next) => {
  let username = req.body.username;
  let result = await db.any(
    `select id,username,post,date from posts where username='${username}' order by id desc`
  );
  res.status(200).json({
    status: 200,
    data: result,
    message: "Retrieved all posts"
  });
});

router.post("/create-post", async (req, res, next) => {
  let username = req.body.username;
  let post = req.body.post;
  let date = new Date();

  const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(post);
  let id = await db.any(
    `insert into posts(username,post,date,intensity) values('${username}','${post}','${date}','${
      intensity.compound
    }') returning id`
  );

  let score = await db.any(`select * from users where username='${username}'`);

  score = score[0].score;
  score = +score + +intensity.compound;
  console.log(score);
  await db.any(
    `update users set score='${score}' where username='${username}'`
  );

  let result = await db.any(
    `select username,post,date from posts where id='${id[0].id}'`
  );

  res.status(200).json({
    status: 200,
    data: result,
    message: "Created One Post"
  });
});

router.get("/every-post", async (req, res, next) => {
  let result = await db.any(
    `select id,post,date,username from posts order by id desc`
  );

  res.status(200).json({
    status: 200,
    data: result,
    message: "Retrieved Every Post"
  });
});

module.exports = router;
