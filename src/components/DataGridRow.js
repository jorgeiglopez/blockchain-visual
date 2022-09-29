import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import Iconify from './Iconify';

const DataGridRow = ({ leftTitle, transactions, onTransactionChange }) => {

  const updateOneTransaction = (row, e) => {
    const newTx = [...transactions];
    const index = newTx.indexOf(newTx.find(t => t.id === row.id));
    newTx[index] = { ...row, amount: parseFloat(e.target.value) };
    onTransactionChange(newTx);
  };

  const transactionsBody = transactions.map((row) => (
    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>{row.from}</TableCell>
      <TableCell><Iconify icon={'bi:arrow-right'} /></TableCell>
      <TableCell>{row.to}</TableCell>
      <TableCell align="right">
        ₿ <TextField
          id={row.id}
          type='number'
          value={row.amount}
          variant="standard"
          size="small"
          sx={{ width: '64px' }}
          inputProps={{ min: 0, style: { textAlign: 'right' } }}
          onChange={(e) => updateOneTransaction(row, e)}
        />
      </TableCell>
    </TableRow>
  ));

  const innerTable = <Table size="small">
    <TableHead>
      <TableRow>
        <TableCell>From</TableCell>
        <TableCell></TableCell>
        <TableCell>To</TableCell>
        <TableCell align="right">Amount</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {transactionsBody}
    </TableBody>
  </Table>;

  return (
    <TableRow>
      <TableCell style={{ verticalAlign: 'top', borderBottom: 'none' }}>
        <Typography variant='subtitle2' gutterBottom>
          {leftTitle}
        </Typography>
      </TableCell>
      <TableCell style={{ verticalAlign: 'top', borderBottom: 'none', padding: '10px 14px 10px 4px' }}>
        {innerTable}
      </TableCell>
    </TableRow>
  );
};

export default DataGridRow;