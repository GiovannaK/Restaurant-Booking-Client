/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { Box, Grid, Toolbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CardComponent } from '../../components/CardComponent';
import { Loading } from '../../components/Loading';
import useRestaurant from '../../context/RestaurantContext/hooks/useRestaurant';
import { RestaurantContext } from '../../context/RestaurantContext/restaurantContext';
import { api } from '../../services/api';
import { SearchBar } from './SearchBar';

export const AllRestaurants = () => {
  const { restaurants, loading, setRestaurants } = useRestaurant(RestaurantContext);
  const [query, setQuery] = useState('');
  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await api.get(`/search?q=${query}`);
        setRestaurants(response.data.resultSearch);
      } catch (error) {
        toast.info('Não foi possível pesquisar');
      }
    };

    fetchSearch();
  }, [query]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Toolbar />
          <SearchBar getQuery={(q) => setQuery(q)} />
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
