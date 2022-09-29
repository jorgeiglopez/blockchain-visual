import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import Iconify from './Iconify';

const DataGridRow = ({ leftTitle, transactions }) => {

  return (
    <TableRow>
      <TableCell style={{ verticalAlign: 'top', borderBottom: 'none' }}>
        <Typography variant='subtitle2' gutterBottom>
          {leftTitle}
        </Typography>
      </TableCell>
      <TableCell style={{ verticalAlign: 'top', borderBottom: 'none', padding: '10px 16px' }}>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>From</TableCell>
                <TableCell></TableCell>
                <TableCell>To</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((row) => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{row.from}</TableCell>
                  <TableCell><Iconify icon={'bi:arrow-right'} /></TableCell>
                  <TableCell>{row.to}</TableCell>
                  <TableCell align="right">
                    ₿
                    <TextField
                      id="standard-number"
                      value={row.amount}
                      variant="standard"
                      size="small"
                      sx={{ width: '64px' }}
                      inputProps={{ min: 0, style: { textAlign: 'right' } }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableCell>
    </TableRow>
  );
};

export default DataGridRow;