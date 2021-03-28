import { Box, Grid, Toolbar } from '@material-ui/core';
import React from 'react';
import { CardComponent } from '../CardComponent';

export const GridComponent = () => (
  <>
    <Toolbar />
    <Box>
      <Grid container spacing={2}>
        <Grid item align="center" xs={12} sm={6} md={6} lg={4} xl={3}>
          <CardComponent />
        </Grid>
        <Grid item align="center" xs={12} sm={6} md={6} lg={4} xl={3}>
          <CardComponent />
        </Grid>
        <Grid item align="center" xs={12} sm={6} md={6} lg={4} xl={3}>
          <CardComponent />
        </Grid>
        <Grid item align="center" xs={12} sm={6} md={6} lg={4} xl={3}>
          <CardComponent />
        </Grid>
      </Grid>
    </Box>
  </>
);
