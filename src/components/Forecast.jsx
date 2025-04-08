import React from 'react';
import { motion } from 'framer-motion';

function Forecast({ data }) {
  const grouped = data.reduce((acc, entry) => {
    const date = entry.dt_txt.split(' ')[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(entry);
    return acc;
  }, {});

  const dailyForecast = Object.keys(grouped).map(date => {
    const forecasts = grouped[date];
    return forecasts[Math.floor(forecasts.length / 2)];
  });

  return (
    <div className="forecast-container">
      <h3>5-Day Forecast</h3>
      <div className="forecast-cards">
        {dailyForecast.map((entry, index) => {
          const iconUrl = `https://openweathermap.org/img/wn/${entry.weather[0].icon}@2x.png`;
          return (
            <motion.div 
              key={index}
              className="forecast-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h4>{new Date(entry.dt_txt).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</h4>
              <img src={iconUrl} alt={entry.weather[0].description} />
              <p>{Math.round(entry.main.temp)}°C</p>
              <p>{entry.weather[0].main}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
