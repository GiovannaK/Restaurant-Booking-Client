/* eslint-disable no-useless-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import {
  Box, Button, Card, CardContent, Grid, TextField, Toolbar, Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isEmail, isMobilePhone } from 'validator';
import { Loading } from '../../components/Loading';
import useProfile from '../../context/ProfileContext/hooks/useProfile';
import { ProfileContext } from '../../context/ProfileContext/profileContext';
import useStyles from './styles';

export const UserProfile = () => {
  const { user, loading, updateUserInfo } = useProfile(ProfileContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    const getUserInformation = async () => {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setPhone(user.phone);
    };
    getUserInformation();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
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

    if (formErrors) return;

    updateUserInfo(firstName, lastName, email, phone);
  };

  return (
    <>
      {loading ? (<Loading />) : (
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
                        Atualizar dados
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};
