/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { Box, Grid, Toolbar } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CardComponent } from '../../components/CardComponent';
import { Loading } from '../../components/Loading';
import useRestaurant from '../../context/RestaurantContext/hooks/useRestaurant';
import { RestaurantContext } from '../../context/RestaurantContext/restaurantContext';

export const AllRestaurants = () => {
  const { restaurants, loading } = useRestaurant(RestaurantContext);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Toolbar />
          <Box>
            <Grid container spacing={2}>
              {restaurants.map((restaurant) => (
                <Grid item align="center" xs={12} sm={6} md={6} lg={4} xl={3} key={restaurant._id}>
                  <Link to={`/details/${restaurant._id}`} style={{ textDecoration: 'none' }}>
                    <CardComponent key={restaurant._id} restaurant={restaurant} />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};
