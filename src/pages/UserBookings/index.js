/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import {
  Box, Card, CardContent, Divider, Grid, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import useProfile from '../../context/ProfileContext/hooks/useProfile';
import { ProfileContext } from '../../context/ProfileContext/profileContext';
import useStyles from './styles';

export const UserBookings = () => {
  const classes = useStyles();
  const { userBookings } = useProfile(ProfileContext);
  console.log(userBookings);
  return (
    <>
      <Toolbar />
      <Box>
        <Grid container justify="center" spacing={2}>
          {userBookings.map((booking) => (
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    className={`${classes.typographyTitle}`}
                    variant="h6"
                  >
                    {booking._id}
                  </Typography>
                  <Divider />
                  <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Typography variant="h6" className={classes.typography}>
                        Mesa para
                        {' '}
                        {booking.table}
                      </Typography>
                      <Typography variant="h6" className={classes.typography}>
                        Data: {moment.utc(booking.date).format('DD-MM-YYYY')}
                      </Typography>
                      <Typography variant="h6" className={classes.typography}>
                        Hora:
                        {' '}
                        {booking.hours}
                        :
                        {booking.minutes}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Typography variant="h6" className={classes.typography}>
                        Data especial: {booking.specialDate.specialDate
                        ? `${booking.specialDate.specialDate}` : 'Nenhuma'}
                      </Typography>
                      <Typography variant="h6" className={classes.typography}>
                        Observações: {booking.extras
                        ? `${booking.extras}` : 'Nenhuma'}
                      </Typography>
                      <Typography variant="h6" className={classes.typography}>
                        Restaurante:
                        {' '}
                        <Link
                          to={`/details/${booking.restaurant._id}`}
                          style={{ textDecoration: 'none' }}
                        >
                          <strong color="primary">
                            {booking.restaurant.companyName}
                          </strong>
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
