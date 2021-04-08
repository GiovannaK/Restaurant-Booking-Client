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

export const UserRestaurantDetail = ({ match }) => {
  const classes = useStyles();
  const { fetchRestaurantDetail, userRestaurant, userRestaurants } = useProfile(ProfileContext);
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantCnpj, setRestaurantCnpj] = useState('');
  const [mobilePhone, setMobilePhone] = useState(0);
  const [phone, setPhone] = useState('');
  const [capacity, setCapacity] = useState(0);
  const [category, setCategory] = useState([]);
  const [address, setAddress] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const { id } = match.params;

  useEffect(() => {
    const getCurrentRestaurantInfo = async () => {
      fetchRestaurantDetail(id);
      setRestaurantName(userRestaurant.companyName);
      setRestaurantCnpj(userRestaurant.cnpj);
      setMobilePhone(userRestaurant.mobilePhone);
      setPhone(userRestaurant.phone);
      setCapacity(userRestaurant.capacity);
      setSelectedCategory(userRestaurant.restaurantCategory);
      setAddress(userRestaurant.address);
    };
    getCurrentRestaurantInfo();
  }, [userRestaurants]);

  const fetchCategories = async () => {
    try {
      const response = await api.get('/restaurant_categories/');
      setCategory(response.data.restaurantCategories);
    } catch (error) {
      toast.error('Cannot show categories');
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSelect = async (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <Toolbar />
      <Box className={classes.box}>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
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
                        label="Cel Opcional(Inclua o código de área)"
                        type="number"
                        placeholder="Celular"
                        value={mobilePhone}
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
                      <InputLabel id="demo-simple-select-label" className={classes.inputLabel}>
                        Categoria
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedCategory}
                        displayEmpty
                        style={{ width: '100%' }}
                        onChange={handleSelect}
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
                      hjfhg
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
  );
};
