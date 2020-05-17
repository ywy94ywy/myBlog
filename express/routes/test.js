const express = require("express");
const router = express.Router();
const { exec } = require("../db/mysql");

/* GET users listing. */
router.post("/test", function (req, res, next) {
  // res.send('respond with a resource');
  const { name } = req.body;
  const sql = "select * from article;";

  exec(sql).then((res) => {
    console.log(res);
  });

  res.json({ msg: "ok" });
});

module.exports = router;
