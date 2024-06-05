import React, { useState } from 'react';

const SearchBar = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (value) => {
    setSearchTerm(value);
    const filteredResults = items.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
       <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;