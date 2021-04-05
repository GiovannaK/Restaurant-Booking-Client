/* eslint-disable no-unused-vars */
import {
  Box, Grid, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import notFoundResource from '../../images/notFoundResource.png';

export const CannotFound = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <Grid container justify="center">
          <Grid item align="center" xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography variant="h3">
              Nenhum restaurante foi encontrado para esta categoria!
            </Typography>
            <img src={notFoundResource} style={{ width: '100%' }} alt="página não encontrada" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
