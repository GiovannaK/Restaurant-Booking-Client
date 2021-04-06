/* eslint-disable no-unused-vars */
import {
  AppBar, Box, Tab, Tabs, Toolbar,
} from '@material-ui/core';
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
          {!user.isPartner ? (
            <div>
              <Tab label="Minhas reservas" />
              <Tab label="Meus dados" />
            </div>

          ) : (
            <div>
              <Tab label="Restaurantes Cadastrados" />
              <Tab label="Meus dados" />
            </div>
          )}
        </Tabs>
      </AppBar>
      <Box>
        {selectedTab === 0 && <UserBookings />}
      </Box>
      <Box>
        {selectedTab === 1 && <UserProfile />}
      </Box>
      <Box>
        {selectedTab === 2 && 'Restaurantes'}
      </Box>
    </>
  );
};
