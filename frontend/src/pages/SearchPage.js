// SearchPage.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const books = useSelector((state) => state.books.data); // Access the data field from your Redux store
    const [searchResults, setSearchResults] = useState([]);
    const dispatch = useDispatch();

    const handleSearch = () => {
        // Filter books based on the search query
        const filteredBooks = books.filter((book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      
        // Update the searchResults state with the filtered books
        setSearchResults(filteredBooks);
      };
      
    return (
      <div>
        <div className="max-w-screen-x1 flex flex-wrap items-center justify-between mx-auto p-2 shrink-0 space-x-2">
          <div className="flex-reverse flex-grow items-center md:items-center md:w-auto relative">
          <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
            {/* ... Search button and icon */}
          </div>
        </div>
  
        {/* Display search results */}
        <div>
          {searchResults.map((book) => (
            <div key={book.id}>
              {/* Display each book */}
              <p>{book.title}</p>
              {/* ... Other book details */}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SearchPage;