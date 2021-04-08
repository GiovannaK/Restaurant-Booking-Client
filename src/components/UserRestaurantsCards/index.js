/* eslint-disable no-unused-vars */
import {
  Card, CardActionArea, CardActions, CardContent, CardMedia, Typography,
} from '@material-ui/core';
import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useStyles from './styles';

export const UserRestaurantsCards = ({ restaurant }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={restaurant.images[0].url}
        />
        <CardContent>
          <Typography variant="h5" color="primary">
            {restaurant.companyName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography color="primary">
          <LocationOnIcon />
          {restaurant.address}
        </Typography>
      </CardActions>
    </Card>
  );
};