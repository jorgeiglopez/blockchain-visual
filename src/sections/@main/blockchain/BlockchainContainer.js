import { Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';

import { isValid, mine, mineBlock } from '../../../utils/mine';
import DummyBlock from './DummyBlock';


const defaultBlocks = [
  { id: 1, data: '', nonce: '88484', hash: '', valid: false },
  { id: 2, data: '', nonce: '88484', hash: '', previous: '', valid: false },
  { id: 3, data: '', nonce: '88484', hash: '', previous: '', valid: false },
];

const mineAll = async blocks => {
  let newBlocks = [...blocks];

  let lastHash = null;
  for (let i = 0; i < newBlocks.length; i++) {
    let block = newBlocks[i];
    block.previous = lastHash;

    block = await mineBlock(block);
    lastHash = block.hash;
    console.log("Mined block: ", block);
  }
  console.log("All mined: ", newBlocks);
  return newBlocks;
};

const reducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'init': {
      if (!state.init) {
        return { ...newState, init: true, allValid: false, blocks: action.value };
      }
      return newState;
    }

    case 'mineAll': {
      if (state.init) {
        return { ...newState, allValid: true, blocks: mineAll(state.blocks) };
      }
      return newState;
    }
    default: {
      throw new Error('Unsupported operation when calling useReducer dispatch function');
    }
  }
};


const BlockchainContainer = () => {
  const [state, dispatch] = useReducer(reducer, { init: false });

  useEffect(() => {
    if (!state.init) {
      console.log('-----> init');
      dispatch({ type: 'init', value: defaultBlocks });
    }
  }, [state.init]);

  useEffect(() => {
    if (state.init) {
      console.log('-----> mineAll');
      dispatch({ type: 'mineAll' });
    }
  }, [state.init]);

  return (
    <Grid container spacing={3}>
      {state.blocks && state.blocks.length > 0 ?
        state.blocks?.map(block =>
          <Grid item xs={12} sm={6} md={4} key={block.id}>
            <DummyBlock {...block} />
          </Grid>) : <Grid item xs={12} sm={6} md={4}><div>Loading...</div></Grid>}
    </Grid>
  );
};

export default BlockchainContainer;