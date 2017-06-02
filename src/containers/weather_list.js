import React, {Component} from 'react';
import {connect} from 'react-redux';

 class WeatherList extends Component {
   renderWeather(cityData) {
     return (
       <tr>
        <td>{cityData.city.name}</td>
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
  return {weather}; //{weather} ==={weather:weather}
}
//we need to connect the component with mapDispatchToProps instead of the default so we can have access this.props.weather
export default connect(mapStateToProps)(WeatherList);
