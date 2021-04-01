import {
  Card,
  CardContent,
  Modal,
  Toolbar,
} from '@material-ui/core';
import React from 'react';
import { TableHours } from '../TableHours';
import useStyles from './styles';

export const ModalComponent = ({
  openModal, handleClose, restaurant,
}) => {
  const classes = useStyles();

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      className={classes.modal}
    >
      <Card className={classes.modalCard}>
        <CardContent align="center">
          <Toolbar />
          <TableHours restaurant={restaurant} />
        </CardContent>
      </Card>
    </Modal>
  );
};
