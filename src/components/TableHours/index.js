import {
  Table, TableBody, TableCell, TableContainer, TableRow,
} from '@material-ui/core';
import React from 'react';

export const TableHours = ({ homeRestaurants }) => (
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
            {homeRestaurants.monday.startHours}
            :
            {homeRestaurants.monday.startMinutes}
          </TableCell>
          <TableCell>
            {homeRestaurants.tuesday.startHours}
            :
            {homeRestaurants.tuesday.startMinutes}
          </TableCell>
          <TableCell>
            {homeRestaurants.wednesday.startHours}
            :
            {homeRestaurants.wednesday.startMinutes}
          </TableCell>
          <TableCell>
            {homeRestaurants.thursday.startHours}
            :
            {homeRestaurants.thursday.startMinutes}
          </TableCell>
          <TableCell>
            {homeRestaurants.friday.startHours}
            :
            {homeRestaurants.friday.startMinutes}
          </TableCell>
          <TableCell>
            {homeRestaurants.saturday.startHours}
            :
            {homeRestaurants.saturday.startMinutes}
          </TableCell>
          <TableCell>
            {homeRestaurants.sunday.startHours}
            :
            {homeRestaurants.sunday.startMinutes}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            {homeRestaurants.monday.endHours}
            :
            {homeRestaurants.monday.endMinutes}
          </TableCell>
          <TableCell>
            {homeRestaurants.tuesday.endHours}
            :
            {homeRestaurants.tuesday.endMinutes}

          </TableCell>
          <TableCell>
            {homeRestaurants.wednesday.endHours}
            :
            {homeRestaurants.wednesday.endMinutes}

          </TableCell>
          <TableCell>
            {homeRestaurants.thursday.endHours}
            :
            {homeRestaurants.thursday.endMinutes}

          </TableCell>
          <TableCell>
            {homeRestaurants.friday.endHours}
            :
            {homeRestaurants.friday.endMinutes}

          </TableCell>
          <TableCell>
            {homeRestaurants.saturday.endHours}
            :
            {homeRestaurants.saturday.endMinutes}

          </TableCell>
          <TableCell>
            {homeRestaurants.sunday.endHours}
            :
            {homeRestaurants.sunday.endMinutes}

          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
