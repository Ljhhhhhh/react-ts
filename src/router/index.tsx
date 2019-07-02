import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout';

import Home from '../pages/home'
import About from '../pages/about'
import Login from '../pages/login'
import NoMatch from '../pages/noMatch'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/404" component={NoMatch} />
        <BasicLayout>
          <Route exact={true} path="/home" component={Home} />
          <Route exact={true} path="/about" component={About} />
          <Redirect to="/404" />
        </BasicLayout>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;