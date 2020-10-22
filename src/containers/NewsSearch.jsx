import React, { Component } from 'react';
import ArticleList from '../components/Articles/Articles';
import Search from '../components/Search/Search';
import { getArticles } from '../services/news-api';

class NewsSearch extends Component {
  state = {
    term: '',
    articles: []
  }

  handleChange = ({ target }) => {
    this.setState({ term: target.value });
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    await getArticles(this.state.term)
      .then(articles => {
        this.setState({ articles });
      });
  }

  render() { 
    const { articles, term } = this.state;
    return (
      <>
        <Search
          term={term}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <ArticleList
          articles={articles}
        />
      </>
    );
  }
}
 
export default NewsSearch;
