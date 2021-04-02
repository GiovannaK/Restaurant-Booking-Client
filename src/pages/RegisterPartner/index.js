/* eslint-disable no-unused-vars */
import {
  Box, Button, Card, CardContent, Grid, Hidden, TextField, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import partnerImage from '../../images/partner.svg';
import useStyles from './styles';

export const RegisterPartner = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar />
      <Box>
        <Grid container className={classes.gridContainer}>
          <Grid item align="center" xs={12} sm={2} md={2} lg={6} xl={6}>
            <Hidden mdDown>
              <img
                src={partnerImage}
                alt="restaurante"
                style={{ width: '100%', height: '88vh' }}
              />
            </Hidden>
          </Grid>
          <Grid item align="center" xs={12} sm={8} md={8} lg={6} xl={6}>
            <Card style={{ height: '88vh', overflow: 'auto' }} variant="outlined">
              <CardContent>
                <Typography variant="h4" className={classes.typography}>
                  Registre-se
                </Typography>
                <Typography variant="h6" className={classes.typography}>
                  Antes de cadastrar seu restaurante, precisamos que crie uma
                  conta para que possamos vincular seu restaurante e
                  entrar em contato.
                </Typography>
                <form>
                  <TextField
                    id="outlined-firstName-input"
                    label="Nome"
                    type="text"
                    placeholder="Seu nome"
                    variant="outlined"
                    style={{ width: '100%' }}
                    InputLabelProps={{
                      shrink: true,
                      className: classes.inputLabel,
                    }}
                  />
                  <Toolbar />
                  <TextField
                    id="outlined-lastName-input"
                    label="Sobrenome"
                    type="text"
                    placeholder="Seu sobrenome"
                    variant="outlined"
                    style={{ width: '100%' }}
                    InputLabelProps={{
                      shrink: true,
                      className: classes.inputLabel,
                    }}
                  />
                  <Toolbar />
                  <TextField
                    id="outlined-phone-input"
                    label="Número de celular"
                    type="number"
                    placeholder="exemplo 11999000000"
                    variant="outlined"
                    style={{ width: '100%' }}
                    InputLabelProps={{
                      shrink: true,
                      className: classes.inputLabel,
                    }}
                  />
                  <Toolbar />
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
                    Registre-se
                  </Button>
                  <div className={classes.links}>
                    <Typography variant="h6">
                      <Link to="/login" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="primary">
                          Tem uma conta?
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
