import React, {Component} from 'react';
import {connect} from 'react-redux';

class NewsList extends Component {
  renderNews(response) {
    const results = response.response.results;

    return (
      <div key='hi'>
        {results.map(function(result, index) {
          return <h6 key={index}>
            <a href={result.webUrl}>{result.webTitle}</a>
          </h6>;
          
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
