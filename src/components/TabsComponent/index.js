/* eslint-disable no-unused-vars */
import {
  AppBar, Tab, Tabs, Toolbar,
} from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles';

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
          <Tab label="One" />
          <Tab label="One" />
          <Tab label="One" />
          <Tab label="One" />
          <Tab label="One" />
          <Tab label="One" />
        </Tabs>
      </AppBar>
    </>
  );
};
