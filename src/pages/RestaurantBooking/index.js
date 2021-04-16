/* eslint-disable no-unused-vars */
import {
  Box, Button, Card, CardActions, CardContent, Divider, Grid, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export const RestaurantBookings = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar />
      <Box className={classes.box}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  color="primary"
                >
                  <strong>User 1 </strong>
                  está solicitando
                  uma reserva em
                  {' '}
                  <strong>Restaurante</strong>
                </Typography>
                <Divider className={classes.divider} />
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography variant="h6" align="center">
                      Mesa para 2
                    </Typography>
                    <Divider />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography variant="h6" align="center">
                      Data: 20/04/2021
                    </Typography>
                    <Divider />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography variant="h6" align="center">
                      Data especial: Nenhuma
                    </Typography>
                    <Divider />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography variant="h6" align="center">
                      Horário: 20:00
                    </Typography>
                    <Divider />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Typography variant="h6" align="center">
                      Observações:
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
        </Grid>
      </Box>
    </>
  );
};
