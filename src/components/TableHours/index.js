import {
  Table, TableBody, TableCell, TableContainer, TableRow,
} from '@material-ui/core';
import React from 'react';

export const TableHours = ({ restaurant }) => (
  <TableContainer style={{ overflow: 'auto' }}>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Dias úteis</TableCell>
          <TableCell>Fim de semana</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            {restaurant.businessDay.startHours}
            :
            {restaurant.businessDay.startMinutes}
          </TableCell>
          <TableCell>
            {restaurant.weekend.startHours}
            :
            {restaurant.weekend.startMinutes}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            {restaurant.businessDay.endHours}
            :
            {restaurant.businessDay.endMinutes}
          </TableCell>
          <TableCell>
            {restaurant.weekend.endHours}
            :
            {restaurant.weekend.endMinutes}

          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
