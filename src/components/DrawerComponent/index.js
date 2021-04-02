/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Button,
  Divider,
  List, ListItem, ListItemText, SwipeableDrawer, Toolbar,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
          <Divider />
          <ListItem>
            <Button color="primary" onClick={handleLogout} variant="outlined">
              <ListItemText spacing={4} classes={{ primary: classes.listItemText }}>
                Sair
              </ListItemText>
            </Button>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  );
};
