import React, { Component }   from 'react';
import Header                 from '../components/Header.js';
import Footer                 from '../components/Footer.js';
import Background             from '../components/Background.js';

import '../css/App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      globe: {
        latitude: "",
        longitude: ""
      }
    };
  }

  geoFindMe() {

  if (!navigator.geolocation){
    console.log( "<p>Geolocation is not supported by your browser</p>");
    return;
  }

  function success(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    console.log('Latitude is ' + latitude + '° <br>Longitude is ' + longitude);
    console.log("this.state.globe", this.state.globe);
  };

  function error() {
    console.log("error");
  };

  console.log("Locating…");

  navigator.geolocation.getCurrentPosition(success, error);
}
  render() {
    return (
      <div className="App">
        <Background/>
        <Header/>
        <div className="home">
          <h1>Where should I vote?!</h1>
          <button className="voteButton" onClick={this.geoFindMe.bind(this)}>Find me the nearest voting booth</button>
      </div>
        <Footer>Rikki Rifka Rabinowitz 2016 All Rights Reserved.</Footer>
    </div>
    );
  }
}

export default App;
