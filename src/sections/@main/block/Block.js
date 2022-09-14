import { Button, Card, CardHeader, Divider } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { sha256 } from '../../../utils/crypto';
import { mine, isValid } from '../../../utils/mine';
import TableWrapper from '../../../components/Table';
import Iconify from '../../../components/Iconify';


const Block = ({ id = 1, previous }) => {
  const [input, setInput] = useState({ data: '', nonce: '88484' });
  const [hashed, setHashed] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    sha256(input.data.concat(input.nonce)).then(val => {
      setHashed(val);
      setValid(isValid(val));
    });
  }, [input]);

  const dataRow = {
    leftTitle: 'Data:',
    textFieldsProps: {
      label: 'Type something...',
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
    leftTitle: 'Block hash:',
    textFieldsProps: {
      label: 'Hashed data (using: SHA-256)',
      disabled: true,
      value: hashed,
      error: !valid,
      helperText: !valid && 'The block is not signed!'
    },
  };

  return (
    <Card>
      <div style={{ display: "flex" }}>
        <CardHeader title={"The Block - ID #" + id} style={{ padding: '1.1em' }} />
        <Iconify
            icon={valid ? 'eva:people-fill' : 'eva:arrow-ios-forward-fill'}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        <Button style={{ marginLeft: "auto" }}
          disabled={valid}
          variant="contained"
          onClick={() => mine(input.data)
            .then(result => setInput({ ...input, nonce: result }))}
        >
          MINE!
        </Button>
      </div>
      <Divider style={{ marginBottom: '1em' }} />
      <TableWrapper rows={[dataRow, nonceRow, hashRow]} />
    </Card>
  );
};

export default Block;