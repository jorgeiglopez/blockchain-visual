import { Box, Button, Card, CardHeader, Divider } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { sha256Block } from '../../../utils/crypto';
import { mineBlock } from '../../../utils/mine';
import TableWrapper from '../../../components/Table';
import Iconify from '../../../components/Iconify';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';


const Block = ({ id = 1, data = '', nonce = '88484', hash = '', previous = '' }) => {
  const [block, setBlock] = useState({ id, data, nonce, hash, previous });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    sha256Block(block).then(val => {
      setBlock(val);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [block.data, block.nonce]);

  const dataRow = {
    leftTitle: 'Data:',
    textFieldsProps: {
      label: 'Write something...',
      multiline: true,
      rows: 6,
      value: block.data,
      onChange: (e) => setBlock({ ...block, data: e.target.value })
    },
  };

  const nonceRow = {
    leftTitle: 'Nonce:',
    textFieldsProps: {
      value: block.nonce,
      onChange: (e) => setBlock({ ...block, nonce: e.target.value })
    },
  };

  const hashRow = {
    leftTitle: 'Hash:',
    textFieldsProps: {
      label: 'Hash (using SHA-256)',
      disabled: true,
      value: block.hash,
      error: !block.valid,
      helperText: !block.valid && 'The block isn\'t signed!'
    },
  };

  const prevRow = !!block.previous ? {
    leftTitle: 'Previous Hash:',
    textFieldsProps: {
      label: 'Hash of the previous block',
      disabled: true,
      value: block.previous
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
            onClick={() => {
              setLoading(true);
              mineBlock(block).then(result => {
                setBlock({ ...result });
                setLoading(false);
              });
            }
            }
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

export default Block;