import React, { Component }   from 'react';
import util                   from '../util/helper.js';
import Background             from '../components/Background.js';
import Header                 from '../components/Header.js';
import Footer                 from '../components/Footer.js';
import Favorite               from './Favorite.js'
import '../css/createDisplay.css';

class CreateDisplay extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchText: "",
      response: []
    };
  };

  createCards(spots, index){
    let ret = spots.map((card, index)=>{
      return(
        <div key={index} className="result-flex">
          <div className="column">
          <div className="left-flex">
            <ul className="single-result-title">
              <li><h4>Name:</h4></li>
              <li><h4>Location:</h4></li>
              <li><h4>City:</h4></li>
              <li><h4>Latitude:</h4></li>
              <li><h4>Longtitude:</h4></li>
              <li><h4>Boro:</h4></li>
              <li><h4>Location Type:</h4></li>
              <li><h4>Provider:</h4></li>
              <li><h4>Source ID:</h4></li>
              <li><h4>Type:</h4></li>
              <li><h4>Remarks:</h4></li>
            </ul>
          </div>
          <div className="right-flex">
            <ul className="single-result-info">
              <li>{card.name}</li>
              <li>{card.location}</li>
              <li>{card.city}</li>
              <li>{card.lat}</li>
              <li>{card.long_}</li>
              <li>{card.boro}</li>
              <li>{card.location_t}</li>
              <li>{card.provider}</li>
              <li>{card.ssid}</li>
              <li>{card.type}</li>
              <li>{card.remarks}</li>
            </ul>
          </div>
        </div>
          <Favorite fav={spots[index]}/>
        </div>
      )
    })
    return ret;
  }

  render(){
    const index = 0;
    return(
      <div className="createDisplay">
        {this.createCards(this.props.responseProvided, index)}
      </div>
    )
  }
}

export default CreateDisplay
