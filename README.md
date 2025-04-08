# Weather Dashboard

## Overview
A weather dashboard web app built in React that fetches current weather information from the OpenWeatherMap API. Features include a search bar, real-time API integration, error/loading handling, and a list of recent searches.

## Tech Stack
- React.js (Create React App)
- Fetch API for HTTP calls
- CSS for styling (you can swap this for Tailwind/MUI/Styled Components)
- Deployed on [Vercel/Netlify/GitHub Pages]

## Setup Instructions
1. Clone the repository:
     git clone https://github.com/yourusername/weather-dashboard.git
2. Install dependencies:
     npm install
3. Create a file src/config.js and add API key:
   
        export const API_KEY = "YOUR_API_KEY";
        export const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
5. Run the project:
     npm start
