import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './_SearchBar.scss';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    // Trigger the search function when the input value changes
    onSearch(newQuery);
  };

  return (
    <div>
      <Form inline>
        <Form.Control
          type='text'
          placeholder='Search for a movie'
          value={query}
          onChange={handleInputChange}
          className='mr-sm-2'
        />
      </Form>
    </div>
  );
};

export default SearchBar;
