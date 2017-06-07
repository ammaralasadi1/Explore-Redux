import React, {Component} from 'react';
import {connect} from 'react-redux';

 class ArtistList extends Component {
   renderArtist(response) {


     let results = response.topartists;
     if (!results.artist) return <div>Error</div>;
     results = results.artist // Error handling for if there is no artists.
     if (results.length > 5) results.length = 5;
     console.log(results);
     return (
      <div key='hi'>
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
      <div className="artist-container">
        <h1>Top Artists</h1>
        <h1>{this.props.artist.map(this.renderArtist)}</h1>
      </div>
    );
  }
}

function mapStateToProps({artist}) {
  return {artist};
}
export default connect(mapStateToProps)(ArtistList);
