/* eslint-disable no-unused-vars */
import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import noBookings from '../../images/noBookings.png';

export const NoBookings = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <Grid container justify="center">
          <Grid item align="center" xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography variant="h3">
              Você ainda não solicitou nenhuma reserva.
            </Typography>
            <img src={noBookings} style={{ width: '100%' }} alt="página não encontrada" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
