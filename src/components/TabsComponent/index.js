/* eslint-disable no-unused-vars */
import {
  AppBar, Tab, Tabs, Toolbar,
} from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles';

const categories = [
  {
    id: 1,
    name: 'Café',
  },
  {
    id: 2,
    name: 'Cozinha autoral',
  },
  {
    id: 3,
    name: 'Cantina',
  },
  {
    id: 4,
    name: 'Fast Food',
  },
];

export const TabsComponent = () => {
  const classes = useStyles();
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
          scrollButtons="auto"
          textColor="primary"
        >
          {categories.map((category) => (<Tab key={category.id} label={category.name} />))}

        </Tabs>
      </AppBar>
    </>
  );
};
