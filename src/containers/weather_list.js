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


     // mapping the list array and then map the main object and change it
     //to an array so we can use it with React Sparklines. it only take arrays.
     console.log(temps)
      return (
       <tr key={name}>
            <td><GoogleMap lon={lon} lat={lat}/></td>
            <td><Chart data = {temps} color="orange" units="C"/></td>
            <td><Chart data = {pressures} color="green" units="hPa"/></td>
            <td><Chart data = {humidities} color="red" units="%"/></td>
      </tr>
        )
      }
   render(){
    return(
      <table className='table table-hover'>
          <thead>
            <tr>
              <th>City</th>
              <th>Temp</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
      </table>
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
