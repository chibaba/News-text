import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Authors from './authors/pages/Authors';
import NewNews  from './news/pages/NewNews'


const App = () => {
  return (
       <Router>
       <Switch>
  <Route path="/" exact>
    <Authors/>  
  </Route>
  <Route path="/News/New" exact>
    <NewNews/>  
  </Route>
  <Redirect to="/" />
    </Switch>
  </Router>
  )
}

export default App;
