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
import { UserProfile } from '../pages/UserProfile';
import { UserBookings } from '../pages/UserBookings';
import useProfile from '../context/ProfileContext/hooks/useProfile';
import { ProfileContext } from '../context/ProfileContext/profileContext';
import { UserRestaurants } from '../pages/UserRestaurants';

export const Routes = () => {
  const { user } = useProfile(ProfileContext);
  return (

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/details/:id" component={RestaurantDetail} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/register_as_partner" component={RegisterPartner} />
      <Route exact path="/account_confirmation/:confirmationToken" component={AccountConfirmation} />
      <Route exact path="/forgot_password" component={ForgotPassword} />
      <Route exact path="/reset_password" component={ResetPassword} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      {!user.isPartner ? (
        <PrivateRoute exact path="/user_bookings" component={UserBookings} />

      ) : (
        <PrivateRoute exact path="/user_restaurants" component={UserRestaurants} />

      )}
      <Route path="*" component={Page404} />

    </Switch>
  );
};
