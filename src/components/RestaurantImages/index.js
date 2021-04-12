/* eslint-disable prefer-destructuring */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import React, { useState, useMemo } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import { toast } from 'react-toastify';
import useStyles from './styles';
import useRestaurant from '../../context/RestaurantContext/hooks/useRestaurant';
import { RestaurantContext } from '../../context/RestaurantContext/restaurantContext';
import { api } from '../../services/api';

export const RestaurantImages = ({ images, setImages, restaurantId }) => {
  const { deleteRestaurantImages } = useRestaurant(RestaurantContext);
  const [selectedImages, setSelectedImages] = useState({});
  const [preview, setPreview] = useState({});
  const classes = useStyles();

  const handleDeleteRestaurantImages = async (id) => {
    try {
      await deleteRestaurantImages(id);
      setImages(images.filter((image) => image._id !== id));
    } catch (error) {
      toast.error('Cannot delete image');
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    setPreview(URL.createObjectURL(files[0]));
    setSelectedImages(files[0]);
  };

  const handleUpload = async () => {
    const token = await localStorage.getItem('authToken');
    const config = {
      header: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    };
    const restaurantImage = selectedImages;
    const data = new FormData();
    data.append('file', restaurantImage);

    try {
      const response = await api.post(`/images/upload/${restaurantId}`, data, config);
      toast.info('Imagem adicionada com sucesso');
    } catch (error) {
      toast.info('Erro ao enviar imagens, verifique se você adicionou uma por vez');
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
            Adicionar Imagens (Adicione uma por vez)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card
            variant="outlined"
            className={classes.card}
          >
            <CardContent
              onDragOver={dragOver}
              onDragEnter={dragEnter}
              onDragLeave={dragLeave}
              onDrop={fileDrop}
            >
              <Typography align="center" variant="h6">
                Arraste a imagem aqui
              </Typography>
            </CardContent>
          </Card>
        </AccordionDetails>
        <AccordionDetails>
          <Button
            onClick={handleUpload}
            color="primary"
            variant="contained"
            style={{ width: '100%' }}
          >
            Adicionar
          </Button>
        </AccordionDetails>
        <AccordionDetails>
          <Card variant="outlined" style={{ width: '100%' }}>
            <CardContent>
              <CardActionArea>
                <CardMedia
                  image={preview}
                  className={classes.media}
                />
              </CardActionArea>
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
