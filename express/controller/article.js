const { exec } = require("../db/mysql");

const getArticleList = () => {
  const sql = "select id,title,content,createtime from article;";
  return exec(sql).then((res) => res || {});
};

const getArticleDetail = (articleId) => {
  const sql = `select id,title,content,createtime from article where id = ${articleId};`;
  return exec(sql).then((res) => res || {});
};

const addArticle = (title, content) => {
  const sql = `insert into article (title,content) values ("${title}","${content}")`;

  return exec(sql).then((res) => res || {});
};

const delArticle = (id) => {
  const sql = `delete from article where id = ${id}`;

  return exec(sql).then((res) => res || {});
};

module.exports = {
  getArticleList,
  getArticleDetail,
  addArticle,
  delArticle,
};
