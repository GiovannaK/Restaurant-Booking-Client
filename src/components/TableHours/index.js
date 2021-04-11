import {
  Table, TableBody, TableCell, TableContainer, TableRow, Typography,
} from '@material-ui/core';
import React from 'react';
import moment from 'moment';

export const TableHours = ({ restaurant }) => (
  <TableContainer style={{ overflow: 'auto' }}>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <Typography variant="h6" color="primary">
              Dias úteis
            </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h6" color="primary">
              Fim de Semana
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="h6">
              {moment(restaurant.businessDayStartHours).format('HH:mm')}
            </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h6">
              {moment(restaurant.weekendStartHours).format('HH:mm')}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="h6">
              {moment(restaurant.businessDayFinalHours).format('HH:mm')}
            </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h6">
              {moment(restaurant.weekendFinalHours).format('HH:mm')}
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
