import {
  Table, TableBody, TableCell, TableContainer, TableRow,
} from '@material-ui/core';
import React from 'react';

export const TableHours = () => (
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
          <TableCell>09:00  23:00</TableCell>
          <TableCell>09:00  23:00</TableCell>
          <TableCell>09:00  23:00</TableCell>
          <TableCell>09:00  23:00</TableCell>
          <TableCell>09:00  23:00</TableCell>
          <TableCell>09:00  23:00</TableCell>
          <TableCell>09:00  23:00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
