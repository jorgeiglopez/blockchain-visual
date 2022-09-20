import React from 'react';
import TableWrapper from '../../../components/Table';
import { Box, Button, Card, CardHeader, Divider } from '@mui/material';
import Iconify from '../../../components/Iconify';


const DummyBlock = ({ id, data, nonce, hash, previous, valid }) => {

  const dataRow = {
    leftTitle: 'Data:',
    textFieldsProps: {
      label: 'Type something...',
      multiline: true,
      rows: 6,
      value: data,
      // onChange: (e) => setInput({ ...input, data: e.target.value })
    },
  };

  const nonceRow = {
    leftTitle: 'Nonce:',
    textFieldsProps: {
      value: nonce,
      // onChange: (e) => setInput({ ...input, nonce: e.target.value })
    },
  };

  const hashRow = {
    leftTitle: 'Block hash:',
    textFieldsProps: {
      label: 'Hashed data (using: SHA-256)',
      disabled: true,
      value: hash,
      error: !valid,
      helperText: !valid && 'The block is not signed!'
    },
  };

  const prevRow = !!previous ? {
    leftTitle: 'Previous:',
    textFieldsProps: {
      label: 'Previous block hash',
      disabled: true,
      value: previous
    },
  } : null;

  return (
    <Card>
      <Box display={'flex'} padding={'16px'}>
        <Box display={'flex'}>
          <CardHeader title={"The Block  -  ID #" + id} style={{ padding: 0 }} />
          <Iconify
            icon={!!valid ? 'ant-design:check-circle-filled' : 'charm:circle-cross'}
            sx={{ width: '2rem', height: '2rem', ml: '15px', mt: '2px' }}
            color={!!valid ? 'green' : 'red'}
          />
        </Box>
        <Box ml={'auto'}>
          <Button
            ml={'auto'}
            disabled={!!valid}
            variant="contained"
            // onClick={() => mine(data)
            //   .then(result => setInput({ ...input, nonce: result }))}
          >
            MINE!
          </Button>
        </Box>
      </Box>
      <Divider style={{ marginBottom: '1em' }} />
      <TableWrapper rows={[dataRow, nonceRow, hashRow, prevRow]} />
    </Card>
  );
};

export default DummyBlock;