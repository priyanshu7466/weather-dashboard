import React, { useState } from 'react';
import { API_KEY, CURRENT_WEATHER_URL, FORECAST_URL } from './config';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import { motion } from 'framer-motion';
import './styles.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [currentCity, setCurrentCity] = useState("");
  const [theme, setTheme] = useState("light");
  const fetchWeather = async (cityQuery) => {
    setLoading(true);
    setError("");
    setWeatherData(null);
    setForecastData([]);
    try {
      const weatherResponse = await fetch(`${CURRENT_WEATHER_URL}?q=${cityQuery}&appid=${API_KEY}&units=metric`);
      if (!weatherResponse.ok) {
        throw new Error("City not found or API error");
      }
      const weatherJson = await weatherResponse.json();
      setWeatherData(weatherJson);
      setCurrentCity(cityQuery);

      const forecastResponse = await fetch(`${FORECAST_URL}?q=${cityQuery}&appid=${API_KEY}&units=metric`);
      if (forecastResponse.ok) {
        const forecastJson = await forecastResponse.json();
        setForecastData(forecastJson.list);
      }

      setRecentSearches((prev) => {
        const updated = [cityQuery, ...prev.filter(city => city.toLowerCase() !== cityQuery.toLowerCase())];
        return updated.slice(0, 5);
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (cityQuery) => {
    if (cityQuery.trim() !== "") {
      fetchWeather(cityQuery.trim());
    }
  };

  const handleRefresh = () => {
    if (currentCity) {
      fetchWeather(currentCity);
    }
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app-container ${theme}`}>
      <header>
        <h1>Weather Dashboard</h1>
        <div className="controls">
          <button onClick={toggleTheme}>{theme === "light" ? "Dark Mode" : "Light Mode"}</button>
          {currentCity && <button onClick={handleRefresh}>Refresh</button>}
        </div>
      </header>
      <SearchBar onSearch={handleSearch} />
      {loading && 
        <div className="loader">
          <div className="spinner"></div>
        </div>
      }
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <WeatherCard data={weatherData} />
        </motion.div>
      )}
      {forecastData.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Forecast data={forecastData} />
        </motion.div>
      )}
      {recentSearches.length > 0 && (
        <div className="recent-searches">
          <h3>Recent Searches:</h3>
          <ul>
            {recentSearches.map((city, index) => (
              <li key={index} onClick={() => handleSearch(city)}>
                {city}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default App;
