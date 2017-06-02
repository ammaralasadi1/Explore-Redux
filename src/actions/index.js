import axios from 'axios';

const API_KEY = '2a64f28a5cbb329dff8bdddf27e7c429';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const FETCH_WEATHER = 'FETCH_WEATHER' //to keep the code consistant between the action creator and the reducer

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER, // we dont have to refrence strings, variable are cleaner.
    payload: request
  };

}