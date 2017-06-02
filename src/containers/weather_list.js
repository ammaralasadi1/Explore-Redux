import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    console.log(`the is ${name}`);
    console.log(this.props.weather)
    return(
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
      </tr>
    );
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

// function mapDispatchTpProps (state) {
//   return {weather: state.weather};
//   // We assigned our weather reducer to the combined key.
//   //
// }

// we can do it in es6 and make it cleaner because we are pulling one property.

function mapStateToProps({weather}) {  //similar to const weathe = state.weather
  return {weather}; //{weather} ==={weather:weather}
}
//we need to connect the component with mapDispatchTpProps instead of the default so we can have access this.props.weather
export default connect(mapStateToProps)(WeatherList);
