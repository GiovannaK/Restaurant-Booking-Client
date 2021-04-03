/* eslint-disable no-unused-vars */
import {
  AppBar, Button, Hidden, IconButton, Toolbar, Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { DrawerComponent } from '../DrawerComponent';
import useStyles from './styles';
import { AuthContext } from '../../context/AuthContext/authContext';

export const Header = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const { authenticated, handleLogout } = useContext(AuthContext);

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
            <Link to="/">
              GetYourTable
              <RestaurantMenuIcon className={classes.icon} />
            </Link>
          </Typography>
          <Hidden smDown>
            {!authenticated ? (
              <>
                <Link to="/register_as_partner" style={{ textDecoration: 'none' }}>
                  <Button color="primary" variant="outlined" size="large">
                    <RestaurantIcon className={classes.icon} />
                    Cadastrar meu restaurante
                  </Button>
                </Link>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <Button color="primary" variant="outlined" size="large" className={classes.button}>
                    Entrar
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <NotificationsIcon color="primary" />
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button onClick={handleLogout} color="primary" variant="outlined" size="large" className={classes.button}>
                    Sair
                  </Button>
                </Link>
              </>
            )}
          </Hidden>
        </Toolbar>
      </AppBar>
      <DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </div>
  );
};
