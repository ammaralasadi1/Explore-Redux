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
      <div className="artists" key='hi'>
           {results.map(function(result, index){
                  return <div className='artist' key={ index }>
                    <img className='artist-image' src={result.image[3]['#text']}/>
                    <a className='artist-name' href={result.url}>{result.name}</a>
                  </div>;
                  })}
     </div>
   )
   }

   render(){
    return(
      <div className="artist-container">
        <h1>Top Artists</h1>
        <div>{this.props.artist.map(this.renderArtist)}</div>
      </div>
    );
  }
}

function mapStateToProps({artist}) {
  return {artist};
}
export default connect(mapStateToProps)(ArtistList);
