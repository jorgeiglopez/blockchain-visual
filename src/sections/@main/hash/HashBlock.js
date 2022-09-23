import { Card, CardHeader, Divider} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { sha256 } from '../../../utils/crypto';
import TableWrapper from '../../../components/Table';


const HashBlock = () => {
  const [input, setInput] = useState('');
  const [hashed, setHashed] = useState('');
  useEffect(() => {
    sha256(input).then(val => setHashed(val));
  }, [input]);

  const dataRow = {
    leftTitle: 'Datos:',
    textFieldsProps: {
      label: 'Escribe algo...',
      multiline: true,
      rows: 6,
      value: input,
      onChange: (e) => setInput(e.target.value)
    },
  };

  const hashRow = {
    leftTitle: 'Hash:',
    textFieldsProps: {
      label: 'Hash (usando SHA-256)',
      disabled: true,
      value: hashed,
    },
  };


  return (
    <Card>
      <CardHeader title={"Función \"SHA-256\":"} style={{ padding: '1.1em' }} />
      <Divider style={{ marginBottom: '1em' }} />
      <TableWrapper rows={[dataRow, hashRow]} />
    </Card>
  );
};

export default HashBlock;