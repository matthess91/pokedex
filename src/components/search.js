import React from 'react'

const Search = ({ onChange }) => (
  <input
    type="text"
    onChange={onChange}
    id="search-input"
    placeholder="Enter pokemon name..."
    autoFocus
  />
)

export default Search
