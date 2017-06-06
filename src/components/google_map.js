import React, {Component} from 'react';


class GoogleMap extends Component {
  componentDidMount() { //lifecycle method that gets called after the screen renders
    new google.maps.Map(this.refs.map, {
      zoom: 15,
      center: {
        lat: this.props.lat, //we get this information for the weather api.
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div className="g-map" ref = "map" / > ; //the ref method is how react can target a n html element in the page.
    //by refering to this.refs.map//
  }

}






export default GoogleMap;
