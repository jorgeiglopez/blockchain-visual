import { Box, Button, Card, CardHeader, Divider } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { sha256 } from '../../../utils/crypto';
import { mine, isValid } from '../../../utils/mine';
import TableWrapper from '../../../components/Table';
import Iconify from '../../../components/Iconify';


const Block = ({ setup = { id: 1, data: '', nonce: '88484', previous: '' }}) => {
  const [input, setInput] = useState(setup);
  const [hashed, setHashed] = useState('');
  const [valid, setValid] = useState(false);
  
  useEffect(() => {
    const toHash = input.data.concat(!!input.previous? input.previous : '').concat(input.nonce);
    sha256(toHash).then(val => {
      setHashed(val);
      setValid(isValid(val));
    });
  }, [input]);

  const dataRow = {
    leftTitle: 'Datos:',
    textFieldsProps: {
      label: 'Escribe algo...',
      multiline: true,
      rows: 6,
      value: input.data,
      onChange: (e) => setInput({ ...input, data: e.target.value })
    },
  };

  const nonceRow = {
    leftTitle: 'Nonce:',
    textFieldsProps: {
      value: input.nonce,
      onChange: (e) => setInput({ ...input, nonce: e.target.value })
    },
  };

  const hashRow = {
    leftTitle: 'Hash:',
    textFieldsProps: {
      label: 'Hash (usando SHA-256)',
      disabled: true,
      value: hashed,
      error: !valid,
      helperText: !valid && 'El bloque no está verificado!'
    },
  };

  const prevRow = !!input.previous ? {
    leftTitle: 'Hash Previo:',
    textFieldsProps: {
      label: 'Hash del bloque anterior',
      disabled: true,
      value: input.previous
    },
  } : null;

  return (
    <Card>
      <Box display={'flex'} padding={'16px'}>
        <Box display={'flex'}>
          <CardHeader title={"Bloque  -  ID #" + input.id} style={{ padding: 0 }} />
          <Iconify
            icon={valid ? 'ant-design:check-circle-filled' : 'charm:circle-cross'}
            sx={{ width: '2rem', height: '2rem', ml: '15px', mt: '2px' }}
            color={valid ? 'green' : 'red'}
          />
        </Box>
        <Box ml={'auto'}>
          <Button
            ml={'auto'}
            disabled={valid}
            variant="contained"
            onClick={() => mine(input.data)
              .then(result => setInput({ ...input, nonce: result }))}
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

export default Block;