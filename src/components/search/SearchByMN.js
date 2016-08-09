import React, { Component }   from 'react';
import util                   from '../../util/helper.js';
import Background             from '../Background.js';
import Header                 from '../Header.js';
import Footer                 from '../Footer.js';
import Favorite               from '../Favorite.js'
import CreateDisplay          from '../CreateDisplay.js';

class SearchByManhattan extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchText: "",
      response: []
    };
  };

  getManhattan(event){
    util.byBoro('mn')
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
        <h5>Manhattan</h5>
        {this.getManhattan()}
        <CreateDisplay responseProvided={spots}/>
      </div>
      )
    }
  }

export default SearchByManhattan
