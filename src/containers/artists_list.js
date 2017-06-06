import React, {Component} from 'react';
import {connect} from 'react-redux';
import {name} from './containers/weather_list.js';

 class ArtistList extends Component {
   renderArtist(response) {


     let results = response.topartists;
     if (!results.artist) return <div>Error</div>;
     results = results.artist // Error handling for if there is no artists.
     if (results.length > 5) results.length = 5;
     console.log(results);
     // mapping the list array and then map the main object and change it
     //to an array so we can use it with React Sparklines. it only take arrays.
     return (
      <div className="container" key='hi'>
           {results.map(function(result, index){
                  return <h6 key={ index }>
                  <a href={result.url}>{result.name}</a>
                    <img src={result.image[3]['#text']}/>
                  </h6>;
                  })}
     </div>
   )
   }

   render(){
    return(
      <div className="container">

        <h1>{this.props.artist.map(this.renderArtist)}</h1>
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

function mapStateToProps({artist}) {  //similar to const weathe = state.weather
  return {artist}; //{weather} === {weather:weather}
}
//we need to connect the component with mapDispatchToProps instead of the default so we can have access this.props.weather
export default connect(mapStateToProps)(ArtistList);
