import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ term, handleChange }) => (
  <>
    <label>
      <input
        id="term"
        type="text"
        name="term"
        value={term}
        onChange={handleChange}
      />
    </label>
  </>
);

Search.propTypes = {
  term: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Search;
