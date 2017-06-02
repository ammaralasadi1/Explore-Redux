import axios from 'axios';

const API_KEY = '2a64f28a5cbb329dff8bdddf27e7c429';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER' //to keep the code consistant between the action creator and the reducer
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER, // we dont have to refrence strings, variable are cleaner.
    payload: request
  };

}

// the use of middleware (redux-promise) to handle a promise when using axios to make an ajax request.
//  althoug ajax request are syncrisis in natue puting the request in the payload is handled by redux like data.
//all of it achived thrrough middleware
