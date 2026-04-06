import { useState } from "react";

export default function Hero({ onSearch, onReset }) {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const handleSearch = () => {
    onSearch(searchTitle, searchLocation);
  };

  const handleReset = () => {
    setSearchTitle("");
    setSearchLocation("");
    onReset();
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Dream Job Today 🚀</h1>
        <p>Search thousands of jobs from top companies with modern interface</p>

        <div className="search-box">
          <input
            type="text"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            placeholder="Job title or keyword"
          />
          <input
            type="text"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            placeholder="Location"
          />
          <button className="btn-primary" onClick={handleSearch}>
            Search
          </button>
          <button className="btn-secondary" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}
