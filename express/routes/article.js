const express = require("express");
const router = express.Router();
const { SuccessModel } = require("../model/resModel");
const {
  getArticleList,
  getArticleDetail,
  addArticle,
  delArticle,
} = require("../controller/article");

router.post("/list", function (req, res, next) {
  getArticleList().then((data) => {
    return res.json(new SuccessModel(data));
  });
});

router.post("/detail", function (req, res, next) {
  const { articleId } = req.body;

  getArticleDetail(articleId).then((data) => {
    return res.json(new SuccessModel(data));
  });
});

router.post("/add", function (req, res, next) {
  const { title, content } = req.body;

  addArticle(title, content).then((data) => {
    return res.json(
      new SuccessModel({
        id: data.insertId,
      })
    );
  });
});

router.post("/del", function (req, res, next) {
  const { id } = req.body;

  delArticle(id).then(() => {
    return res.json(new SuccessModel());
  });
});

module.exports = router;
