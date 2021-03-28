/* eslint-disable no-unused-vars */
import {
  Card, CardActionArea, CardActions, CardContent, CardMedia, Typography,
} from '@material-ui/core';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
import React from 'react';
import useStyles from './styles';
import restaurantImage from '../../images/restaurant.jpg';

export const CardComponent = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={restaurantImage}
        />
        <CardContent>
          <Typography variant="h5" className={classes.typography}>
            Restaurant 1
          </Typography>
          <Typography variant="h6">Aberto</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <DirectionsCarIcon />
        <NetworkWifiIcon />
      </CardActions>
    </Card>
  );
};
