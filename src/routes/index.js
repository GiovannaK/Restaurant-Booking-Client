/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './privateRoute';

import { Home } from '../pages/Home';
import { RestaurantDetail } from '../pages/RestaurantDetail';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/details" component={RestaurantDetail} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </Switch>
);
