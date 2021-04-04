import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';

export const Loading = () => (
  <>
    <Grid container justify="center" style={{ minHeight: '100vh' }}>
      <CircularProgress style={{ marginTop: '40vh' }} />
    </Grid>
  </>
);
