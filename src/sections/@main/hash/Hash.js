import { Card, CardHeader, Divider, Table, TableBody, TableCell, TableRow, TextField, Typography } from '@mui/material';
import React from 'react';

const Hash = () => {
  return (
    <Card>
      <CardHeader title={"The \"SHA-256\" hash function:"} style={{padding: '1.1em'}}/>
      <Divider style={{marginBottom: '1em'}}/>
      <Table>
        <colgroup>
          <col style={{ width: '10%' }} />
          <col style={{ width: '90%' }} />
        </colgroup>
        <TableBody>
          <TableRow>
            <TableCell style={{ verticalAlign: 'top', borderBottom: 'none'}}>
              <Typography variant='subtitle2' gutterBottom>Data</Typography>
            </TableCell>
            <TableCell style={{ verticalAlign: 'top', borderBottom: 'none'}}>
              <TextField id='data-outlined' title='Data' label='Type something...' variant='outlined' multiline rows={6} fullWidth={true}/>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ verticalAlign: 'top' }}>
              <Typography variant='subtitle2' gutterBottom>SHA-256</Typography>
            </TableCell>
            <TableCell style={{ verticalAlign: 'top', borderBottom: 'none'}}>
              <TextField id='disabled-sha256' disabled title='SHA-256' variant='outlined' fullWidth={true}/>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
};

export default Hash;