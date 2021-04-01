/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { Box, Grid, Toolbar } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CardComponent } from '../../components/CardComponent';
import { TabsComponent } from '../../components/TabsComponent';
import HomeContext from '../../context/HomeContext';

export const Home = () => {
  const { homeRestaurants, getAllRestaurants } = useContext(HomeContext);

  useEffect(() => {
    if (!homeRestaurants) {
      getAllRestaurants();
    }
  }, [homeRestaurants]);

  return (
    <>
      <TabsComponent />

      <Toolbar />
      <Box>
        <Grid container spacing={2}>
          {homeRestaurants.map((restaurant) => (
            <Grid item align="center" xs={12} sm={6} md={6} lg={4} xl={3}>
              <Link to={`/details/${restaurant._id}`} style={{ textDecoration: 'none' }}>
                <CardComponent key={restaurant._id} restaurant={restaurant} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
