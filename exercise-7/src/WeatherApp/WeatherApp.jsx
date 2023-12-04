import React, { useState, useEffect } from "react";
import "../App.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = "2368a7e6370cbe37121a8b13b622f281";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

  const getWeatherData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
      } else {
        console.error(
          "Error fetching weather data:",
          data.message || "Unknown error"
        );
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      getWeatherData();
    }
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <div>
        <label htmlFor="cityInput">Enter City: </label>
        <input
          type="text"
          id="cityInput"
          value={city}
          onChange={handleCityChange}
        />
        <button onClick={getWeatherData}>Get Weather</button>
      </div>
      {loading && <p>Loading...</p>}
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
