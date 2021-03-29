/* eslint-disable no-unused-vars */
import {
  Box, Button, Card, CardContent, Grid, Hidden, TextField, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import loginImage from '../../images/login.jpg';

export const Login = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar />
      <Box>
        <Grid container className={classes.gridContainer}>
          <Grid item align="center" xs={12} sm={2} md={2} lg={6} xl={6}>
            <Hidden mdDown>
              <img
                src={loginImage}
                style={{ width: '100%', height: '88vh' }}
                alt="restaurante"
              />
            </Hidden>
          </Grid>
          <Grid item align="center" xs={12} sm={8} md={8} lg={6} xl={6}>
            <Card style={{ height: '88vh' }} variant="outlined">
              <CardContent>
                <Typography
                  variant="h3"
                  className={classes.typography}
                >
                  Login
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
                  <TextField
                    id="outlined-password-input"
                    label="Senha"
                    type="password"
                    placeholder="Sua senha..."
                    autoComplete="current-password"
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
                    Login
                  </Button>
                  <Toolbar />
                  <div className={classes.links}>
                    <Typography variant="h6">
                      <Button variant="outlined" color="primary">
                        Esqueceu a senha?
                      </Button>
                    </Typography>
                    <Typography variant="h6">
                      <Link to="/register" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="primary">
                          Não tem uma conta?
                        </Button>
                      </Link>
                    </Typography>
                  </div>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
