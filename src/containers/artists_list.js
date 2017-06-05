import React, {Component} from 'react';
import {connect} from 'react-redux';


 class ArtistList extends Component {
   renderArtist(response) {

     const results = response.topartists.artist;

     console.log(results);
     // mapping the list array and then map the main object and change it
     //to an array so we can use it with React Sparklines. it only take arrays.
     return (
      <div key='hi'>
           {results.map(function(result, index){
                  return <h6 key={ index }>
                  <a href={result.url}>{result.name}</a>
                  </h6>;

                })}
     </div>
   )
   }

   render(){
    return(
      <table className='table table-hover'>
          <thead>
            <tr>
              <th>Artisi</th>
            </tr>
          </thead>
          <tbody>
            {this.props.artist.map(this.renderArtist)}
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

function mapStateToProps({artist}) {  //similar to const weathe = state.weather
  return {artist}; //{weather} === {weather:weather}
}
//we need to connect the component with mapDispatchToProps instead of the default so we can have access this.props.weather
export default connect(mapStateToProps)(ArtistList);
