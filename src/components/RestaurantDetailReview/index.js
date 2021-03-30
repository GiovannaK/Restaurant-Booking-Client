import {
  Card, CardActions, CardContent, Grid, Toolbar, Typography,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import React from 'react';
import useStyles from './styles';

export const RestaurantDetailReview = () => {
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
            <Card variant="outlined">
              <CardContent>
                <CardActions>
                  <Typography
                    varian="h5"
                    className={classes.reviewTypography}
                  >
                    Giovanna Cunha
                  </Typography>
                </CardActions>
                <Rating
                  value={5}
                />
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Odio, tenetur?
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined">
              <CardContent>
                <CardActions>
                  <Typography
                    varian="h5"
                    className={classes.reviewTypography}
                  >
                    Giovanna Cunha
                  </Typography>
                </CardActions>
                <Rating
                  value={5}
                />
                <Typography>
                  Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Odio, tenetur?
                </Typography>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
