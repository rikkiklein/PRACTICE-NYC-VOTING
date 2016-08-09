import React, { Component } from 'react';
import upWifi from '../util/helper.js';

class Update extends Component{
  constructor(props){
    super(props);
  };

  handleDelClick(event){
    event.preventDefault();
    const url = {url: this.props.up}
    upWifi.updateWifi(url)
    .then((json) => {
      console.log("updated!")
    })
  }

  render(){
    return(
      <div>
        <button className="favorite" onClick={this.handleDelClick.bind(this)}>Update</button>
      </div>
    )
  }
}

export default Update
