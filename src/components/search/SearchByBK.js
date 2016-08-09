import React, { Component }   from 'react';
import util                   from '../../util/helper.js';
import Background             from '../Background.js';
import Header                 from '../Header.js';
import Footer                 from '../Footer.js';
import Favorite               from '../Favorite.js'
import CreateDisplay          from '../CreateDisplay.js';

class SearchByBrooklyn extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchText: "",
      response: []
    };
  };

  getBrooklyn(event){
    util.byBoro('bk')
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
        <h5>Brooklyn</h5>
        {this.getBrooklyn()}
        <CreateDisplay responseProvided={spots}/>

      </div>
      )
    }
  }

export default SearchByBrooklyn
