/* eslint-disable no-unused-vars */
import {
  AppBar,
  Badge,
  Button,
  Hidden,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu, MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeckIcon from '@material-ui/icons/Deck';
import { DrawerComponent } from '../DrawerComponent';
import useStyles from './styles';
import { AuthContext } from '../../context/AuthContext/authContext';
import { ProfileContext } from '../../context/ProfileContext/profileContext';
import useProfile from '../../context/ProfileContext/hooks/useProfile';

export const Header = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { authenticated, handleLogout } = useContext(AuthContext);
  const { user } = useProfile(ProfileContext);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

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
                <Button
                  color="primary"
                  onClick={handleOpen}
                  className={classes.menu}
                >
                  <ListItemText>
                    <Typography variant="h6" color="primary">
                      Navegar
                    </Typography>
                  </ListItemText>
                  <ListItemIcon>
                    <ExpandMoreIcon color="primary" />
                  </ListItemIcon>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <PersonIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="h6" color="primary">
                          Perfil
                        </Typography>
                      </ListItemText>
                    </MenuItem>
                  </Link>
                  {!user.isPartner ? (
                    <Link to="/user_bookings" style={{ textDecoration: 'none' }}>
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <MenuBookIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText>
                          <Typography variant="h6" color="primary">
                            Minhas Reservas
                          </Typography>
                        </ListItemText>
                      </MenuItem>
                    </Link>

                  ) : (
                    <Link to="/user_restaurants" style={{ textDecoration: 'none' }}>
                      <ListItem button>
                        <ListItemIcon><DeckIcon color="primary" /></ListItemIcon>
                        <ListItemText>
                          <Typography variant="h6" color="primary">
                            Meus Restaurantes
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </Link>

                  )}
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <RestaurantIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="h6" color="primary">
                          Restaurantes
                        </Typography>
                      </ListItemText>
                    </MenuItem>
                  </Link>
                </Menu>
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
