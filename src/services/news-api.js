export const getArticles = (term) => {
  // eslint-disable-next-line max-len
  return fetch(`https://newsapi.org/v2/everything?q=${term}&apiKey=73e59a5fc569499f8631050a27553467`)
    .then(res => res.json())
    .then(json => json.articles.map(article => ({
      title: article.title,
      author: article.author,
      description: article.description,
      publishedAt: article.publishedAt
    })));
};
