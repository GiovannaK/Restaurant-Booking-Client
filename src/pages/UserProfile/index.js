/* eslint-disable no-unused-vars */
import {
  Box, Button, Card, CardContent, Grid, TextField, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

export const UserProfile = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar />
      <Box>
        <Grid justify="center" container>
          <Grid item xs={12} sm={12} md={8} lg={6} xl={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography align="center" variant="h4" className={classes.typography}>
                  Meus Dados
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
                    Atualizar dados
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
