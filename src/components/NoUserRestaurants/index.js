import {
  Box, Button, Grid, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import NoUserRestaurantsImage from '../../images/noUserRestaurants.png';

export const NoUserRestaurants = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <Grid container justify="center">
          <Grid item align="center" xs={12} sm={12} md={6} lg={6} xl={6}>
            <Typography variant="h3">
              Você ainda não cadastrou nenhum restaurante
            </Typography>
            <img src={NoUserRestaurantsImage} style={{ width: '100%' }} alt="página não encontrada" />
            <Toolbar />
            <Link to="/register_restaurant" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary">
                Cadastrar restaurante
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
