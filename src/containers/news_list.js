import React, {Component} from 'react';
import {connect} from 'react-redux';

class NewsList extends Component {
  renderNews(response) {
    const results = response.posts;
    if (results.length > 5)
      results.length = 5;

    return (
      <div className="news-list" key='hi'>

        {results.map(function(result, index) {
          console.log(result)
          return (
            <div className="headline">

              <img className='news-image' src={result.thread.main_image} alt="Image"/>

              <a className='news-title' href={result.url}>{result.title}</a>

            </div>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div className='news-container'>
        {this.props.news.map(this.renderNews)}
      </div>
    );
  }
}

function mapStateToProps({news}) {
  return {news};
}
export default connect(mapStateToProps)(NewsList);
