import React from 'react';
import TableWrapper from '../../../components/Table';
import { Box, Button, Card, CardHeader, Divider } from '@mui/material';
import Iconify from '../../../components/Iconify';
import { sha256Block } from '../../../utils/crypto';

const hashShortener = hash => {
  return hash.substring(0, 12).concat(' [ ... ] ').concat(hash.substring(hash.length - 12, hash.length - 1));
};

const DummyBlock = ({ id, data, nonce, hash, previous, valid, dispatch }) => {

  const onDataChangeHandler = e => {
    sha256Block({ id, nonce, hash, previous, valid, data: e.target.value })
      .then(bl =>  dispatch({ type: 'updateBlock', value: bl}));
  }

  const onNonceChangeHandler = e => {
    sha256Block({ id, data, hash, previous, valid, nonce: e.target.value })
      .then(bl =>  dispatch({ type: 'updateBlock', value: bl}));
  }

  const dataRow = {
    leftTitle: 'Data:',
    textFieldsProps: {
      label: 'Type something...',
      multiline: true,
      rows: 6,
      value: data,
      onChange: (e) => onDataChangeHandler(e)
    },
  };

  const nonceRow = {
    leftTitle: 'Nonce:',
    textFieldsProps: {
      value: nonce,
      onChange: (e) => onNonceChangeHandler(e)
    },
  };

  const hashRow = {
    leftTitle: 'Block hash:',
    textFieldsProps: {
      label: 'Hashed data (using: SHA-256)',
      disabled: true,
      value: hashShortener(hash),
      error: !valid,
      helperText: !valid && 'The block is not signed!'
    },
  };

  const prevRow = !!previous ? {
    leftTitle: 'Previous:',
    textFieldsProps: {
      label: 'Previous block hash',
      disabled: true,
      value: hashShortener(previous)
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