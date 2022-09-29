import { Card, CardHeader, Divider} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { sha256 } from '../../../utils/crypto';
import TableWrapper from '../../../components/Table';


const HashBlock = () => {
  const [block, setBlock] = useState({data: '', hash: ''});

  useEffect(() => {
    sha256(block.data)
      .then(val => setBlock({...block, hash: val}));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [block.data]);

  const dataRow = {
    leftTitle: 'Data:',
    textFieldsProps: {
      label: 'Write something...',
      multiline: true,
      rows: 6,
      value: block.data,
      onChange: (e) => setBlock({...block, data: e.target.value})
    },
  };

  const hashRow = {
    leftTitle: 'Hash:',
    textFieldsProps: {
      label: 'Hash (using SHA-256)',
      disabled: true,
      value: block.hash,
    },
  };


  return (
    <Card>
      <CardHeader title={"The \"SHA-256\" function:"} style={{ padding: '1.1em' }} />
      <Divider style={{ marginBottom: '1em' }} />
      <TableWrapper rows={[dataRow, hashRow]} />
    </Card>
  );
};

export default HashBlock;