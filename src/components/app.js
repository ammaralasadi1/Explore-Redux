import React, {Component} from 'react';
import SearchBar from '../containers/search_bar.js'
import WeatherList from '../containers/weather_list'
import NewsList from '../containers/news_list'
import ArtistList from '../containers/artists_list.js'

export default class App extends Component {
  render() {
    return (
      <div className="all-containers">
        <SearchBar className="SearchBar"/>
        <div className="side-by-side">
          <div className='stacked'>
            <WeatherList/>
          </div>
          <div className='alone'>
            <NewsList/>
          </div>
        </div>
        <div className="buttom">
          <hr/>
          <ArtistList/>
        </div>

      </div>

    );
  }
}
