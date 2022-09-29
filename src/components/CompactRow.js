import React from 'react';
import { TableCell, TableRow, TextField, Typography } from '@mui/material';

const CompactRow = ({ leftTitle, textFieldsProps }) => {
  return (
    <TableRow>
      <TableCell style={{ verticalAlign: 'top', borderBottom: 'none', padding: '8px' }}>
        <Typography variant='body2' gutterBottom>
          {leftTitle}
        </Typography>
      </TableCell>
      <TableCell style={{ verticalAlign: 'top', borderBottom: 'none', padding: '8px' }}>
        <TextField fullWidth={true} variant={'outlined'} {...textFieldsProps} />
      </TableCell>
    </TableRow>
  );
};

export default CompactRow;