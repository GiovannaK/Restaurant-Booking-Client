/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField, Toolbar, Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { toast } from 'react-toastify';
import { cnpj as CNPJ } from 'cpf-cnpj-validator';
import useStyles from './styles';
import useRestaurant from '../../context/RestaurantContext/hooks/useRestaurant';
import { RestaurantContext } from '../../context/RestaurantContext/restaurantContext';

export const RegisterRestaurant = () => {
  const classes = useStyles();
  const {
    category, fetchAdresses, latitude, longitude, apiAddresses,
  } = useRestaurant(RestaurantContext);
  const { createRestaurant } = useRestaurant(RestaurantContext);
  const [companyName, setCompanyName] = useState('');
  const [restaurantCategory, setRestaurantCategory] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [phone, setPhone] = useState('');
  const [capacity, setCapacity] = useState(null);
  const [address, setAddress] = useState('');
  const [isParking, setIsParking] = useState(false);
  const [isWifi, setIsWifi] = useState(false);
  const [businessDayStartHours, setBusinessDayStartHours] = useState('');
  const [businessDayFinalHours, setBusinessDayFinalHours] = useState('');
  const [weekendStartHours, setWeekendStartHours] = useState('');
  const [weekendFinalHours, setWeekendFinalHours] = useState('');

  const getCategories = async () => {
    const categories = await JSON.parse(localStorage.getItem('restaurantCategory'));
    setRestaurantCategory(categories[0]._id);
  };

  useEffect(() => {
    if (address !== '') {
      fetchAdresses(address);
    }
  }, [address]);

  useEffect(() => {
    getCategories();
  }, []);

  const handleCheckWifi = (e) => {
    setIsWifi(e.target.checked);
  };

  const handleCheckParking = (e) => {
    setIsParking(e.target.checked);
  };

  const handleBusinessDayInitial = (time) => {
    setBusinessDayStartHours(time.format());
  };

  const handleBusinessDayFinal = (time) => {
    setBusinessDayFinalHours(time.format());
  };

  const handleWeekendInitial = (time) => {
    setWeekendStartHours(time.format());
  };

  const handleWeekendFinal = (time) => {
    setWeekendFinalHours(time.format());
  };

  const handleCategory = (e) => {
    setRestaurantCategory(e.target.value);
  };

  const handleAddress = (value) => {
    setAddress(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;
    if (companyName.length < 3 || companyName.length > 255) {
      formErrors = true;
      toast.error('Nome do restauarnte deve ter entre 3 e 255 caracteres');
    }
    if (!CNPJ.isValid(cnpj)) {
      formErrors = true;
      toast.error('CNPJ inválido');
    }
    if (phone.length < 10) {
      formErrors = true;
      toast.error('Telefone inválido');
    }
    if (capacity < 1) {
      formErrors = true;
      toast.error('Seu restaurante deve ter capacidade para pelo menos 1 cliente');
    }

    if (!businessDayStartHours.length) {
      formErrors = true;
      toast.error('Dia útil - Horário inicial não pode ser nulo');
    }

    if (!businessDayFinalHours.length) {
      formErrors = true;
      toast.error('Dia útil - Horário Final não pode ser nulo');
    }

    if (!weekendStartHours.length) {
      formErrors = true;
      toast.error('Fim de semana - Horário Inicial não pode ser nulo');
    }

    if (!weekendFinalHours.length) {
      formErrors = true;
      toast.error('Fim de semana - Horário Final não pode ser nulo');
    }
    if (!address.length) {
      formErrors = true;
      toast.error('Endereço não pode ser nulo');
    }

    if (formErrors) return;

    createRestaurant(companyName, cnpj, phone,
      capacity, address, isWifi, isParking, businessDayStartHours,
      businessDayFinalHours, weekendStartHours, weekendFinalHours,
      restaurantCategory, latitude, longitude);

    toast.info('Restaurante criado com sucesso');
  };

  return (
    <>
      <Toolbar />
      <Box className={classes.box}>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                      <TextField
                        id="outlined-firstName-input"
                        label="Nome do Restaurante"
                        type="text"
                        placeholder="Nome do restaurante"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
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
                        value={cnpj}
                        onChange={(e) => setCnpj(e.target.value)}
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
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                        placeholder="Quantos clientes cabem?"
                        style={{ width: '100%' }}
                        InputLabelProps={{
                          shrink: true,
                          className: classes.inputLabel,
                        }}
                      />
                    </Grid>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <KeyboardTimePicker
                          margin="normal"
                          ampm={false}
                          id="time-picker"
                          label="Dia útil - Horário Inicial"
                          value={businessDayStartHours}
                          onChange={handleBusinessDayInitial}
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
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <KeyboardTimePicker
                          margin="normal"
                          ampm={false}
                          id="time-picker"
                          label="Dia útil - Horário Final"
                          value={businessDayFinalHours}
                          onChange={handleBusinessDayFinal}
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
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <KeyboardTimePicker
                          margin="normal"
                          ampm={false}
                          id="time-picker"
                          label="Fim de semana - Horário Inicial"
                          value={weekendStartHours}
                          onChange={handleWeekendInitial}
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
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <KeyboardTimePicker
                          margin="normal"
                          ampm={false}
                          id="time-picker"
                          label="Fim de semana - Horário Final"
                          value={weekendFinalHours}
                          onChange={handleWeekendFinal}
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
                    <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
                      <FormControlLabel
                        value="top"
                        control={<Checkbox color="primary" className={classes.checkbox} />}
                        label="Wifi"
                        checked={isWifi}
                        onChange={handleCheckWifi}
                      />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
                      <FormControlLabel
                        value="top"
                        control={<Checkbox color="primary" className={classes.checkbox} />}
                        checked={isParking}
                        onChange={handleCheckParking}
                        label="Estacionamento"
                      />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
                      <InputLabel
                        id="demo-simple-select-autowidth-label"
                        className={classes.inputLabel}
                      >
                        Categoria
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        value={restaurantCategory}
                        onChange={handleCategory}
                        autoWidth
                        style={{ width: '100%' }}
                      >
                        {category.map((item) => (

                          <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                        ))}
                      </Select>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <TextField
                        id="outlined-firstName-input"
                        label="Endereço"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Ex: Avenida xxxxx, 1234, cidade, estado"
                        style={{ width: '100%' }}
                        InputLabelProps={{
                          shrink: true,
                          className: classes.inputLabel,
                        }}
                      />
                      {apiAddresses.length ? (

                        apiAddresses.map((item, index) => (
                          <>
                            <Typography
                              variant="h6"
                              key={index}
                              onClick={() => handleAddress(item)}
                            >
                              {item}
                            </Typography>
                            <Divider />
                          </>
                        ))
                      ) : (
                        <></>
                      )}
                    </Grid>
                    <input
                      type="number"
                      hidden
                      readOnly
                      value={longitude}
                      name="longitude"
                    />
                    <input
                      type="number"
                      hidden
                      readOnly
                      name="latitude"
                      value={latitude}
                    />
                    <Toolbar />
                    <Button
                      type="submit"
                      className={classes.button}
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
