import React from 'react';
import TableWrapper from '../../../components/Table';
import { Box, Button, Card, CardHeader, Divider } from '@mui/material';
import Iconify from '../../../components/Iconify';
import { hashShortener, sha256Block } from '../../../utils/crypto';
import { mineBlock } from '../../../utils/mine';

const DummyBlock = ({block, dispatch}) => {

  const onDataChangeHandler = e => {
    sha256Block({ ...block, data: e.target.value })
      .then(bl =>  dispatch({ type: 'updateBlock', value: bl }));
  }

  const onNonceChangeHandler = e => {
    sha256Block({ ...block, nonce: e.target.value })
      .then(bl => dispatch({ type: 'updateBlock', value: bl }));
  }

  const onMineButtonHandler = () => {
    mineBlock(block)
      .then(bl => dispatch({ type: 'updateBlock', value: bl }));
  }

  const dataRow = {
    leftTitle: 'Datos:',
    textFieldsProps: {
      label: 'Escribe algo...',
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
      label: 'Hash (usando SHA-256)',
      disabled: true,
      value: hashShortener(block.hash),
      error: !block.valid,
      helperText: !block.valid && 'El bloque no está verificado!'
    },
  };

  const prevRow = !!block.previous ? {
    leftTitle: 'Hash Previo:',
    textFieldsProps: {
      label: 'Hash del bloque anterior',
      disabled: true,
      value: hashShortener(block.previous)
    },
  } : null;

  return (
    <Card>
      <Box display={'flex'} padding={'16px'}>
        <Box display={'flex'}>
          <CardHeader title={"Bloque  -  ID #" + block.id} style={{ padding: 0 }} />
          <Iconify
            icon={!!block.valid ? 'ant-design:check-circle-filled' : 'charm:circle-cross'}
            sx={{ width: '2rem', height: '2rem', ml: '15px', mt: '2px' }}
            color={!!block.valid ? 'green' : 'red'}
          />
        </Box>
        <Box ml={'auto'}>
          <Button
            ml={'auto'}
            disabled={!!block.valid}
            variant="contained"
            onClick={onMineButtonHandler}
          >
            MINAR!
          </Button>
        </Box>
      </Box>
      <Divider style={{ marginBottom: '1em' }} />
      <TableWrapper rows={[dataRow, nonceRow, hashRow, prevRow]} />
    </Card>
  );
};

export default DummyBlock;