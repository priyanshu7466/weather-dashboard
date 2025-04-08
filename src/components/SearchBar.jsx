import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      onSearch(input.trim());
      setInput("");
    }
  };

  const handleClick = () => {
    if (input.trim()) {
      onSearch(input.trim());
      setInput("");
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
export default SearchBar;
