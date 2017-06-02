import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';
// You can put the export here instead on the bottom.
  class SearchBar extends Component {

  constructor (props) {
    super(props)
    this.state = { term : ''}
    //the initial state
    this.OninputChange = this.OninputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    //bindin the OninputChange function to this which is SearchBar and bind and replcace
    //the function with it. Kind of replacing the local function.
    // if you got a call back, you need to bind it or use fat arrow function
  }

  OninputChange(event) {
    // console.log(event.target.value)
    this.setState({term: event.target.value})

  };
  onFormSubmit (event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''})
  };
  //Prevents the default behavior for the form element to refresh the page.
  //One handler that handles when user trying to submit the form.



  render () {
    return(
      // when you press enter and the form elemt child. the browser thinks you aare
      //submiting html request so it makes a cal to the server. it is making a request
      //to the backend. It is nor react specific, html form elements do that.
      <form onSubmit={this.onFormSubmit}className="input-group" >

        <input
        placeholder="Get the the weather"
        className="form-control"
        value={this.state.term}
        onChange={this.OninputChange}
        />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
    );
  }

}

function mapDispatchTopProps (dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchTopProps)(SearchBar);
// by passing null as an argument whenever we are psssing a function it goes as a seconds arguments
//telling redux that we don't need a state here.
//it also gives us access to the state