import React from 'react';
import { TableCell, TableRow, TextField, Typography } from '@mui/material';

const Row = ({ leftTitle, textFieldsProps }) => {
  return (
    <TableRow>
      <TableCell style={{ verticalAlign: 'top', borderBottom: 'none' }}>
        <Typography variant='subtitle2' gutterBottom>
          {leftTitle}
        </Typography>
      </TableCell>
      <TableCell style={{ verticalAlign: 'top', borderBottom: 'none' }}>
        <TextField fullWidth={true} variant={'outlined'} {...textFieldsProps} />
      </TableCell>
    </TableRow>
  );
};

export default Row;