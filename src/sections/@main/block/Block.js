import { Button, Card, CardHeader, Divider, Table, TableBody, TableCell, TableRow, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { sha256 } from '../../../utils/crypto';
import { mine } from '../../../utils/mine';

const isValid = (val) => {
  if (!!val && typeof val === 'string') {
    return val.startsWith('0000');
  }
  return false;
};

const Block = ({ prev }) => {
  const [input, setInput] = useState({ data: '', nonce: '88484' });
  const [hash, setHash] = useState('');
  const [valid, setValid] = useState(false);
  useEffect(() => {
    sha256(input.data.concat(input.nonce)).then(val => {
      setHash(val);
      setValid(isValid(val));
    });
  }, [input]);


  return (
    <Card>
      <CardHeader title={"The Block - ID #1"} style={{ padding: '1.1em' }} />
      <Divider style={{ marginBottom: '1em' }} />
      <Table>
        <colgroup>
          <col style={{ width: '10%' }} />
          <col style={{ width: '90%' }} />
        </colgroup>
        <TableBody>
          <TableRow>
          </TableRow>
          <TableRow>
            <TableCell style={{ verticalAlign: 'top', borderBottom: 'none' }}>
              <Typography variant='subtitle2' gutterBottom>Data:</Typography>
            </TableCell>
            <TableCell style={{ verticalAlign: 'top', borderBottom: 'none' }}>
              <TextField
                id='data-outlined'
                title='Data'
                label='Type something...'
                variant='outlined'
                multiline rows={6}
                fullWidth={true}
                onChange={(e) => {
                  setInput({ ...input, data: e.target.value });
                }}
                value={input.data} />
            </TableCell>
          </TableRow>
          {/* <TableRow>
            <TableCell style={{ verticalAlign: 'top', borderBottom: 'none'}}>
              <Typography variant='subtitle2' gutterBottom>Previous hash:</Typography>
            </TableCell>
            <TableCell style={{ verticalAlign: 'top', borderBottom: 'none' }}>
              <TextField
                id='prev'
                disabled
                title='SHA-256'
                variant='outlined'
                fullWidth={true}
                value={hashed} />
            </TableCell>
          </TableRow> */}
          <TableRow>
            <TableCell style={{ verticalAlign: 'top', borderBottom: 'none' }}>
              <Typography variant='subtitle2' gutterBottom>Nonce:</Typography>
            </TableCell>
            <TableCell style={{ verticalAlign: 'top', borderBottom: 'none' }}>
              <TextField
                id='disabled-sha256'
                title='SHA-256'
                variant='outlined'
                fullWidth={true}
                onChange={(e) => setInput({ ...input, nonce: e.target.value })}
                value={input.nonce} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ verticalAlign: 'top', borderBottom: 'none' }}>
              <Typography variant='subtitle2' gutterBottom>Block hash:</Typography>
            </TableCell>
            <TableCell style={{ verticalAlign: 'top', borderBottom: 'none' }}>
              <TextField
                error={!valid}
                helperText={!valid && 'The block is not signed!'}
                // disabled
                id='disabled-sha256'
                title='SHA-256'
                variant='outlined'
                fullWidth={true}
                value={hash} />
            </TableCell>
            <TableCell>
              <Button
                disabled={valid}
                variant="contained"
                onClick={() => mine(input.data).then(result => setInput({ ...input, nonce: result }))}
              >
                MINE!
              </Button>
            </TableCell>
          </TableRow>
          {/* <TableRow>
            <TableCell></TableCell>
            <TableCell><Button variant="contained">MINE!</Button></TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </Card>
  );
};

export default Block;