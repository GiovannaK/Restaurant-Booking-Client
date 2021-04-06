/* eslint-disable no-unused-vars */
import {
  Box, Button, Card, CardContent, Grid, TextField, Toolbar, Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import history from '../../routes/history';
import { api } from '../../services/api';
import useStyles from './styles';

export const ResetPassword = ({ match }) => {
  const classes = useStyles();
  const { resetToken } = match.params;
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    let formErrors = false;

    if (password.length < 8 || password.length > 255) {
      formErrors = true;
      setPassword('');
      toast.info('A senha deve ter entre 8 e 255 caracteres');
    }

    if (confirmPassword !== password) {
      formErrors = true;
      setPassword('');
      setConfirmPassword('');
      toast.info('Senhas não conferem');
    }

    if (formErrors) return;

    try {
      const { data } = await api.put(
        `/session/reset_password/${resetToken}`,
        { password },
        config,
      );
      toast.info('Senha alterada com sucesso');
      history.push('/login');
    } catch (error) {
      console.log(error);
      toast.error('Ocorreu um erro ao alterar a senha');
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
                  Altere sua senha
                </Typography>
                <Toolbar />
                <form onSubmit={handleSubmit}>
                  <TextField
                    id="outlined-password-input"
                    label="Nova Senha"
                    type="password"
                    placeholder="Nova senha..."
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
                    id="outlined-password2-input"
                    label="Confirme a nova Senha"
                    type="password"
                    placeholder="Confirme a nova senha..."
                    autoComplete="current-password"
                    variant="outlined"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                    Alterar
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
