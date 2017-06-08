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
            <div className="card">
              <div className="card-image">
                <figure className="image is-square">
                  <img src={result.thread.main_image} alt="Image"/>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-4">{result.thread.site_type}</p>
                    <p className="subtitle is-6">{result.thread.site}</p>
                  </div>
                </div>

                <div className="content">
                  <a className='news-title' href={result.url}>{result.title}</a>
                </div>
              </div>
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
