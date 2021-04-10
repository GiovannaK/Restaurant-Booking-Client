/* eslint-disable no-unused-vars */
import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import reviewImage from '../../images/review.png';

export const NoReview = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <Grid container justify="center">
          <Grid item align="center" xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography variant="h3">
              Este restaurante ainda não possui nenhuma avaliação
            </Typography>
            <img src={reviewImage} style={{ width: '100%' }} alt="página não encontrada" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
