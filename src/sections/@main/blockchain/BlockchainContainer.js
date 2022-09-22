import { Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { sha256Block } from '../../../utils/crypto';
import { mineBlock } from '../../../utils/mine';
import DummyBlock from './DummyBlock';


const defaultBlocks = [
  { id: 1, data: '', nonce: '88484', hash: '' },
  { id: 2, data: '', nonce: '158818', hash: '', previous: '0000a456e7b5a5eb059e721fb431436883143101275c4077f83fe70298f5623d' },
  { id: 3, data: '', nonce: '10904', hash: '', previous: '0000c13b5d7c6b636942c8e62f5ab023bcce895b5907237e3f4ff548e138ccc3' },
];

const assesValidity = blocks => {
  let allValid = true; // Replace by reducer()
  for (let index = 0; index < blocks.length; index++) {
    allValid = allValid && blocks[index].valid;
  }
  return allValid;
}

const mineAll = async blocks => {
  let newBlocks = [...blocks];
  let lastHash = null;

  for (let i = 0; i < newBlocks.length; i++) {
    let block = newBlocks[i];
    block.previous = lastHash;
    block = await sha256Block(block);
    if (!block.valid) {
      console.log("----Block Not signed: ", block)
      block = await mineBlock(block);
    }
    lastHash = block.hash;
    newBlocks[i] = block;
  }
  console.log("All mined: ", newBlocks);
  return newBlocks;
};


const updateBlock = (blocks, block) => {
  for (let index = 0; index < blocks.length; index++) {
    if(blocks[index].id === block.id) {
      blocks[index] = block;
    }
    if(blocks[index].id > block.id) {
      blocks[index].valid = false;
    }
  }
}

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
        return { ...newState, allValid: true, blocks: action.value };
      }
      return newState;
    }

    case 'updateBlock': {
      updateBlock(newState.blocks, action.value);
      return {...newState, allValid: assesValidity(newState.blocks)};
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
      console.log('---> init');
      dispatch({ type: 'init', value: defaultBlocks });
    }
  }, [state.init]);

  useEffect(() => {
    if (state.init && !state.allValid) {
      console.log('-----> mineAll');
      mineAll(state.blocks)
      .then(result => {dispatch({ type: 'mineAll', value: result })});
    }
    console.log("STATE: ", state);
  }, [state.allValid, state.init]);

  return (
    <Grid container spacing={3}>
      {state.blocks && state.blocks.length > 0 ?
        state.blocks?.map(block =>
          <Grid item xs={12} sm={6} md={4} key={block.id}>
            <DummyBlock {...block} dispatch={dispatch}/>
          </Grid>) : <Grid item xs={12} sm={6} md={4}><div>Loading...</div></Grid>}
    </Grid>
  );
};

export default BlockchainContainer;