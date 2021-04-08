/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardActionArea,
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
import { toast } from 'react-toastify';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useProfile from '../../context/ProfileContext/hooks/useProfile';
import { ProfileContext } from '../../context/ProfileContext/profileContext';
import { api } from '../../services/api';
import useStyles from './styles';
import { Loading } from '../../components/Loading';

export const UserRestaurantDetail = ({ match }) => {
  const classes = useStyles();
  const {
    fetchRestaurantDetail, userRestaurant, userRestaurants, loading,
  } = useProfile(ProfileContext);
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantCnpj, setRestaurantCnpj] = useState('');
  const [mobilePhone, setMobilePhone] = useState(0);
  const [phone, setPhone] = useState('');
  const [capacity, setCapacity] = useState(0);
  const [address, setAddress] = useState('');
  const [businessDayInitialH, setBusinnesDayInitialH] = useState(0);
  const [businessDayInitialM, setBusinnesDayInitialM] = useState(0);
  const [businessDayFinalH, setBusinessDayFinalH] = useState(0);
  const [businessDayFinalM, setBusinessDayFinalM] = useState(0);
  const [weekendInitialH, setWeekendInitialH] = useState(0);
  const [weekendInitalM, setWeekendInitialM] = useState(0);
  const [weekendFinalH, setWeekendFinalH] = useState(0);
  const [weekendFinalM, setWeekendFinalM] = useState(0);

  const { id } = match.params;

  useEffect(() => {
    const getCurrentRestaurantInfo = async () => {
      fetchRestaurantDetail(id);
      setRestaurantName(userRestaurant.companyName);
      setRestaurantCnpj(userRestaurant.cnpj);
      setMobilePhone(userRestaurant.mobilePhone);
      setPhone(userRestaurant.phone);
      setCapacity(userRestaurant.capacity);
      setAddress(userRestaurant.address);
    };
    getCurrentRestaurantInfo();
  }, [userRestaurants]);

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
                    <form>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                          <TextField
                            id="outlined-firstName-input"
                            label="Nome do Restaurante"
                            type="text"
                            placeholder="Nome do restaurante"
                            value={restaurantName}
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
                            label="Endereço"
                            type="text"
                            placeholder="Ex: Rua aaaaa, 6748, cidade, estado"
                            value={address}
                            style={{ width: '100%' }}
                            InputLabelProps={{
                              shrink: true,
                              className: classes.inputLabel,
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Toolbar />
                      <Accordion variant="outlined">
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="h6" className={classes.typography}>
                            Editar Horários
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                              <Typography variant="h6" color="primary">
                                DIAS ÚTEIS
                              </Typography>
                              <Toolbar />
                              <Grid container spacing={2}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                  <TextField
                                    id="outlined-firstName-input"
                                    label="Hora Inicial"
                                    type="number"
                                    min="0"
                                    max="23"
                                    placeholder="0 - 23"
                                    InputLabelProps={{
                                      shrink: true,
                                      className: classes.inputLabel,
                                    }}
                                  />
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                  <TextField
                                    id="outlined-firstName-input"
                                    label="Minutos"
                                    type="number"
                                    min="0"
                                    max="59"
                                    placeholder="0 - 59"
                                    InputLabelProps={{
                                      shrink: true,
                                      className: classes.inputLabel,
                                    }}
                                  />
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                  <TextField
                                    id="outlined-firstName-input"
                                    label="Hora Final"
                                    type="number"
                                    min="0"
                                    max="23"
                                    placeholder="0 - 23"
                                    InputLabelProps={{
                                      shrink: true,
                                      className: classes.inputLabel,
                                    }}
                                  />
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                  <TextField
                                    id="outlined-firstName-input"
                                    label="Minutos"
                                    type="number"
                                    min="0"
                                    max="59"
                                    placeholder="0 - 59"
                                    InputLabelProps={{
                                      shrink: true,
                                      className: classes.inputLabel,
                                    }}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                              <Typography variant="h6" color="primary">
                                FIM DE SEMANA
                              </Typography>
                              <Toolbar />
                              <Grid container spacing={2}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                  <TextField
                                    id="outlined-firstName-input"
                                    label="Hora Inicial"
                                    type="number"
                                    min="0"
                                    max="23"
                                    placeholder="0 - 23"
                                    InputLabelProps={{
                                      shrink: true,
                                      className: classes.inputLabel,
                                    }}
                                  />
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                  <TextField
                                    id="outlined-firstName-input"
                                    label="Minutos"
                                    type="number"
                                    min="0"
                                    max="59"
                                    placeholder="0 - 59"
                                    InputLabelProps={{
                                      shrink: true,
                                      className: classes.inputLabel,
                                    }}
                                  />
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                  <TextField
                                    id="outlined-firstName-input"
                                    label="Hora Final"
                                    type="number"
                                    min="0"
                                    max="23"
                                    placeholder="0 - 23"
                                    InputLabelProps={{
                                      shrink: true,
                                      className: classes.inputLabel,
                                    }}
                                  />
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                  <TextField
                                    id="outlined-firstName-input"
                                    label="Minutos"
                                    type="number"
                                    min="0"
                                    max="59"
                                    placeholder="0 - 59"
                                    InputLabelProps={{
                                      shrink: true,
                                      className: classes.inputLabel,
                                    }}
                                  />
                                </Grid>
                              </Grid>
                              <Toolbar />
                            </Grid>
                          </Grid>
                        </AccordionDetails>
                      </Accordion>
                      <Toolbar />
                      <Button variant="contained" color="primary" style={{ width: '100%' }}>
                        Atualizar
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
