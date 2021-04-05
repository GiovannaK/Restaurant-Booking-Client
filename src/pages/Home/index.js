/* eslint-disable max-len */
/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import {
  AppBar, Box, Grid, Tab, Tabs, Toolbar,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CannotFound } from '../../components/CannotFound';
import { CardComponent } from '../../components/CardComponent';
import { Loading } from '../../components/Loading';
import useRestaurant from '../../context/RestaurantContext/hooks/useRestaurant';
import { RestaurantContext } from '../../context/RestaurantContext/restaurantContext';

export const Home = () => {
  const { restaurants, category, loading } = useRestaurant(RestaurantContext);
  const [filter, setFilter] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleSelectedTab = (e, newValue) => {
    setSelectedTab(newValue);
  };

  const filterRestaurants = (tab) => {
    const filteredRestaurants = restaurants.filter((item) => item.restaurantCategory.name === tab);
    setFilter(filteredRestaurants);
  };

  return (
    <>
      {loading ? (<Loading />) : (
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
          {filter.length
            ? (
              <>
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
            )
            : <CannotFound />}
        </>
      )}
    </>
  );
};
