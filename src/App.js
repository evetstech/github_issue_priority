import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApiKey from './features/apiKey/ApiKey';
import Repositories from './features/repositories/Repositories';
import Issues from './features/issues/Issues';

const App = () => (
  <Router>
    <Route exact path='/' component={ApiKey} />
    <Route exact path='/repos' component={Repositories} />
    <Route exact path='/issues' component={Issues} />
  </Router>
);

export default App;