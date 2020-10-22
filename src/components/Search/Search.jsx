import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ term, onChange, onSubmit }) => (
  <>
    <form onSubmit={onSubmit} >
      <label>
        <input
          id="term"
          type="text"
          name="term"
          value={term}
          onChange={onChange}
        />
      </label>
      <button>SEARCH</button>
    </form>
  </>
);

Search.propTypes = {
  term: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Search;
