/* eslint-disable no-unused-vars */
import {
  Box, Button, Card, CardContent, Grid, Hidden, TextField, Toolbar, Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail, isMobilePhone } from 'validator';
import partnerImage from '../../images/partner.svg';
import { api } from '../../services/api';
import useStyles from './styles';

export const RegisterPartner = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    let formErrors = false;

    if (firstName.length < 3 || firstName.length > 255) {
      formErrors = true;
      toast.error('Primeiro nome precisa ter entre 3 e 50 caracteres');
    }

    if (lastName.length < 3 || lastName.length > 255) {
      formErrors = true;
      toast.error('Último nome precisa ter entre 3 e 50 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (!isMobilePhone(String(phone), 'pt-BR')) {
      formErrors = true;
      toast.error('Número de celular inválido, verifique se o código de área foi digitado ');
    }

    if (password.length < 8 || password.length > 255) {
      formErrors = true;
      toast.error('Senha deve ter pelo menos 8 caracteres');
    }

    if (formErrors) return;
    try {
      const { data } = await api.post('/session/register_partners',
        {
          firstName, lastName, email, password, phone,
        }, config);
      toast.info(`Enviamos um e-mail de ativação para ${email}`);
    } catch (error) {
      toast.error('Já existe uma conta associada a este e-mail');
    }
  };

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
                <form onSubmit={handleSubmit}>
                  <TextField
                    id="outlined-firstName-input"
                    label="Nome"
                    type="text"
                    placeholder="Seu nome"
                    variant="outlined"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
