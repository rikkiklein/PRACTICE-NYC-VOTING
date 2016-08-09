import React, { Component } from 'react';
import util                 from '../util/helper.js';
import Background           from './Background.js';
import Header               from './Header.js';
import Footer               from './Footer.js';
import ViewAllButton        from './ViewAllButton.js';
import '../css/ViewAll.css';
import '../css/SearchByTitle.css';

class ViewAllFavorites extends Component{
  constructor(props){
    super(props);
    this.state = {
      response: []
    };
  };

  render(){
    return(
      <div className="center">
        <Background/>
        <Header/>
        <div className="ViewAll">
          <ViewAllButton />
        </div>
        <Footer>Rikki Rifka Rabinowitz 2016 All Rights Reserved.</Footer>
      </div>
    )
  }
}
export default ViewAllFavorites
