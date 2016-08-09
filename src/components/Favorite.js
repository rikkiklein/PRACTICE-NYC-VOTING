import React, { Component } from 'react';
import saveWifi from '../util/helper.js';

class Favorite extends Component{
  constructor(props){
    super(props);
  };

  handleFavClick(event){
    event.preventDefault();
    const url = {url: this.props.fav}
    saveWifi.saveWifi(url)
    .then((json) => {
    console.log(url.url.name + " was saved to your favorites!")
    })
  }

  handleAllClick(event){
    event.preventDefault();
    saveWifi.getAll()
    .then((json) => {
    console.log("response", json)
    })
  }


  render(){
    return(
      <div>
        <button className="favorite" onClick={this.handleFavClick.bind(this)}>Favorite</button>
        <button className="favorite" onClick={this.handleAllClick.bind(this)}>All</button>

      </div>
    )
  }
}

export default Favorite
