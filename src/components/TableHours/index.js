import {
  Table, TableBody, TableCell, TableContainer, TableRow,
} from '@material-ui/core';
import React from 'react';

export const TableHours = ({ restaurant }) => (
  <TableContainer style={{ overflow: 'auto' }}>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Segunda</TableCell>
          <TableCell>Terça</TableCell>
          <TableCell>Quarta</TableCell>
          <TableCell>Quinta</TableCell>
          <TableCell>Sexta</TableCell>
          <TableCell>Sábado</TableCell>
          <TableCell>Domingo</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            {restaurant.monday.startHours}
            :
            {restaurant.monday.startMinutes}
          </TableCell>
          <TableCell>
            {restaurant.tuesday.startHours}
            :
            {restaurant.tuesday.startMinutes}
          </TableCell>
          <TableCell>
            {restaurant.wednesday.startHours}
            :
            {restaurant.wednesday.startMinutes}
          </TableCell>
          <TableCell>
            {restaurant.thursday.startHours}
            :
            {restaurant.thursday.startMinutes}
          </TableCell>
          <TableCell>
            {restaurant.friday.startHours}
            :
            {restaurant.friday.startMinutes}
          </TableCell>
          <TableCell>
            {restaurant.saturday.startHours}
            :
            {restaurant.saturday.startMinutes}
          </TableCell>
          <TableCell>
            {restaurant.sunday.startHours}
            :
            {restaurant.sunday.startMinutes}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            {restaurant.monday.endHours}
            :
            {restaurant.monday.endMinutes}
          </TableCell>
          <TableCell>
            {restaurant.tuesday.endHours}
            :
            {restaurant.tuesday.endMinutes}

          </TableCell>
          <TableCell>
            {restaurant.wednesday.endHours}
            :
            {restaurant.wednesday.endMinutes}

          </TableCell>
          <TableCell>
            {restaurant.thursday.endHours}
            :
            {restaurant.thursday.endMinutes}

          </TableCell>
          <TableCell>
            {restaurant.friday.endHours}
            :
            {restaurant.friday.endMinutes}

          </TableCell>
          <TableCell>
            {restaurant.saturday.endHours}
            :
            {restaurant.saturday.endMinutes}

          </TableCell>
          <TableCell>
            {restaurant.sunday.endHours}
            :
            {restaurant.sunday.endMinutes}

          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
