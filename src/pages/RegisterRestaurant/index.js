/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField, Toolbar, Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import useStyles from './styles';

export const RegisterRestaurant = () => {
  const classes = useStyles();
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <>
      <Toolbar />
      <Box className={classes.box}>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Card variant="outlined">
              <CardContent>
                <Toolbar />
                <Typography
                  align="center"
                  variant="h4"
                  className={classes.typography}
                >
                  Adicionar Restaurante
                </Typography>
                <Toolbar />
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                      <TextField
                        id="outlined-firstName-input"
                        label="Nome do Restaurante"
                        type="text"
                        placeholder="Nome do restaurante"
                        style={{ width: '100%' }}
                        InputLabelProps={{
                          shrink: true,
                          className: classes.inputLabel,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                      <TextField
                        id="outlined-firstName-input"
                        label="CNPJ"
                        type="text"
                        placeholder="CNPJ"
                        style={{ width: '100%' }}
                        InputLabelProps={{
                          shrink: true,
                          className: classes.inputLabel,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                      <TextField
                        id="outlined-firstName-input"
                        label="Telefone"
                        type="text"
                        placeholder="Inclua o código de área"
                        style={{ width: '100%' }}
                        InputLabelProps={{
                          shrink: true,
                          className: classes.inputLabel,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                      <TextField
                        id="outlined-firstName-input"
                        label="Capacidade"
                        type="number"
                        placeholder="Quantos clientes cabem?"
                        style={{ width: '100%' }}
                        InputLabelProps={{
                          shrink: true,
                          className: classes.inputLabel,
                        }}
                      />
                    </Grid>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <KeyboardTimePicker
                          margin="normal"
                          ampm={false}
                          id="time-picker"
                          label="Dia útil - Horário inicial"
                          value={selectedTime}
                          onChange={handleTimeChange}
                          error={false}
                          KeyboardButtonProps={{
                            'aria-label': 'change time',
                          }}
                          keyboardIcon={<AccessTimeIcon color="primary" />}
                          style={{ width: '100%' }}
                          InputLabelProps={{
                            shrink: true,
                            className: classes.inputLabel,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <KeyboardTimePicker
                          margin="normal"
                          ampm={false}
                          id="time-picker"
                          label="Dia útil - Horário Final"
                          value={selectedTime}
                          onChange={handleTimeChange}
                          error={false}
                          keyboardIcon={<AccessTimeIcon color="primary" />}
                          KeyboardButtonProps={{
                            'aria-label': 'change time',
                          }}
                          style={{ width: '100%' }}
                          InputLabelProps={{
                            shrink: true,
                            className: classes.inputLabel,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <KeyboardTimePicker
                          margin="normal"
                          ampm={false}
                          id="time-picker"
                          label="Fim de semana - Horário inicial"
                          value={selectedTime}
                          error={false}
                          onChange={handleTimeChange}
                          keyboardIcon={<AccessTimeIcon color="primary" />}
                          KeyboardButtonProps={{
                            'aria-label': 'change time',
                          }}
                          style={{ width: '100%' }}
                          InputLabelProps={{
                            shrink: true,
                            className: classes.inputLabel,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <KeyboardTimePicker
                          margin="normal"
                          ampm={false}
                          id="time-picker"
                          label="Fim de semana - Horário Final"
                          value={selectedTime}
                          onChange={handleTimeChange}
                          error={false}
                          keyboardIcon={<AccessTimeIcon color="primary" />}
                          KeyboardButtonProps={{
                            'aria-label': 'change time',
                          }}
                          style={{ width: '100%' }}
                          InputLabelProps={{
                            shrink: true,
                            className: classes.inputLabel,
                          }}
                        />
                      </Grid>
                    </MuiPickersUtilsProvider>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <TextField
                        id="outlined-firstName-input"
                        label="Endereço"
                        type="text"
                        placeholder="Ex: Avenida xxxxx, 1234, cidade, estado"
                        style={{ width: '100%' }}
                        InputLabelProps={{
                          shrink: true,
                          className: classes.inputLabel,
                        }}
                      />
                    </Grid>
                    <Toolbar />
                    <Button
                      type="submit"
                      style={{ width: '100%' }}
                      color="primary"
                      variant="contained"
                    >
                      Adicionar
                    </Button>
                  </Grid>
                  <Toolbar />
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
