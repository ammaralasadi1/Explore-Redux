import React, { Component } from 'react';
import SearchBar from '../containers/search_bar.js'
import WeatherList from '../containers/weather_list'
import NewsList from '../containers/news_list'
import ArtistList from '../containers/artists_list.js'

export default class App extends Component {
  render() {
    return (
      <div className="app-container" >
      <SearchBar className="container1" />
      <WeatherList className="container2" />
      <NewsList className="container3"/>
      <ArtistList className="container4" />
      </div>
    );
  }
}
