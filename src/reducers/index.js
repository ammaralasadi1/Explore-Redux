import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'
import NewsReducer from './reducer_news'

const rootReducer = combineReducers({
  weather: WeatherReducer,
  news: NewsReducer
  });

export default rootReducer;
