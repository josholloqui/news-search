import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArticleList from './Articles';

describe('Article component', () => {
  afterEach(() => cleanup());
  it('renders Article', () => {
    const { asFragment } = render(
      <ArticleList
        articles={[
          {
            title: 'calvin',
            author: 'and',
            description: 'hobbs',
            publishedAt: 'today'
          }
        ]}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
