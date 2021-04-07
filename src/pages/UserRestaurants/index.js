/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import {
  Box, Card, CardContent, Fab, Grid, Toolbar, Tooltip, Typography,
} from '@material-ui/core';
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Loading } from '../../components/Loading';
import { NoUserRestaurants } from '../../components/NoUserRestaurants';
import { UserRestaurantsCards } from '../../components/UserRestaurantsCards';
import useProfile from '../../context/ProfileContext/hooks/useProfile';
import { ProfileContext } from '../../context/ProfileContext/profileContext';
import useStyles from './styles';

export const UserRestaurants = () => {
  const classes = useStyles();
  const { userRestaurants, loading } = useProfile(ProfileContext);
  return (
    <>
      <Toolbar />
      {loading ? (<Loading />) : (

        userRestaurants.length ? (
          <Box className={classes.box}>
            <Typography align="center" variant="h4" className={classes.typography}>
              Meus restaurantes
            </Typography>
            <Toolbar />
            <Grid container spacing={2}>
              {userRestaurants.map((restaurant) => (

                <Grid item align="center" xs={12} sm={6} md={6} lg={4} xl={4} key={restaurant._id}>
                  <UserRestaurantsCards key={restaurant._id} restaurant={restaurant} />
                </Grid>
              ))}
            </Grid>
            <Tooltip title={<Typography variant="h6">Adicionar restaurante</Typography>}>
              <Fab color="primary" aria-label="add" className={classes.fab}>
                <AddIcon />
              </Fab>
            </Tooltip>
          </Box>
        ) : (
          <NoUserRestaurants />
        )
      )}
    </>
  );
};
