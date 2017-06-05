import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'
import NewsReducer from './reducer_news'
import ArtistsReducer from './reducer_artists.js'

const rootReducer = combineReducers({
  weather: WeatherReducer,
  news: NewsReducer,
  artist: ArtistsReducer
  });

export default rootReducer;
