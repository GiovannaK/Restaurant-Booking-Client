/* eslint-disable no-unused-vars */
import {
  Box, Button, Card, CardContent, Grid, TextField, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export const ForgotPassword = () => {
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
                  Esqueceu a Senha?
                </Typography>
                <Typography variant="h6" className={classes.typography}>
                  Você receberá instruções para alterar sua senha através
                  do e-mail digitado abaixo.
                </Typography>
                <Toolbar />
                <form>
                  <TextField
                    id="outlined-email-input"
                    label="E-mail"
                    type="email"
                    placeholder="Seu e-mail"
                    autoComplete="current-email"
                    variant="outlined"
                    style={{ width: '100%' }}
                    InputLabelProps={{
                      shrink: true,
                      className: classes.inputLabel,
                    }}
                  />
                  <Toolbar />
                  <Button
                    color="primary"
                    size="large"
                    variant="contained"
                    style={{ width: '100%' }}
                    type="submit"
                  >
                    Enviar
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
