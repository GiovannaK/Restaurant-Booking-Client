/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
import {
  Box, Button, Card, CardContent, Grid, Hidden, TextField, Toolbar, Typography,
} from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import useStyles from './styles';
import loginImage from '../../images/login.jpg';
import { AuthContext } from '../../context/AuthContext/authContext';

export const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      setEmail('');
      toast.info('E-mail inválido');
    }

    if (password.length < 8 || password.length > 255) {
      formErrors = true;
      setPassword('');
      toast.info('A senha deve ter entre 8 e 255 caracteres');
    }

    if (formErrors) return;

    handleLogin(email, password);
  };

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
            <Card style={{ height: '88vh', overflow: 'auto' }} variant="outlined">
              <CardContent>
                <Typography
                  variant="h3"
                  className={classes.typography}
                >
                  Login
                </Typography>
                <Toolbar />
                <form onSubmit={handleSubmit}>
                  <TextField
                    id="outlined-email-input"
                    label="E-mail"
                    type="email"
                    placeholder="Seu e-mail"
                    autoComplete="current-email"
                    variant="outlined"
                    style={{ width: '100%' }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    className={classes.button}
                    type="submit"
                  >
                    Login
                  </Button>
                  <div className={classes.links}>
                    <Typography variant="h6">
                      <Link to="/forgot_password" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="primary">
                          Esqueceu a senha?
                        </Button>
                      </Link>
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
