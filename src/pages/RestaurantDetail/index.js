/* eslint-disable no-unused-vars */
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
import Rating from '@material-ui/lab/Rating';
import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import GroupIcon from '@material-ui/icons/Group';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import NetworkWifiIcon from '@material-ui/icons/NetworkWifi';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import useStyles from './styles';
import { ModalComponent } from '../../components/Modal';
import { RestaurantDetailReview } from '../../components/RestaurantDetailReview';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export const RestaurantDetail = () => {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Toolbar />
      <Box className={classes.box}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <ImageGallery items={images} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Card variant="outlined" style={{ height: '100%', overflow: 'auto' }}>
              <CardContent align="center">
                <Typography variant="h4" className={classes.titleTypography}>
                  Restaurant 1
                </Typography>
                <CardActions className={classes.cardActions}>
                  <Tooltip title="capacidade">
                    <Badge badgeContent={400} color="primary">
                      <GroupIcon color="primary" />
                    </Badge>
                  </Tooltip>
                  <DirectionsCarIcon color="primary" />
                  <NetworkWifiIcon color="primary" />
                </CardActions>
                <Divider />
                <CardActions className={classes.contact}>
                  <div>
                    <PhoneIcon />
                    <Typography variant="h6">
                      4530345678
                    </Typography>
                  </div>
                  <div>
                    <RoomIcon />
                    <Typography variant="h6">
                      Avenida aaaaa, 456, Cascavel PR
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
                />
                <Button
                  className={classes.button}
                  color="primary"
                  variant="contained"
                >
                  Reservar mesa
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <RestaurantDetailReview />
      </Box>
    </>
  );
};
