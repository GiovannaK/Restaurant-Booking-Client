/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { cnpj } from 'cpf-cnpj-validator';
import { ProfileContext } from '../../context/ProfileContext/profileContext';
import useStyles from './styles';
import { Loading } from '../../components/Loading';
import useRestaurant from '../../context/RestaurantContext/hooks/useRestaurant';
import { RestaurantContext } from '../../context/RestaurantContext/restaurantContext';
import { RestaurantImages } from '../../components/RestaurantImages';
import useProfile from '../../context/ProfileContext/hooks/useProfile';

export const UserRestaurantDetail = ({ match }) => {
  const classes = useStyles();
  const {
    fetchRestaurantDetail, userRestaurant, userRestaurants, loading,
  } = useProfile(ProfileContext);
  const { updateRestaurantInfo } = useRestaurant(RestaurantContext);
  const [companyName, setCompanyName] = useState('');
  const [restaurantCnpj, setRestaurantCnpj] = useState('');
  const [phone, setPhone] = useState('');
  const [capacity, setCapacity] = useState(0);
  const [address, setAddress] = useState('');
  const [isParking, setIsParking] = useState(false);
  const [isWifi, setIsWifi] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [businessDayStartHours, setBusinessDayStartHours] = useState('');
  const [businessDayFinalHours, setBusinessDayFinalHours] = useState('');
  const [weekendStartHours, setWeekendStartHours] = useState('');
  const [weekendFinalHours, setWeekendFinalHours] = useState('');
  const [images, setImages] = useState([]);

  const { id } = match.params;

  const getCurrentRestaurantInfo = async () => {
    const getUserRestaurant = await JSON.parse(localStorage.getItem('userRestaurantDetail'));
    fetchRestaurantDetail(id);
    setCompanyName(getUserRestaurant.companyName);
    setRestaurantCnpj(getUserRestaurant.cnpj);
    setPhone(getUserRestaurant.phone);
    setCapacity(getUserRestaurant.capacity);
    setAddress(getUserRestaurant.address);
    setIsWifi(getUserRestaurant.isWifi);
    setIsParking(getUserRestaurant.isParking);
    setIsOpen(getUserRestaurant.isOpen);
    setBusinessDayStartHours(getUserRestaurant.businessDayStartHours);
    setBusinessDayFinalHours(getUserRestaurant.businessDayFinalHours);
    setWeekendStartHours(getUserRestaurant.weekendStartHours);
    setWeekendFinalHours(getUserRestaurant.weekendFinalHours);
    setImages(getUserRestaurant.images);
  };
  useEffect(() => {
    getCurrentRestaurantInfo();
    console.log('hoy');
  }, [userRestaurant._id]);

  const handleCheckWifi = (e) => {
    setIsWifi(e.target.checked);
  };

  const handleCheckParking = (e) => {
    setIsParking(e.target.checked);
  };

  const handleIsOpen = (e) => {
    setIsOpen(e.target.checked);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;
    if (companyName.length < 3 || companyName.length > 255) {
      formErrors = true;
      toast.error('Nome do restauarnte deve ter entre 3 e 255 caracteres');
    }
    if (!cnpj.isValid(restaurantCnpj)) {
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

    if (formErrors) return;

    updateRestaurantInfo(id, companyName, restaurantCnpj, phone,
      capacity, address, isWifi, isParking, isOpen, businessDayStartHours,
      businessDayFinalHours, weekendStartHours, weekendFinalHours);
    toast.info('Informações atualizadas com sucesso');
  };

  return (
    <>
      {loading ? (<Loading />) : (
        <>
          <Toolbar />
          <Box className={classes.box}>
            <Grid container justify="center">
              <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                <Card variant="outlined" className={classes.card}>
                  <CardContent>
                    <Typography
                      variant="h4"
                      align="center"
                      className={classes.typography}
                    >
                      Atualizar Restaurante
                    </Typography>
                    <Toolbar />
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                          <TextField
                            id="outlined-firstName-input"
                            label="CNPJ"
                            type="text"
                            placeholder="CNPJ"
                            value={restaurantCnpj}
                            onChange={(e) => setRestaurantCnpj(e.target.value)}
                            style={{ width: '100%' }}
                            InputLabelProps={{
                              shrink: true,
                              className: classes.inputLabel,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                          <TextField
                            id="outlined-firstName-input"
                            label="Telefone (Inclua o código de área)"
                            type="text"
                            placeholder="Telefone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={{ width: '100%' }}
                            InputLabelProps={{
                              shrink: true,
                              className: classes.inputLabel,
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                          <TextField
                            id="outlined-firstName-input"
                            label="Capacidade"
                            type="number"
                            placeholder="Quantos clientes cabem?"
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                            style={{ width: '100%' }}
                            InputLabelProps={{
                              shrink: true,
                              className: classes.inputLabel,
                            }}
                          />
                        </Grid>
                        <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
                          <FormControlLabel
                            value="top"
                            control={<Checkbox color="primary" className={classes.checkbox} />}
                            label="Wifi"
                            checked={isWifi}
                            onChange={handleCheckWifi}
                          />
                        </Grid>
                        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
                          <FormControlLabel
                            value="top"
                            control={<Checkbox color="primary" className={classes.checkbox} />}
                            checked={isParking}
                            onChange={handleCheckParking}
                            label="Estacionamento"
                          />
                        </Grid>
                        <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
                          <FormControlLabel
                            value="top"
                            control={<Checkbox color="primary" className={classes.checkbox} />}
                            checked={isOpen}
                            onChange={handleIsOpen}
                            label="Aberto"
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                          <TextField
                            id="outlined-firstName-input"
                            label="Endereço"
                            type="text"
                            placeholder="Ex: Rua aaaaa, 6748, cidade, estado"
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
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
                      </Grid>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        Atualizar
                      </Button>
                    </form>
                    <RestaurantImages images={images} setImages={setImages} />
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
