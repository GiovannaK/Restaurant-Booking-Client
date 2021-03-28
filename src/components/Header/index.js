/* eslint-disable no-unused-vars */
import {
  AppBar, Button, Hidden, IconButton, Toolbar, Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import React, { useState } from 'react';
import { DrawerComponent } from '../DrawerComponent';
import useStyles from './styles';

export const Header = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon color="primary" />
            </IconButton>
          </Hidden>
          <Typography variant="h4" className={classes.title}>
            GetYourTable
            <RestaurantMenuIcon className={classes.icon} />
          </Typography>
          <Hidden smDown>
            <Button color="primary" variant="outlined" size="large">
              <RestaurantIcon className={classes.icon} />
              Cadastrar meu restaurante
            </Button>
            <Button color="primary" variant="outlined" size="large" className={classes.button}>
              Entrar
            </Button>
          </Hidden>
        </Toolbar>
      </AppBar>
      <DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </div>
  );
};
