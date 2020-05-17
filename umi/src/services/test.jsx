export const getArticleList = () => {
  return {
    url: '/api/article/list',
    method: 'post',
  };
};

export const addArticle = data => {
  return {
    url: '/api/article/add',
    method: 'post',
    data,
  };
};

export const delArticle = id => {
  return {
    url: '/api/article/del',
    method: 'post',
    data: {
      id,
    },
  };
};
