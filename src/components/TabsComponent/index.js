/* eslint-disable no-unused-vars */
import {
  AppBar, Tab, Tabs, Toolbar,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import useStyles from './styles';

export const TabsComponent = () => {
  const classes = useStyles();
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/restaurant_categories/');
        setCategory(response.data.restaurantCategories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleSelectedTab = (e, newValue) => {
    setSelectedTab(newValue);
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
          <Tab label="Todas" />
          {category.map((cat) => (<Tab key={cat.id} label={cat.name} />))}

        </Tabs>
      </AppBar>
    </>
  );
};
