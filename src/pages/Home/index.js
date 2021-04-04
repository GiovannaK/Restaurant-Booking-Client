/* eslint-disable max-len */
/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import {
  AppBar, Box, Grid, Tab, Tabs, Toolbar,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CardComponent } from '../../components/CardComponent';
import { api } from '../../services/api';

export const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchAllRestaurants = async () => {
        try {
          const response = await api.get('/');
          setRestaurants(response.data.restaurants);
        } catch (error) {
          console.log(error);
        }
      };
      fetchAllRestaurants();
    } catch (error) {
      toast.error('Server error');
    }
  }, []);

  useEffect(() => {
    try {
      const fetchCategories = async () => {
        const response = await api.get('/restaurant_categories/');
        setCategory(response.data.restaurantCategories);
      };

      fetchCategories();
    } catch (error) {
      toast.error('Cannot show categories');
    }
  }, []);

  const handleSelectedTab = (e, newValue) => {
    setSelectedTab(newValue);
  };

  const filterRestaurants = (tab) => {
    const filteredRestaurants = restaurants.filter((item) => item.restaurantCategory.name === tab);
    setFilter(filteredRestaurants);
  };

  return (
    <>
      <Toolbar variant="regular" />
      <AppBar position="static" color="primary">
        <Tabs
          variant="scrollable"
          value={selectedTab}
          scrollButtons="auto"
          textColor="secondary"
          onChange={handleSelectedTab}
        >
          {category.map((cat) => (<Tab key={cat._id} onClick={() => filterRestaurants(cat.name)} label={cat.name} />))}

        </Tabs>
      </AppBar>
      <Toolbar />
      <Box>
        <Grid container spacing={2}>
          {filter.map((restaurant) => (
            <Grid item align="center" xs={12} sm={6} md={6} lg={4} xl={3} key={restaurant._id}>
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
