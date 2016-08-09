import React, { Component } from 'react';
import SearchByBK           from './SearchByBK.js';
import SearchByBX           from './SearchByBX.js';
import SearchByMN           from './SearchByMN.js';
import SearchByQU           from './SearchByQU.js';
import SearchBySI           from './SearchBySI.js';
import Header               from '../Header.js';
import Background           from '../Background.js';
import Footer               from '../Footer.js';
import { Link }             from 'react-router';
import "../../css/Header.css"
class Search extends Component{
  constructor(props){
    super(props);
  };

  render(){
    return(
      <div>
        <Background/>
        <Header/>
        <div className="search">
          <div className="Header3">
            <div className="header-link2"><Link to="/search/searchBK">Brooklyn</Link></div>
            <div className="header-link2"><Link to="/search/searchBX">Bronx</Link></div>
            <div className="header-link2"><Link to="/search/searchMN">Manhattan</Link></div>
            <div className="header-link2"><Link to="/search/searchQU">Queens</Link></div>
            <div className="header-link2"><Link to="/search/searchSI">Staten Island</Link></div>
          </div>
        </div>
        {this.props.children}
        <Footer>Rikki Rifka Rabinowitz 2016 All Rights Reserved.</Footer>
      </div>
    )
  }
}

export default Search
