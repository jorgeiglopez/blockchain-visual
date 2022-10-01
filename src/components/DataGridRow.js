import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import Iconify from './Iconify';

const DataGridRow = ({ leftTitle, transactions, coinbase, onTransactionChange }) => {

  const updateOneTransaction = (row, e) => {
    const newTx = [...transactions];
    const index = newTx.indexOf(newTx.find(t => t.id === row.id));
    newTx[index] = { ...row, amount: parseFloat(e.target.value) };
    onTransactionChange(newTx);
  };

  const transactionsBody = transactions && transactions.length > 0 ? transactions.map((row) => (
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
  )) : null;

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


  const coinbaseRow = coinbase ? <TableRow>
    <TableCell style={{ verticalAlign: 'top', borderBottom: 'none', padding: '16px 4px 8px 16px'  }}>
      <Typography variant='subtitle2' gutterBottom>
        {'CB:'}
      </Typography>
    </TableCell>
    <TableCell style={{ verticalAlign: 'top', borderBottom: 'none', padding: '10px 14px 10px 4px' }}>
      {<Table size="small" sx={{ width: '100%' }}>
        <TableHead>
          <TableRow>
            <TableCell>Coinbase</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coinbase.map((cb) => (
            <TableRow key={cb.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{cb.name}</TableCell>
              <TableCell align="right">
                ₿ <TextField
                  id={cb.id}
                  type='number'
                  value={cb.amount}
                  variant="standard"
                  size="small"
                  sx={{ width: '64px' }}
                  inputProps={{ min: 0, style: { textAlign: 'right' } }}
                  disabled
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>}
    </TableCell>
  </TableRow> : null;
  return (
    <>
      {coinbaseRow}
      <TableRow>
        <TableCell style={{ verticalAlign: 'top', borderBottom: 'none', padding: '16px 4px 8px 16px' }}>
          <Typography variant='subtitle2' gutterBottom>
            {leftTitle}
          </Typography>
        </TableCell>
        <TableCell style={{ verticalAlign: 'top', borderBottom: 'none', padding: '10px 14px 10px 4px' }}>
          {innerTable}
        </TableCell>
      </TableRow>
    </>
  );
};

export default DataGridRow;