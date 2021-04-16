/* eslint-disable no-unused-vars */
import { Toolbar } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export const RestaurantBookings = () => {
  const classes = useStyles();
  return (
    <div>
      <Toolbar />
      <h1>Restaurant booking</h1>
    </div>
  );
};
