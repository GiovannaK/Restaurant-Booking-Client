/* eslint-disable no-unused-vars */
import {
  Box, Button, Card, CardContent, Grid, TextField, Toolbar, Typography,
} from '@material-ui/core';
import { isEmail } from 'validator';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useStyles from './styles';
import { api } from '../../services/api';

export const ForgotPassword = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      setEmail('');
      toast.info('E-mail inválido');
    }

    if (formErrors) return;

    try {
      const { data } = await api.post(
        '/session/forgot_password',
        { email },
        config,
      );
      toast.info(`Um e-mail foi enviado para ${email}`);
    } catch (error) {
      toast.error('Falha ao enviar e-mail');
    }
  };
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
                <form onSubmit={handleSubmit}>
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
