import { Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { sha256Block } from '../../../utils/crypto';
import { mineBlock } from '../../../utils/mine';
import { HashBlock } from '../hash';
import DummyBlock from './DummyBlock';


const defaultBlocks = [
  { id: 1, data: '', nonce: '88484', hash: '' },
  { id: 2, data: '', nonce: '158818', hash: '', previous: '0000a456e7b5a5eb059e721fb431436883143101275c4077f83fe70298f5623d' },
  { id: 3, data: '', nonce: '10904', hash: '', previous: '0000c13b5d7c6b636942c8e62f5ab023bcce895b5907237e3f4ff548e138ccc3' },
];


const reducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'updateBlock': {
      newState.blocks[action.value.id - 1] = action.value;
      return newState;
    }

    default: {
      throw new Error('Unsupported operation when calling useReducer dispatch function');
    }
  }
};


const BlockchainContainer = () => {
  const [state, dispatch] = useReducer(reducer, { blocks: defaultBlocks });

  useEffect(() => {
    for (let index = 0; index < state.blocks.length; index++) {
      sha256Block(state.blocks[index]).then(nb => dispatch({ type: 'updateBlock', value: nb }));
    }
  }, [JSON.stringify(state.blocks)]);


  // useEffect(() => {
  //   console.log("An update....")
  //   async function updateAll() {
  //     let prev = '';
  //     for (let index = 0; index < state.blocks.length; index++) {
  //       state.blocks[index].previous = prev;
  //       const newBlock = await sha256Block(state.blocks[index]);
  //       console.log('The new block:', newBlock)
  //       dispatch({ type: 'updateBlock', value: newBlock })
  //       prev = newBlock.hash;
  //     }
  //     updateAll();
  //   }
  // }, [JSON.stringify(state.blocks)]);

  return (
    <Grid container spacing={3}>
      {state.blocks && state.blocks.length > 0 ?
        state.blocks?.map(block =>
          <Grid item xs={12} sm={6} md={4} key={block.id}>
            <DummyBlock block={block} dispatch={dispatch} />
          </Grid>) : <div>Loading...</div>}
    </Grid>
  );
};

export default BlockchainContainer;