import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  afterEach(() => cleanup());
  it('renders Article', () => {
    const { asFragment } = render(
      <Article
        title="calvin"
        author="and"
        description="hobbs"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
