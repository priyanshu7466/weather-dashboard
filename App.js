import React, { useState } from 'react';
import { API_KEY, BASE_URL } from './config';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './styles.css';

function App() {
  // State definitions
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  // Function to fetch weather data from OpenWeatherMap API
  const fetchWeather = async (query) => {
    setLoading(true);
    setError("");
    setWeatherData(null);

    try {
      const response = await fetch(
        `${BASE_URL}?q=${query}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found or API error");
      }
      const data = await response.json();
      setWeatherData(data);
      // Update recent searches ensuring we keep at most 5 searches
      setRecentSearches((prev) => {
        const updated = [query, ...prev.filter((city) => city.toLowerCase() !== query.toLowerCase())];
        return updated.slice(0, 5);
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handler for search submission
  const handleSearch = (query) => {
    setCity(query);
    fetchWeather(query);
  };

  return (
    <div className="app-container">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading weather data...</p>}
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
      {recentSearches.length > 0 && (
        <div className="recent-searches">
          <h3>Recent Searches:</h3>
          <ul>
            {recentSearches.map((item, index) => (
              <li key={index} onClick={() => handleSearch(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
