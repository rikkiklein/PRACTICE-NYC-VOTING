import React                              from 'react';
import ReactDOM                           from 'react-dom';
import App                                from './containers/App';
import Search                             from './components/search/Search.js';
import SearchFilter                       from './components/search/SearchFilter.js';
import ViewAllFavorites                   from './components/ViewAllFavorites.js';
import Update                             from './components/Update.js';
import { Router, Route, browserHistory }  from 'react-router';

import './css/index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/viewAllFavorites" component={ViewAllFavorites}/>
    <Route path="/search" component={Search}>
      <Route path="/search/:searchFilter" component={SearchFilter}/>
    </Route>


  </Router>
  ,document.getElementById('root')
);
