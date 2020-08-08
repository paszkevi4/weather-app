import React, { useState, useEffect } from 'react';
import './weather.sass';

import { Form } from './Form/form';
import { WeatherInfo } from './WeatherInfo/weatherInfo';

let city = null;
let weatherStated = null;
const API_KEY = 'bc1fde7ac9dc3752c2d8a62e589617e3';

const getWeather = async (e) => {
  city = e.target.elements.city.value;
  if (city) {
    let temp = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
    );
    let tempParsed = await temp.json();
    tempParsed.cod == 404 ? (weatherStated = tempParsed.message) : (weatherStated = tempParsed);
    console.log('i got new weather', weatherStated);
  }
};

const ert = () => {
  console.log(weatherStated);
};

export const Weather = () => {
  async function forceUpd(e) {
    e.preventDefault();
    await getWeather(e);
    setWeather(weatherStated);
  }

  let [weather, setWeather] = useState(weatherStated);
  return (
    <div>
      <Form getWeather={forceUpd} />
      <WeatherInfo weather={weather} />
    </div>
  );
};
