import React, { Component }   from 'react';
import Header                 from '../components/Header.js';
import Footer                 from '../components/Footer.js';
import Background             from '../components/Background.js';
import Globe                  from '../components/Globe.js'
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
    var here = this;
    navigator.geolocation.getCurrentPosition(success);

    function success(position) {
      var innerGlobe={};
      innerGlobe.lat  = position.coords.latitude;
      innerGlobe.long = position.coords.longitude;
      here.setState({
        globe: {
          latitude:innerGlobe.lat,
          longitude: innerGlobe.long
        }
      })
      console.log("this.state.globe", here.state.globe);
    }
  }

  render() {
    console.log(this.state.globe);
    return (
      <div className="App">
        <Background/>
        <Header/>
        <div className="home">
          <h1>Where should I vote?!</h1>
          <button className="voteButton" onClick={this.geoFindMe.bind(this)}>1 Find me the nearest voting booth</button>
          <Globe globe={this.state.globe}/>
        </div>
        <Footer>Rikki Rifka Rabinowitz 2016 All Rights Reserved.</Footer>
    </div>
    );
  }
}

export default App;
