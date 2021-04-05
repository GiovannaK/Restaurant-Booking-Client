/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Button,
  Divider,
  List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Toolbar, Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import { AuthContext } from '../../context/AuthContext/authContext';
import useStyles from './styles';

export const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  const classes = useStyles();
  const { authenticated, handleLogout } = useContext(AuthContext);

  return (
    <>
      <SwipeableDrawer
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer}
      >
        <Toolbar />
        <List>
          {authenticated ? (
            <>
              <Divider />
              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon><PersonIcon /></ListItemIcon>
                  <ListItemText>
                    <Typography variant="h6" className={classes.typography}>
                      Perfil
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Divider />
              <Link to="/" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon><RestaurantIcon /></ListItemIcon>
                  <ListItemText>
                    <Typography variant="h6" className={classes.typography}>
                      restaurantes
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Divider />
              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon><NotificationsIcon /></ListItemIcon>
                  <ListItemText>
                    <Typography variant="h6" className={classes.typography}>
                      Notificações de reservas
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
              <Divider />
              <Button
                color="primary"
                onClick={handleLogout}
                style={{ bottom: 0, position: 'fixed', width: 260 }}
                startIcon={<DirectionsWalkIcon />}
              >
                <ListItemText spacing={4} classes={{ primary: classes.listItemText }}>
                  Sair
                </ListItemText>
              </Button>
            </>
          ) : (
            <>
              <ListItem>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <Button color="primary" variant="outlined">
                    <ListItemText spacing={4} classes={{ primary: classes.listItemText }}>
                      Entrar na minha conta
                    </ListItemText>
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/register_as_partner" style={{ textDecoration: 'none' }}>
                  <Button color="primary" variant="outlined">
                    <ListItemText spacing={4} classes={{ primary: classes.listItemText }}>
                      Cadastrar meu restaurante
                    </ListItemText>
                  </Button>
                </Link>
              </ListItem>
            </>
          )}

        </List>
      </SwipeableDrawer>
    </>
  );
};
