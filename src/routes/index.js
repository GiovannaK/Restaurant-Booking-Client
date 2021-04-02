/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './privateRoute';

import { Home } from '../pages/Home';
import { RestaurantDetail } from '../pages/RestaurantDetail';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { ForgotPassword } from '../pages/ForgotPassword';
import { ResetPassword } from '../pages/ResetPassword';
import { AccountConfirmation } from '../pages/AccountConfirmation';
import { Page404 } from '../pages/Page404';
import { RegisterPartner } from '../pages/RegisterPartner';
import { Dashboard } from '../pages/Dashboard';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/details/:id" component={RestaurantDetail} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/register_as_partner" component={RegisterPartner} />
    <Route exact path="/account_confirmation" component={AccountConfirmation} />
    <Route exact path="/forgot_password" component={ForgotPassword} />
    <Route exact path="/reset_password" component={ResetPassword} />
    <PrivateRoute exact path="/dashboard" component={Dashboard} />
    <Route path="*" component={Page404} />
  </Switch>
);
