import {
  Table, TableBody, TableCell, TableContainer, TableRow, Typography,
} from '@material-ui/core';
import React from 'react';

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
              {restaurant.businessDayStartHours}
            </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h6">
              {restaurant.weekendStartHours}
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography variant="h6">
              {restaurant.businessDayFinalHours}
            </Typography>
          </TableCell>
          <TableCell>
            <Typography variant="h6">
              {restaurant.weekendFinalHours}
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
