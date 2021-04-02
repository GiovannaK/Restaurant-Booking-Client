import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';

export const Loading = () => (
  <>
    <Grid container alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
      <CircularProgress />
    </Grid>
  </>
);
