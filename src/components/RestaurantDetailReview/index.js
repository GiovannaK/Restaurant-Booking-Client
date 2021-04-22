/* eslint-disable no-underscore-dangle */
import {
  Card, CardActions, CardContent, Divider, Grid, Toolbar, Typography,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import React from 'react';
import moment from 'moment';
import { NoReview } from '../NoReview';
import useStyles from './styles';

export const RestaurantDetailReview = ({ review }) => {
  const classes = useStyles();
  console.log(review);
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Card variant="outlined">
          <CardContent>
            <Typography align="center" variant="h4" className={classes.titleTypography}>
              Avaliações
            </Typography>
            <Toolbar />
            {!review.length ? (
              <NoReview />
            ) : (
              review.map((item) => (
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
                    <Typography variant="h5">
                      {item.review.comment}
                    </Typography>
                    <Divider className={classes.divider} />
                    <Typography variant="h6">
                      {moment(item.review.createdAt).format('DD/MM/YYYY')}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            )}

          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
