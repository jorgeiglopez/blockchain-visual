import React, { useState } from 'react';
import TableWrapper from '../../../components/Table';
import { Box, Button, Card, CardHeader, Divider } from '@mui/material';
import Iconify from '../../../components/Iconify';
import { hashShortener, sha256Block } from '../../../utils/crypto';
import { mineBlock } from '../../../utils/mine';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

const DummyBlock = ({ block, dispatch }) => {
  const [loading, setLoading] = useState(false);

  const onDataChangeHandler = e => {
    sha256Block({ ...block, data: e.target.value })
      .then(bl => dispatch({ type: 'updateBlock', value: bl }));
  };

  const onNonceChangeHandler = e => {
    sha256Block({ ...block, nonce: e.target.value })
      .then(bl => dispatch({ type: 'updateBlock', value: bl }));
  };

  const onMineButtonHandler = () => {
    setLoading(true);
    mineBlock(block)
      .then(bl => {
        dispatch({ type: 'updateBlock', value: bl });
        setLoading(false);
      });
  };

  const dataRow = {
    leftTitle: 'Data:',
    textFieldsProps: {
      label: 'Write something...',
      multiline: true,
      rows: 6,
      value: block.data,
      onChange: (e) => onDataChangeHandler(e)
    },
  };

  const nonceRow = {
    leftTitle: 'Nonce:',
    textFieldsProps: {
      value: block.nonce,
      onChange: (e) => onNonceChangeHandler(e)
    },
  };

  const hashRow = {
    leftTitle: 'Hash:',
    textFieldsProps: {
      label: 'Hash (using SHA-256)',
      disabled: true,
      value: hashShortener(block.hash),
      error: !block.valid,
      helperText: !block.valid && 'The block isn\'t signed!'
    },
  };

  const prevRow = !!block.previous ? {
    leftTitle: 'Prev Hash:',
    textFieldsProps: {
      label: 'Hash of the previous block',
      disabled: true,
      value: hashShortener(block.previous)
    },
  } : null;

  return (
    <Card>
      <Box display={'flex'} padding={'16px'}>
        <Box display={'flex'}>
          <CardHeader title={"Block  -  ID #" + block.id} style={{ padding: 0 }} />
          {loading ?
            <CircularProgress size="2rem" style={{ marginLeft: '16px' }} />
            :
            <Iconify
              icon={block.valid ? 'ant-design:check-circle-filled' : 'charm:circle-cross'}
              sx={{ width: '2rem', height: '2rem', ml: '15px', mt: '2px' }}
              color={block.valid ? 'green' : 'red'} />
          }
        </Box>
        <Box ml={'auto'}>
          <Button
            ml={'auto'}
            disabled={block.valid !== loading}
            variant="contained"
            onClick={onMineButtonHandler}
          >
            MINE!
          </Button>
        </Box>
      </Box>
      {loading && <Box sx={{ width: '100%' }} ><LinearProgress /></Box>}
      <Divider style={{ marginBottom: '1em' }} />
      <TableWrapper rows={[dataRow, nonceRow, hashRow, prevRow]} />
    </Card>
  );
};

export default DummyBlock;