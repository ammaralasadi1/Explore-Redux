import React, {Component} from 'react';
import {connect} from 'react-redux';

class NewsList extends Component {
  renderNews(response) {
    const results = response.posts;
    if (results.length > 10)
      results.length = 10;

      return (
        <div className="artists" key='hi'>
          {results.map(function(result, index) {
            console.log(result)
            return <div className='artist' key={index}>
              <img className='artist-image' src={result.thread.main_image}/>
              <a className='artist-name' href={result.url}>{result.title}</a>
            </div>;
          })}
        </div>
      )
    }

  render() {
    return (
      <div className="news-container">
        <h1>News</h1>
        {this.props.news.map(this.renderNews)}
      </div>
    );
  }
}

function mapStateToProps({news}) {
  return {news};
}
export default connect(mapStateToProps)(NewsList);
