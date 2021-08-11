import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import ClientLayout from './ui/layouts/client';

function MinTableApplication() {
  return (<Fragment>
    <Router>
      <Switch>
        <Route path='/clients' component={ClientLayout} />
        <Redirect to='/clients'/>
      </Switch>
    </Router>
  </Fragment>);
}

export default MinTableApplication;
