/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
import {
  Accordion, AccordionDetails, AccordionSummary, Button, TextField, Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Rating from '@material-ui/lab/Rating';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { BookingProvider } from '../../../context/BookingContext/bookingContext';
import useBooking from '../../../context/BookingContext/hooks/useBooking';
import useStyles from './styles';

export const ReviewBooking = ({ id }) => {
  const classes = useStyles();
  const { createReview } = useBooking(BookingProvider);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(null);

  const handleRating = (e, newValue) => {
    setRating(newValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors;

    if (!rating) {
      formErrors = true;
      toast.error('A classficação não pode ser nula');
    }

    if (formErrors) return;

    createReview(id, comment, rating);
  };

  return (
    <>
      <Accordion variant="outlined">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h6" className={classes.typography}>
            Avaliar Reserva
          </Typography>
        </AccordionSummary>
        <form onSubmit={handleSubmit}>
          <AccordionDetails>
            <Rating
              value={rating}
              onChange={handleRating}
            />
          </AccordionDetails>
          <AccordionDetails>
            <TextField
              id="outlined-multiline-static"
              label="Deixe um comentário"
              multiline
              rows={4}
              style={{ width: '100%' }}
              variant="outlined"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              InputLabelProps={{
                shrink: true,
                className: classes.inputLabel,
              }}
            />
          </AccordionDetails>
          <AccordionDetails>
            <Button
              type="submit"
              color="primary"
              variant="outlined"
              style={{ width: '100%' }}
            >
              Enviar
            </Button>
          </AccordionDetails>
        </form>
      </Accordion>
    </>
  );
};
