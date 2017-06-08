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
      <div key='hi'>
        {results.map(function(result, index) {
          return <div key={index}>
            <img  src={result.image[3]['#text']}/>
            <a  href={result.url}>{result.name}</a>
          </div>;
        })}
      </div>
    )
  }

  render() {
    return (
      <div className="artists-container">
        {this.props.artist.map(this.renderArtist)}
      </div>
    );
  }
}

function mapStateToProps({artist}) {
  return {artist};
}
export default connect(mapStateToProps)(ArtistList);
