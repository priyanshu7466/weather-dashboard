import React from 'react';

function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;
  // Construct icon URL based on OpenWeatherMap icon code
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p><strong>Temperature:</strong> {main.temp} °C</p>
      <p><strong>Condition:</strong> {weather[0].main}</p>
      <p><strong>Humidity:</strong> {main.humidity} %</p>
      <p><strong>Wind Speed:</strong> {wind.speed} km/h</p>
    </div>
  );
}

export default WeatherCard;
