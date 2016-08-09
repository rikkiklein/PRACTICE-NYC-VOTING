import React, { Component }   from 'react';
import util                   from '../../util/helper.js';
import Background             from '../Background.js';
import Header                 from '../Header.js';
import Footer                 from '../Footer.js';
import Favorite               from '../Favorite.js';
import SearchByBK             from './SearchByBK.js';
import SearchByBX             from './SearchByBX.js';
import SearchByMN             from './SearchByMN.js';
import SearchByQU             from './SearchByQU.js';
import SearchBySI             from './SearchBySI.js';

class SearchFilter extends Component{
  constructor(props){
    super(props);
  };

  checkComp(){
    switch (this.props.params.searchFilter) {
      case "searchBK":
        return   (<SearchByBK/>);
        break;
      case "searchBX":
        return   (<SearchByBX/>);
        break;
      case "searchMN":
        return   (<SearchByMN/>);
        break;
      case "searchQU":
        return   (<SearchByQU/>);
        break;
      case "searchSI":
        return   (<SearchBySI/>);
        break;
      default:
        break;
    }
  }

  render(){
    return(
      <div className="center">
        {this.checkComp()}
        </div>
      )
    }
  }

export default SearchFilter
