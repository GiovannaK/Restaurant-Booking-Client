/* eslint-disable no-underscore-dangle */
import {
  Card, CardActions, CardContent, Grid, Toolbar, Typography,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import React from 'react';
import useStyles from './styles';

export const RestaurantDetailReview = ({ review }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Card variant="outlined">
          <CardContent>
            <Typography align="center" variant="h5" className={classes.titleTypography}>
              Avaliações
            </Typography>
            <Toolbar />
            {review.map((item) => (
              <Card variant="outlined" key={item.review._id}>
                <CardContent>
                  <CardActions>
                    <Typography
                      varian="h5"
                      className={classes.reviewTypography}
                    >
                      {item.user.firstName}
                    </Typography>
                  </CardActions>
                  <Rating
                    name="read-only"
                    value={item.review.rating}
                    readOnly
                  />
                  <Typography>
                    {item.review.comment}
                  </Typography>
                </CardContent>
              </Card>
            ))}

          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
