import { Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { sha256Blockchain } from '../../../utils/crypto';
import LedgerBlock from './LedgerBlock';

const tx = [
  {from: 'John Snow', to: 'Mary', amount: 100}, {from: 'Jammie', to: 'Mary', amount: 34.78}, {from: 'Mary', to: 'Steve', amount: 576.5},
  {from: 'Jefferson', to: 'Mary', amount: 10.33}, {from: 'Steve', to: 'Yoko', amount: 74.3}];

const defaultBlocks = [
  { id: 1, data: '', nonce: '88484', hash: '', tx},
  { id: 2, data: '', nonce: '158818', hash: '', previous: '', tx },
  { id: 3, data: '', nonce: '10904', hash: '', previous: '', tx },
  { id: 4, data: '', nonce: '19496', hash: '', previous: '', tx },
  { id: 5, data: '', nonce: '140382', hash: '', previous: '', tx },
  { id: 6, data: '', nonce: '83295', hash: '', previous: '', tx },
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

const LedgerContainer = () => {
  const [state, dispatch] = useReducer(reducer, { blocks: defaultBlocks });

  useEffect(() => {
    sha256Blockchain(state.blocks)
      .then(all => dispatch({ type: 'updateBlock', value: all }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(state.blocks)]);

  return (
    <Grid container spacing={3} wrap={'wrap'}>
      {state.blocks && state.blocks.length > 0 ?
        state.blocks?.map(block =>
          <Grid item xs={12} sm={12} md={6} lg={4} key={block.id}>
            <LedgerBlock block={block} dispatch={dispatch} />
          </Grid>) : <div>Loading...</div>}
    </Grid>
  );
};

export default LedgerContainer;