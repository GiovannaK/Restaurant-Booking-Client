/* eslint-disable no-unused-vars */
import {
  AppBar, Box, Button, Fab, Tab, Tabs, Toolbar, Tooltip, Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import useProfile from '../../context/ProfileContext/hooks/useProfile';
import { ProfileContext } from '../../context/ProfileContext/profileContext';
import { UserProfile } from '../UserProfile';
import useStyles from './styles';

export const Dashboard = () => {
  const classes = useStyles();
  const { user } = useProfile(ProfileContext);

  return (
    <>
      <Toolbar />
      <UserProfile />
      {!user.isPartner ? (
        <Link to="/user_bookings" style={{ textDecoration: 'none' }}>
          <Tooltip title={<Typography variant="h6">Reservas</Typography>}>
            <Fab color="primary" aria-label="add" className={classes.fab}>
              <MenuBookIcon />
            </Fab>
          </Tooltip>
        </Link>

      ) : (

        <Link to="/user_restaurants" style={{ textDecoration: 'none' }}>
          <Tooltip title={<Typography variant="h6">Restaurantes</Typography>}>
            <Fab color="primary" aria-label="add" className={classes.fab}>
              <RestaurantIcon />
            </Fab>
          </Tooltip>
        </Link>
      )}
    </>
  );
};
