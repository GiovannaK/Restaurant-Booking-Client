/* eslint-disable no-unused-vars */
import {
  Box, Card, CardContent, Grid, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import notFoundImage from '../../images/not_found.png';

export const Page404 = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar />
      <Box className={classes.box}>
        <Grid container justify="center">
          <Grid item align="center" xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography variant="h2">
              Página não encontrada
            </Typography>
            <img src={notFoundImage} style={{ width: '100%' }} alt="página não encontrada" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
