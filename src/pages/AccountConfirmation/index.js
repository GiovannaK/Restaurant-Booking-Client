import {
  Box, Button, Card, CardContent, Grid, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';
import { toast } from 'react-toastify';
import history from '../../routes/history';
import { api } from '../../services/api';
import useStyles from './styles';

export const AccountConfirmation = ({ match }) => {
  const classes = useStyles();
  const { confirmationToken } = match.params;

  const handleAccountConfirmation = async () => {
    try {
      await api.post(`/session/account_confirmation/${confirmationToken}`);
      toast.info('Sua conta foi verificada com sucesso.');
      history.push('/login');
    } catch (error) {
      toast.error('Não foi possível verificar sua conta.');
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
                  onClick={handleAccountConfirmation}
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
