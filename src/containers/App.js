import React from 'react';
import CRUD from 'containers/CRUD';
import Login from 'containers/Login';
import { whenAuthorized } from 'auth';

import { Switch, Route } from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={whenAuthorized(CRUD)} />
    </Switch>
  </div>
);

export default App;
