import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'


 class WeatherList extends Component {
   renderWeather(cityData) {
     const name = cityData.city.name;
     const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273); //change it to C instead K
     const pressures = cityData.list.map(weather => weather.main.pressure);
     const humidities = cityData.list.map(weather => weather.main.humidity);
     const {lon, lat} = cityData.city.coord; //ES6 way of grabbing that end point and making a variable when passing paramaters.

console.log(temps)
      return (
        <div key={name}>
          <h1>Hello, {name}</h1>
            <div className="map-charts-container">
              <div className="map-container">
                <GoogleMap lon={lon} lat={lat}/>
              </div>
            <div className="charts-container">
              <div className="chart">
                <Chart data = {temps} color="orange" units="C Temp"/>
              </div>
            <div className="chart">
              <Chart data = {pressures} color="green" units="Pressure in hPa"/>
            </div>
            <div className="chart">
              <Chart data = {humidities} color="red" units="% Humidity"/>
            </div>
            <div className="chart">
              <Chart data = {humidities} color="red" units="% Humidity"/>
            </div>

          </div>
        </div>
  </div>
            )
      }
   render(){
    return(
            <div className="weather-container">
            <h1>Weather</h1>
            {this.props.weather.map(this.renderWeather)}
            </div>
    );
  }
}

// function mapDispatchToProps (state) {
//   return {weather: state.weather};
//   // We assigned our weather reducer to the combined key.
//   //
// }

// we can do it in es6 and make it cleaner because we are pulling one property.

function mapStateToProps({weather}) {  //similar to const weathe = state.weather
  return {weather}; //{weather} === {weather:weather}
}
//we need to connect the component with mapDispatchToProps instead of the default so we can have access this.props.weather
export default connect(mapStateToProps)(WeatherList);
