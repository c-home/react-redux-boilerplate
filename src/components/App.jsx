import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Example from './Example';

const App = () => (
   <Router>
      <Switch>
         <Route path="/example" component={Example}/>
         <Redirect from="/" to="/example"/>
      </Switch>
   </Router>
);


export default App;
