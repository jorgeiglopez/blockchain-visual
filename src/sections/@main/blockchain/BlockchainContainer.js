import { Box } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { sha256Blockchain } from '../../../utils/crypto';
import DummyBlock from './DummyBlock';
// import { makeStyles } from "@material-ui/core/styles";
import { Stack } from '@mui/system';


const defaultBlocks = [
  { id: 1, data: '', nonce: '88484', hash: '' },
  { id: 2, data: '', nonce: '158818', hash: '', previous: '' },
  { id: 3, data: '', nonce: '10904', hash: '', previous: '' },
  { id: 4, data: '', nonce: '19496', hash: '', previous: '' },
  { id: 5, data: '', nonce: '140382', hash: '', previous: '' },
  { id: 6, data: '', nonce: '83295', hash: '', previous: '' },
];

const reducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'updateBlock': {
      newState.blocks[action.value.id - 1] = action.value;
      return newState;
    }

    case 'updateAll': {
      newState.blocks = action.value;
      return newState;
    }

    default: {
      throw new Error('Unsupported operation when calling useReducer dispatch function');
    }
  }
};

// const useStyles = makeStyles({
//   imageList: {
//     direction: "row",
//   spacing: "12"
//   },
//   image: {
//     minWidth: 450,
//     maxWidth: 450,
//     marginRight: 16,
//     marginBottom: 16
//   }
// });

const BlockchainContainer = () => {
  const [state, dispatch] = useReducer(reducer, { blocks: defaultBlocks });
  // const classes = useStyles();
  useEffect(() => {
    sha256Blockchain(state.blocks)
      .then(all => dispatch({ type: 'updateBlock', value: all }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(state.blocks)]);

  return (
    <>
    {/* <Grid container spacing={3} wrap={'wrap'}>
      {state.blocks && state.blocks.length > 0 ?
        state.blocks?.map(block =>
          <Grid item xs={12} sm={6} md={4} key={block.id}>
            <DummyBlock block={block} dispatch={dispatch} />
          </Grid>) : <div>Loading...</div>}
    </Grid> */}
    <Stack direction="row" spacing={2}>
    {state.blocks && state.blocks.length > 0 ?
        state.blocks?.map(block =>
          <Box sx={{minWidth: 340, width: 400, maxWidth: 550, flexShrink: 0 }} key={block.id}>
            <DummyBlock block={block} dispatch={dispatch} />
          </Box>) : <div>Loading...</div>}
    </Stack>
    </>
  );
};

export default BlockchainContainer;