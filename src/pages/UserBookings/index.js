/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import {
  Box, Card, CardContent, Divider, Grid, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import useProfile from '../../context/ProfileContext/hooks/useProfile';
import { ProfileContext } from '../../context/ProfileContext/profileContext';
import useStyles from './styles';
import { Loading } from '../../components/Loading';
import { NoBookings } from '../../components/NoBookings';

export const UserBookings = () => {
  const classes = useStyles();
  const { userBookings, loading } = useProfile(ProfileContext);
  return (
    <>
      {loading ? (<Loading />)
        : (
          <>
            {!userBookings.length ? (
              <NoBookings />
            ) : (
              <>
                <Toolbar />
                <Box className={classes.box}>
                  <Grid container justify="center" spacing={2}>
                    {userBookings.map((booking) => (
                      <Grid item xs={12} sm={12} md={8} lg={8} xl={8} key={booking._id}>
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
                                  {moment(booking.hours).format('HH:mm')}
                                </Typography>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Typography variant="h6" className={classes.typography}>
                                  Data especial: {booking.specialDate.specialDate}
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
                                <Typography
                                  variant="h6"
                                  color="primary"
                                  className={classes.typographyTitle}
                                >
                                  {(() => {
                                    if (booking.approved === true) {
                                      return <CheckIcon color="primary" />;
                                    }
                                    if (booking.approved === false) {
                                      return <ClearIcon />;
                                    }
                                    return 'Em Andamento';
                                  })()}
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
            )}
          </>
        )}
    </>
  );
};
