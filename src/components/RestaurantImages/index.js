/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import { toast } from 'react-toastify';
import useStyles from './styles';
import useRestaurant from '../../context/RestaurantContext/hooks/useRestaurant';
import { RestaurantContext } from '../../context/RestaurantContext/restaurantContext';

export const RestaurantImages = ({ images, setImages }) => {
  const { deleteRestaurantImages } = useRestaurant(RestaurantContext);
  const classes = useStyles();

  const handleDeleteRestaurantImages = async (id) => {
    try {
      await deleteRestaurantImages(id);
      setImages(images.filter((image) => image._id !== id));
    } catch (error) {
      toast.error('Cannot delete image');
    }
  };

  return (
    <>
      {!images.length ? (
        <></>
      ) : (
        <Accordion style={{ width: '100%' }} variant="outlined">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              variant="h5"
              align="center"
              className={classes.typography}
            >
              Imagens Adicionadas
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              {images.map((image) => (

                <Grid item xs={6} sm={6} md={4} lg={3} xl={3} key={image._id}>
                  <Card variant="outlined" className={classes.zoom}>
                    <CardContent>
                      <CloseIcon
                        color="primary"
                        className={classes.icon}
                        onClick={() => handleDeleteRestaurantImages(image._id)}
                      />
                      <CardActionArea>
                        <CardMedia
                          image={image.url}
                          className={classes.media}
                        />
                      </CardActionArea>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      )}
      <Accordion style={{ width: '100%' }} variant="outlined">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography
            variant="h5"
            align="center"
            className={classes.typography}
          >
            Adicionar Imagens
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography align="center" variant="h6">
                Arraste as imagens aqui
              </Typography>
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
