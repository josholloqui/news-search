import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import { getArticles } from '../services/news-api';

jest.mock('../services/news-api');

describe('NewsSearch container', () => {
  it('renders search', async() => {
    getArticles.mockResolvedValue([
      { title: 'cal', author: 'and', description: 'hobb', publishedAt: 'today' }
    ]);

    render(<NewsSearch />);
    const articleList = await screen.findByTestId('articles');

    expect(articleList).toBeEmptyDOMElement();
  });
});
