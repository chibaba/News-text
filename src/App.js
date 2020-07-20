import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Authors from './authors/pages/Authors'


const App = () => {
  return (
       <Router>
  <Route path="/">
    <Authors/>  
  </Route>

  </Router>
  )
}

export default App;
