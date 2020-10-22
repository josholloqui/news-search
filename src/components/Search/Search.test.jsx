import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from './Search';

describe('Search component', () => {
  afterEach(() => cleanup());
  it('renders search', () => {
    const { asFragment } = render(
      <Search
        term="chicken"
        onChange={() => {}}
        onSubmit={() => {}}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
