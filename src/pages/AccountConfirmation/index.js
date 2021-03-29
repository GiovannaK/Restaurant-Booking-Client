import {
  Box, Button, Card, CardContent, Grid, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export const AccountConfirmation = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar />
      <Box className={classes.box}>
        <Grid container justify="center">
          <Grid align="center" xs={12} sm={12} md={8} lg={6} xl={6} item>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h4" className={classes.typography}>
                  Ative sua conta
                </Typography>
                <Typography variant="h6" className={classes.typography}>
                  Clique no botão abaixo para ativar sua conta e
                  realizar seu primeiro login
                </Typography>
                <Toolbar />
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  style={{ width: '100%' }}
                  type="submit"
                >
                  Ativar minha conta
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
