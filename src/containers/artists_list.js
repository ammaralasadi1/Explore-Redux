import React, {Component} from 'react';
import {connect} from 'react-redux';

class ArtistList extends Component {
  renderArtist(response) {

    let results = response.topartists;
    if (!results.artist)
      return <div>Error</div>;
    results = results.artist // Error handling for if there is no artists.
    if (results.length > 5)
      results.length = 5;
    console.log(results);
    return (
      <div key='hi' className='artists'>
        {results.map(function(result, index) {
          return (

            <div className="artist" key={index}>
              <img className="artist-image" src={result.image[3]['#text']}/>
              <a href={result.url}>{result.name}</a>
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div className="artists-container">
        <p className="cityName">Top 5 favorite artists fo this countrey</p>
        {this.props.artist.map(this.renderArtist)}
      </div>
    );
  }
}

function mapStateToProps({artist}) {
  return {artist};
}
export default connect(mapStateToProps)(ArtistList);
