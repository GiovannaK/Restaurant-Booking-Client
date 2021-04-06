/* eslint-disable no-unused-vars */
import { Toolbar } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export const UserRestaurants = () => {
  const classes = useStyles();
  return (
    <div>
      <Toolbar />
      <Toolbar />
      <Toolbar />
      <Toolbar />
      <h1>Restaurante</h1>
    </div>
  );
};
