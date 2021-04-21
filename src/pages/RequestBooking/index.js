/* eslint-disable no-useless-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MomentUtils from '@date-io/moment';
import { toast } from 'react-toastify';
import useStyles from './styles';
import useBooking from '../../context/BookingContext/hooks/useBooking';
import { BookingProvider } from '../../context/BookingContext/bookingContext';
import 'moment/locale/pt-br';
import history from '../../routes/history';

export const RequestBooking = ({ match }) => {
  const classes = useStyles();
  const { bookingSpecialDate, requestBooking } = useBooking(BookingProvider);
  const { id } = match.params;
  const [hours, setHours] = useState('');
  const [date, setDate] = useState('');
  const [specialDate, setSpecialDate] = useState('');
  const [table, setTable] = useState('');
  const [extras, setExtras] = useState('');

  const getSpecialDates = async () => {
    const specialDates = await JSON.parse(localStorage.getItem('specialDates'));
    setSpecialDate(specialDates[0]._id);
  };

  useEffect(() => {
    getSpecialDates();
  }, []);

  const handleSpecialDate = (e) => {
    setSpecialDate(e.target.value);
  };

  const handleHour = (time) => {
    setHours(time.format());
  };

  const handleDate = (bookingDate) => {
    setDate(bookingDate.format());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (!hours.length) {
      formErrors = true;
      toast.error('Horas não pode ser nulo');
    }
    if (!date.length) {
      formErrors = true;
      toast.error('Data não pode ser nula');
    }
    if (table < 1) {
      formErrors = true;
      toast.error('Você precisa fazer uma reserva para pelo menos uma pessoa');
    }

    if (formErrors) return;

    requestBooking(id, hours, date, specialDate, table, extras);

    toast.info('Solicitação de reserva enviada, confira seu e-mail');
    history.push('/user_bookings');
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
                  variant="h4"
                  align="center"
                  className={classes.typography}
                >
                  Solicitar reserva
                </Typography>
                <Toolbar />
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <TextField
                        id="outlined-firstName-input"
                        label="Quantidade de pessoas"
                        type="number"
                        value={table}
                        onChange={(e) => setTable(e.target.value)}
                        placeholder="Mesa para quantos?"
                        style={{ width: '100%' }}
                        InputLabelProps={{
                          shrink: true,
                          className: classes.inputLabel,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                      <InputLabel
                        id="demo-simple-select-autowidth-label"
                        className={classes.inputLabel}
                      >
                        Data especial (Opcional)
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        value={specialDate}
                        onChange={handleSpecialDate}
                        autoWidth
                        style={{ width: '100%' }}
                      >
                        {bookingSpecialDate.map((item) => (
                          <MenuItem
                            key={item._id}
                            value={item._id}
                          >
                            {item.specialDate}

                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                    <MuiPickersUtilsProvider locale="pt-br" utils={MomentUtils}>
                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <KeyboardTimePicker
                          margin="normal"
                          ampm={false}
                          id="time-picker"
                          label="Hora"
                          variant="outlined"
                          value={hours}
                          onChange={handleHour}
                          error={false}
                          keyboardIcon={<AccessTimeIcon />}
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
                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <KeyboardDatePicker
                          disableToolbar
                          variant="inline"
                          format="DD/MM/YYYY"
                          margin="normal"
                          id="date-picker-inline"
                          label="Date picker inline"
                          value={date}
                          error={false}
                          style={{ width: '100%' }}
                          onChange={handleDate}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                      </Grid>
                    </MuiPickersUtilsProvider>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <TextField
                        id="outlined-firstName-input"
                        label="Observações (Opcional)"
                        type="text"
                        value={extras}
                        onChange={(e) => setExtras(e.target.value)}
                        placeholder="Deixe uma observação"
                        style={{ width: '100%' }}
                        InputLabelProps={{
                          shrink: true,
                          className: classes.inputLabel,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Toolbar />
                  <Button type="submit" variant="contained" color="primary" style={{ width: '100%' }}>
                    <Typography variant="h6">
                      Fazer reserva
                    </Typography>
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
