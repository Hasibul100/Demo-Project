import React, { useState } from "react";
import axios from "axios";
import data from "@/assets/countries+states+cities.json";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "c0cfd5530d234ffb8d034301251803"; // OpenWeatherMap থেকে API key নিন

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [ip, setIp] = useState("");

  const selectedCountryData = data.find(
    (item) => item.name === selectedCountry
  );
  const divisions = selectedCountryData ? selectedCountryData.states : [];
  const selectedDivisionData = divisions.find(
    (item) => item.name === selectedDivision
  );
  const districts = selectedDivisionData ? selectedDivisionData.cities : [];

  const getWeather = async (city) => {
    if (!city) {
      setError("অনুগ্রহ করে একটি শহরের নাম নির্বাচন করুন");
      return;
    }

    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      setWeather(response.data);
      setError("");
    } catch (err) {
      setError("শহরের নাম সঠিক নয় বা তথ্য পাওয়া যায়নি");
      setWeather(null);
    }
  };

  const openMap = (latitude, longitude) => {
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(mapUrl, "_blank");
  };

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        openMap(latitude, longitude);
      },
      (error) => {
        console.error("লোকেশন পাওয়া যায়নি", error);
      }
    );
  };
  async function getIP() {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setIp(`Your IP Address: ${data.ip}`);
    } catch (error) {
      console.error("Error fetching IP address:", error);
    }
  }
  console.log(ip);
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Weather App</h1>
      <h1>Select your city</h1>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <button onClick={getIP}>ip</button>
        <h1>Location Selector</h1>

        {/* Country Selection */}
        <select onChange={(e) => setSelectedCountry(e.target.value)}>
          <option value="">Select Country</option>
          {data.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        {/* Division Selection */}
        {selectedCountry && (
          <select onChange={(e) => setSelectedDivision(e.target.value)}>
            <option value="">Select Division</option>
            {divisions.map((division, index) => (
              <option key={index} value={division.name}>
                {division.name}
              </option>
            ))}
          </select>
        )}

        {/* District Selection */}
        {selectedDivision && (
          <select
            onChange={(e) => {
              setSelectedDistrict(e.target.value);
              getWeather(e.target.value);
            }}
          >
            <option value="">Select District</option>
            {districts.map((district, index) => (
              <option key={index} value={district.name}>
                {district.name}
              </option>
            ))}
          </select>
        )}

        <button onClick={getUserLocation} style={{ marginTop: "20px" }}>
          আমার লোকেশন দেখান
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h2>{weather.location.name}</h2>
          <p>তাপমাত্রা: {weather.current.temp_c}°C</p>
          <p>আবহাওয়া: {weather.current.condition.text}</p>
          <p>আর্দ্রতা: {weather.current.humidity}%</p>
          <p>বাতাসের গতি: {weather.current.wind_kph} km/h</p>
          <button
            onClick={() => openMap(weather.location.lat, weather.location.lon)}
          >
            মানচিত্রে দেখুন
          </button>
        </div>
      )}
    </div>
  );
}

export default Weather;
