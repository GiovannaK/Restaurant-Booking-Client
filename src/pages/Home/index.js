/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { Box, Grid, Toolbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CardComponent } from '../../components/CardComponent';
import { TabsComponent } from '../../components/TabsComponent';
import { api } from '../../services/api';

export const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchAllRestaurants = async () => {
      try {
        const response = await api.get('/');
        setRestaurants(response.data.restaurants);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllRestaurants();
  }, []);

  return (
    <>
      <TabsComponent restaurants={restaurants} />

      <Toolbar />
      <Box>
        <Grid container spacing={2}>
          {restaurants.map((restaurant) => (
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
