/* eslint-disable no-unused-vars */
import {
  AppBar, Tab, Tabs, Toolbar,
} from '@material-ui/core';
import { TabPanel } from '@material-ui/lab';
import React, { useState } from 'react';
import useProfile from '../../context/ProfileContext/hooks/useProfile';
import { ProfileContext } from '../../context/ProfileContext/profileContext';
import { UserBookings } from '../UserBookings';
import { UserProfile } from '../UserProfile';
import useStyles from './styles';

export const Dashboard = () => {
  const classes = useStyles();
  const { user } = useProfile(ProfileContext);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleSelectedTab = (e, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Toolbar />
      <AppBar position="static">
        <Tabs
          variant="scrollable"
          value={selectedTab}
          scrollButtons="auto"
          textColor="secondary"
          onChange={handleSelectedTab}
        >
          <Tab label="Meus dados" />
          <Tab label="Minhas reservas" />
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <UserProfile />}
      {selectedTab === 1 && <UserBookings />}
    </>
  );
};
