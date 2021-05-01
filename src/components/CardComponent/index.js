/* eslint-disable no-unused-vars */
import {
  Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Typography,
} from '@material-ui/core';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
import WifiOffIcon from '@material-ui/icons/WifiOff';
import React from 'react';
import useStyles from './styles';
import NoParking from '../../images/no_parking.svg';
import noPic from '../../images/noPic.png';

export const CardComponent = ({ restaurant }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        {!restaurant.images.length ? (
          <CardMedia
            className={classes.media}
            image={noPic}
          />
        ) : (
          <CardMedia
            className={classes.media}
            image={restaurant.images[0].url}
          />
        )}
        <CardContent>
          <Typography variant="h5" className={classes.typography}>
            {restaurant.companyName}
          </Typography>
          <Typography variant="h6">
            {restaurant.isOpen
              ? <Typography variant="h6" className={classes.isOpen}>Aberto</Typography>
              : <Typography variant="h6" className={classes.isClosed}>Fechado</Typography>}
          </Typography>
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
      <Divider />
      <CardActions>
        <Typography variant="h6" color="primary">
          {restaurant.address}
        </Typography>
      </CardActions>
    </Card>
  );
};
