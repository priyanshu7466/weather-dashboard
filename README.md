# 🌤️ Weather Dashboard

A responsive and animated React-based weather app that lets users search for any city and view real-time weather conditions along with a 5-day forecast.

🚀 Live App: [https://weather-dashboard-mu-puce.vercel.app](https://weather-dashboard-mu-puce.vercel.app/)  
📂 GitHub Repository: [https://github.com/priyanshu7466/weather-dashboard](https://github.com/priyanshu7466/weather-dashboard)

---

## ✨ Features

- 🔍 Search current weather by city
- 🌡️ Displays temperature, humidity, wind speed, and conditions
- 🌤️ Weather icon fetched dynamically from OpenWeatherMap
- 📅 5-Day Forecast using OpenWeatherMap Forecast API
- 🔁 Refresh Button to re-fetch data for current city
- 💾 Recent Search History (last 5 cities)
- 🌓 Dark/Light Theme Toggle
- 🔄 Loader animation while fetching data
- 🧩 Framer Motion animations
- 📱 Fully responsive (mobile and desktop)
- ❌ Graceful error handling for invalid cities or API errors

---

## 🔧 Tech Stack

- **React.js** – Frontend library
- **OpenWeatherMap API** – Weather data source
- **CSS** – Styling
- **Framer Motion** – Animations
- **Vercel** – Deployment

---

## 🔌 API Integration

### 🔹 Current Weather API
  https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric


### 🔹 Forecast Weather API
  https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric


📌 **Note:**  
Free tier of OpenWeatherMap allows up to **60 API calls per minute**

---

## ⚙️ Local Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/priyanshu7466/weather-dashboard.git
2. **Install dependencies**
   ```bash
   npm install
3. Run the app locally
   ```bash
   npm start
4. Build for production
   ```bash
   npm run build

## 🌐 Deployment

The project is deployed on **Vercel**.

### 🔧 Deployment Steps

1. **Push the project to GitHub**

2. **Go to [vercel.com](https://vercel.com) and log in with GitHub**

3. **Import the GitHub repository**

4. **Configure the build settings (if not auto-detected):**
   - **Framework Preset:** Create React App
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`

5. Deploy & get the live link! 🎉
The app will be accessible at a URL like: https://project-name-mu-puce.vercel.app

## 🤓 Learnings

- Integrated OpenWeatherMap API for live weather and forecast data
- Worked with React hooks to manage state and effects
- Implemented responsive design with CSS
- Added dark/light mode support using conditional class toggling
- Used Framer Motion for smooth animations
- Handled error and loading states effectively
- Practiced component-based architecture and modular file structure


## 👨‍💻 Author

Developed with ❤️ by [Priyanshu Ranjan](https://github.com/priyanshu7466)

- 💼 GitHub: [@priyanshu7466](https://github.com/priyanshu7466)

