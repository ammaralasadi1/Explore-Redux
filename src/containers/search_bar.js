import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/weather_action';
import {fetchNews} from '../actions/news_action';
import {fetchArtist} from '../actions/top_artists_action.js';
import {countries} from '../utilities/countries.js'; //array of countrey name.

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: 'France'
    }
    //the initial state
    this.OninputChange = this.OninputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.activateRandom = this.activateRandom.bind(this);
    //bindind the OninputChange function to this which is SearchBar and bind and replcace
    //the function with it. Kind of replacing the local function.
    // if you got a call back, you need to bind it or use fat arrow function
  }

  OninputChange(event) {

    this.setState({term: event.target.value});
    console.log(event.target.value);

  };
  componentDidMount() {
    this.props.fetchWeather(this.state.term);
    this.props.fetchNews(this.state.term);
    this.props.fetchArtist(this.state.term);
    this.setState({term: ''})
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.props.fetchNews(this.state.term);
    this.props.fetchArtist(this.state.term);
    this.setState({term: ''})
  };

  activateRandom() {
    const random = _.sample(countries);
    console.log(random);
    this.setState({term: random});

  }
  //Prevents the default behavior for the form element to refresh the page.
  //One handler that handles when user trying to submit the form.
  // when you press enter and the form elemt child. the browser thinks you aare
  //submiting html request so it makes a call to the server. it is making a request
  //to the backend. It is not react specific, html form elements do that.

  render() {
    return (

      <div className="SearchBar">
        <form className="input-group" onSubmit={this.onFormSubmit}>

          <input placeholder="Get 5 days weather, maps, music and news in one click! Enter a city or a country name to start" className="input" value={this.state.term} onChange={this.OninputChange}/>

          <button className="btn" type="submit" className="btn btn-secondary">Submit</button>

          <button className="btn" onClick={this.activateRandom}>Feeling lucky?</button>

        </form>

      </div>
    );
  }

}

function mapDispatchTopProps(dispatch) {
  return bindActionCreators({
    fetchWeather,
    fetchNews,
    fetchArtist
  }, dispatch);
  // bindActionCreators({fetchNews}, dispatch);
}

export default connect(null, mapDispatchTopProps)(SearchBar);
// by passing null as an argument whenever we are psssing a function it goes as a seconds arguments
//telling redux that we don't need a state here.
//it also gives us access to the state
