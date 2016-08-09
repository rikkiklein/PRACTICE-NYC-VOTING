import React, { Component } from 'react';
import saveWifi from '../util/helper.js';

class Globe extends Component{
  constructor(props){
    super(props);
    this.state ={
      response: []
    }

  };

  handleClick(event){
    event.preventDefault();
    const url = {url: this.props.globe}
    console.log("url", url);
    saveWifi.getLocation(url)
    .then((json) => {
    console.log(url.url.name + " was saved to your favorites!")
    })
  }

  handleAllClick(event){
      event.preventDefault();
      saveWifi.getAll()
      .then((json) => {
      this.setState({
        response: json
      })

      this.calculateDistance();

      })
  }

  calculateDistance(){
    const results = this.state.response;
    console.log("results", results);
    results.map((res)=>{
      console.log("res", res.location.coordinates);
      let lat = res.location.coordinates[0];
      let long = res.location.coordinates[1];
      console.log("lat", lat, "long", long);
      this.Haversine(this.props.globe, lat, long)
    })
  }

  Haversine(globe, lat, long){
    console.log("globe in hav", globe);
    console.log("lat", lat, "long", long);
  }

//
//   function haversine(lat1,lon1,lat2,lon2) {
//   var R = 3959; // Radius of the earth in miles
//   var dLat = deg2rad(lat2-lat1);  // deg2rad below
//   var dLon = deg2rad(lon2-lon1);
//   var a =
//     Math.sin(dLat/2) * Math.sin(dLat/2) +
//     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
//     Math.sin(dLon/2) * Math.sin(dLon/2)
//     ;
//   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//   var d = R * c; // Distance in km
//   console.log(d);
// }
// function deg2rad(deg) {
//   return deg * (Math.PI/180)
// }
// haversine(40.740004899999995,-73.9897581,40.728725,-73.978294)



  render(){
    console.log("this.state", this.state.response);
    return(
      <div>
        <button className="favorite" onClick={this.handleClick.bind(this)}>Get Results</button>
        <button className="favorite" onClick={this.handleAllClick.bind(this)}>All</button>
      </div>
    )
  }
}

export default Globe
