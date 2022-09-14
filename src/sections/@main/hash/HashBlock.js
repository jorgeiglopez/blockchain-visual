import { Card, CardHeader, Divider} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { sha256 } from '../../../utils/crypto';
import Row from '../../../components/Row';
import TableWrapper from '../../../components/Table';


const HashBlock = () => {
  const [input, setInput] = useState('');
  const [hashed, setHashed] = useState('');
  useEffect(() => {
    sha256(input).then(val => setHashed(val));
  }, [input]);

  const dataRow = {
    leftTitle: 'Data',
    textFieldsProps: {
      label: 'Type something...',
      multiline: true,
      rows: 6,
      value: input,
      onChange: (e) => setInput(e.target.value)
    },
  };

  const hashRow = {
    leftTitle: 'SHA-256',
    textFieldsProps: {
      label: 'Hashed data (using: SHA-256)',
      disabled: true,
      value: hashed,
    },
  };


  return (
    <Card>
      <CardHeader title={"The \"SHA-256\" hash function:"} style={{ padding: '1.1em' }} />
      <Divider style={{ marginBottom: '1em' }} />
      <TableWrapper rows={[dataRow, hashRow]}>
          <Row {...dataRow}/>
          <Row {...hashRow}/>
      </TableWrapper>
    </Card>
  );
};

export default HashBlock;