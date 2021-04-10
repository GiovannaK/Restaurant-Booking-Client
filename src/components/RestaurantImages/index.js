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
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles';
import restaurantImage from '../../images/restaurant.jpg';

export const RestaurantImages = () => {
  const classes = useStyles();

  return (
    <>
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
            <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
              <Card variant="outlined" className={classes.zoom}>
                <CardContent>
                  <CloseIcon color="primary" className={classes.icon} />
                  <CardActionArea>
                    <CardMedia
                      image={restaurantImage}
                      className={classes.media}
                    />
                  </CardActionArea>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={3} xl={3}>
              <Card variant="outlined" className={classes.zoom}>
                <CardContent>
                  <CloseIcon color="primary" className={classes.icon} />
                  <CardActionArea>
                    <CardMedia
                      image={restaurantImage}
                      className={classes.media}
                    />
                  </CardActionArea>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
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
