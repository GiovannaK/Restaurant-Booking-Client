/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import {
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import GroupIcon from '@material-ui/icons/Group';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
import WifiOffIcon from '@material-ui/icons/WifiOff';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import NoParking from '../../images/no_parking.svg';
import useStyles from './styles';
import { ModalComponent } from '../../components/Modal';
import { RestaurantDetailReview } from '../../components/RestaurantDetailReview';
import { api } from '../../services/api';
import { Loading } from '../../components/Loading';
import noPic from '../../images/noPic.png';
import useAuth from '../../context/AuthContext/hooks/useAuth';
import { AuthContext } from '../../context/AuthContext/authContext';
import useProfile from '../../context/ProfileContext/hooks/useProfile';
import { ProfileContext } from '../../context/ProfileContext/profileContext';

export const RestaurantDetail = ({ match }) => {
  const classes = useStyles();
  const [restaurant, setRestaurant] = useState({});
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [review, setReview] = useState([]);
  const { id } = match.params;
  const [openModal, setOpenModal] = useState(false);
  const { authenticated } = useAuth(AuthContext);
  const { user } = useProfile(ProfileContext);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const dummyImage = [
    {
      original: `${noPic}`,
      thumbnail: `${noPic}`,
    },
  ];

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await api.get(`/${id}`);
        setRestaurant(response.data.restaurant);
        setLoading(false);
      } catch (error) {
        toast.error('Cannot show restaurant information');
      }
    };
    fetchRestaurant();

    const fetchRestaurantReviews = async () => {
      try {
        const response = await api.get(`/reviews/${id}`);
        setReview(response.data.restaurantBookingReviews);
        setLoading(false);
      } catch (error) {
        toast.error('Cannot show restaurant reviews');
      }
    };

    fetchRestaurantReviews();
  }, []);

  useEffect(() => {
    try {
      const fetchImages = async () => {
        if (restaurant.images && restaurant.images.length > 0) {
          let imagesSlider = [];
          restaurant.images && restaurant.images.map((item) => {
            imagesSlider.push({
              original: item.url,
              thumbnail: item.url,
            });
          });
          setImages(imagesSlider);
          setLoading(false);
        }
      };

      fetchImages();
    } catch (error) {
      toast.error('Cannot show restaurant images');
    }
  }, [restaurant]);

  return (
    <>
      {loading ? (<Loading />) : (
        <>
          <Toolbar />
          <Box className={classes.box}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                {!images.length ? (
                  <ImageGallery items={dummyImage} />
                ) : (
                  <ImageGallery items={images} />
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                <Card variant="outlined" style={{ height: '100%', overflow: 'auto' }}>
                  <CardContent align="center">
                    <Typography variant="h4" className={classes.titleTypography}>
                      {restaurant.companyName}
                    </Typography>
                    <CardActions className={classes.cardActions}>
                      <Tooltip title="capacidade">
                        <Badge badgeContent={restaurant.capacity} color="primary">
                          <GroupIcon color="primary" />
                        </Badge>
                      </Tooltip>
                      {restaurant.isParking
                        ? <DirectionsCarIcon color="primary" /> : (
                          <img
                            src={NoParking}
                            alt="no parking"
                            className={classes.icon}
                            color="primary"
                          />
                        )}
                      {restaurant.isWifi ? <NetworkWifiIcon color="primary" />
                        : <WifiOffIcon color="primary" />}
                    </CardActions>
                    <Divider />
                    <CardActions className={classes.contact}>
                      <div>
                        <PhoneIcon />
                        <Typography variant="h6">
                          {restaurant.phone}
                        </Typography>
                      </div>
                      <div>
                        <RoomIcon />
                        <Typography variant="h6">
                          {restaurant.address}
                        </Typography>
                      </div>
                    </CardActions>
                    <Button
                      color="primary"
                      variant="outlined"
                      onClick={handleOpen}
                      className={classes.button}
                    >
                      Ver horário de funcionamento
                    </Button>
                    <ModalComponent
                      openModal={openModal}
                      handleClose={handleClose}
                      restaurant={restaurant}
                    />
                    {(authenticated && !user.isPartner) ? (
                      <Link to={`/request_booking/${restaurant._id}`} style={{ textDecoration: 'none' }}>
                        <Button
                          className={classes.button}
                          color="primary"
                          variant="contained"
                        >
                          Reservar mesa
                        </Button>
                      </Link>

                    ) : (
                      <Link to="/register" style={{ textDecoration: 'none' }}>
                        <Button
                          className={classes.button}
                          color="primary"
                          variant="contained"
                        >
                          Crie uma conta para realizar uma reserva
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <RestaurantDetailReview review={review} />
          </Box>
        </>
      )}
    </>
  );
};
