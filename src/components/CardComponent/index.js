/* eslint-disable no-unused-vars */
import {
  Card, CardActionArea, CardActions, CardContent, CardMedia, Typography,
} from '@material-ui/core';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
import WifiOffIcon from '@material-ui/icons/WifiOff';
import React from 'react';
import useStyles from './styles';
import restaurantImage from '../../images/restaurant.jpg';
import NoParking from '../../images/no_parking.svg';

export const CardComponent = ({ restaurant }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={restaurant.images[0].url}
        />
        <CardContent>
          <Typography variant="h5" className={classes.typography}>
            {restaurant.companyName}
          </Typography>
          <Typography variant="h6">{restaurant.isOpen ? 'Aberto' : 'Fechado'}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {restaurant.isWifi ? <NetworkWifiIcon /> : <WifiOffIcon />}
        {restaurant.isParking ? <DirectionsCarIcon /> : (
          <img
            src={NoParking}
            alt="no parking"
            className={classes.icon}
          />
        )}

      </CardActions>
    </Card>
  );
};
