/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Button,
  Divider,
  List, ListItem, ListItemText, SwipeableDrawer, Toolbar,
} from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  const classes = useStyles();
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
            <Button color="primary" variant="outlined">
              <ListItemText spacing={4} classes={{ primary: classes.listItemText }}>
                Entrar na minha conta
              </ListItemText>
            </Button>
          </ListItem>
          <ListItem>
            <Button color="primary" variant="outlined">
              <ListItemText spacing={4} classes={{ primary: classes.listItemText }}>
                Cadastrar meu restaurante
              </ListItemText>
            </Button>
          </ListItem>
          <Divider />
        </List>
      </SwipeableDrawer>
    </>
  );
};
