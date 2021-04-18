/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import {
  Box, Button, Card, CardActions, CardContent, Divider, Grid, Toolbar, Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import socketio from 'socket.io-client';
import jwtDecode from 'jwt-decode';
import moment from 'moment';
import { toast } from 'react-toastify';
import useStyles from './styles';
import { api } from '../../services/api';

export const RestaurantBookings = ({ match }) => {
  const classes = useStyles();
  const { id } = match.params;
  const userToken = localStorage.getItem('authToken');
  const decodedToken = jwtDecode(userToken);
  const user = decodedToken.id;
  const [requests, setRequests] = useState([]);

  const connectionOptions = {
    'force new connection': true,
    reconnectionAttempts: 'Infinity',
    timeout: 10000,
    transports: ['websocket'],
    query: { user },
  };
  useEffect(() => {
    const socket = socketio(`${process.env.REACT_APP_BASE_URL}`, connectionOptions);

    socket.on('booking_request', (data) => {
      setRequests([...requests, data]);
    });
  }, []);

  const fetchRestaurantBookings = async () => {
    const config = {
      Authorization: `Bearer ${userToken}`,
    };
    try {
      const response = await api.get(`/restaurant_bookings/${id}`, {}, config);
      setRequests(response.data.restaurantBooking);
    } catch (error) {
      toast.error('Ocorreu um erro ao mostrar as solicitações de reserva');
    }
  };
  useEffect(() => {
    fetchRestaurantBookings();
  }, []);

  return (
    <>
      <Toolbar />
      <Box className={classes.box}>
        <Grid container spacing={2}>
          {requests.map((request) => (

            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={request._id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    variant="h6"
                    align="center"
                    color="primary"
                  >
                    <strong>{request.user.firstName} {request.user.lastName} </strong>
                    está solicitando
                    uma reserva
                    {' '}

                  </Typography>
                  <Divider className={classes.divider} />
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Typography variant="h6" align="center">
                        Mesa para {request.table}
                      </Typography>
                      <Divider />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Typography variant="h6" align="center">
                        Data: {moment.utc(request.date).format('DD/MM/YYYY')}
                      </Typography>
                      <Divider />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Typography variant="h6" align="center">
                        Data especial: {request.specialDate.specialDate}
                      </Typography>
                      <Divider />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Typography variant="h6" align="center">
                        Horário: {moment(request.hours).format('HH:mm')}
                      </Typography>
                      <Divider />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography variant="h6" align="center">
                        Telefone: {request.user.phone}
                      </Typography>
                      <Divider />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography variant="h6" align="center">
                        E-mail: {request.user.email}
                      </Typography>
                      <Divider />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Typography variant="h6" align="center">
                        Observações: {request.extras}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button className={classes.buttonAccept}>
                    Aceitar
                  </Button>
                  <Button className={classes.buttonReject}>
                    Rejeitar
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
