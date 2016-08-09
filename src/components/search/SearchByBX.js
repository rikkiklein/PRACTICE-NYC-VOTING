import React, { Component }   from 'react';
import util                   from '../../util/helper.js';
import Background             from '../Background.js';
import Header                 from '../Header.js';
import Footer                 from '../Footer.js';
import Favorite               from '../Favorite.js'
import CreateDisplay          from '../CreateDisplay.js';

class SearchByBronx extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchText: "",
      response: []
    };
  };

  getBronx(event){
    util.byBoro('bx')
    .then((json) => {
      this.setState({
        response: json
      });
    })
  }


  render(){
    const spots = this.state.response;
    const index = 0;
    return(
      <div className="center">
        <h5>Bronx</h5>
        {this.getBronx()}
        <CreateDisplay responseProvided={spots}/>
      </div>
      )
    }
  }

export default SearchByBronx
