import React, { Component } from 'react';
import SearchBar from '../containers/search_bar.js'
import WeatherList from '../containers/weather_list'
import NewsList from '../containers/news_list'

export default class App extends Component {
  render() {
    return (
      <div>
      <SearchBar />
      <WeatherList />
      <NewsList />
      </div>
    );
  }
}
