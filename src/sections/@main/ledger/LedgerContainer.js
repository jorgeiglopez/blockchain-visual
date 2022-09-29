import { Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { sha256Blockchain } from '../../../utils/crypto';
import LedgerBlock from './LedgerBlock';

const defaultBlocks = [
  {
    id: 1, data: '', nonce: '1371', hash: '',
    tx: [
      { id: '1', from: 'Ned Stark', to: 'Rob Stark', amount: 155.4 },
      { id: '2', from: 'Ned Stark', to: 'Bran Stark', amount: 75.2 },
      { id: '3', from: 'Ned Stark', to: 'Sansa Stark', amount: 120.5 },
      { id: '4', from: 'Ned Stark', to: 'Aria Stark', amount: 110.33 },
      { id: '5', from: 'Ned Stark', to: 'John Snow', amount: 23 },
      { id: '6', from: 'Ned Stark', to: 'John Snow', amount: 15.34 }
    ]
  },
  {
    id: 2, data: '', nonce: '187755', hash: '', previous: '',
    tx: [
      { id: '1', from: 'Rob Stark', to: 'Theon Greyjoy', amount: 1.5 },
      { id: '2', from: 'Bran Stark', to: 'Aria Stark', amount: 75.2 },
      { id: '3', from: 'Sansa Stark', to: 'Joffrey', amount: 60 }
    ]
  },
  {
    id: 3, data: '', nonce: '12535', hash: '', previous: '',
    tx: [
      { id: '1', from: 'Joffrey', to: 'Cersei', amount: 30 },
      { id: '2', from: 'Joffrey', to: 'Little finger', amount: 30 },
      { id: '3', from: 'Aria Stark', to: 'John Snow', amount: 35.75 },
      { id: '4', from: 'John Snow', to: 'Sam Tarley', amount: 20.11 }
    ]
  },
  {
    id: 4, data: '', nonce: '29571', hash: '', previous: '',
    tx: [
      { id: '1', from: 'Cersei', to: 'Jammie', amount: 10.4 },
      { id: '2', from: 'Cersei', to: 'The Mountain', amount: 5.2 },
      { id: '3', from: 'Cersei', to: 'The Spider', amount: 0.5 },
      { id: '4', from: 'Cersei', to: 'Little finger', amount: 7.37 }
    ]
  },
  {
    id: 5, data: '', nonce: '141339', hash: '', previous: '',
    tx: [
      { id: '1', from: 'Sansa Stark', to: 'John Snow', amount: 45.15 }
    ]
  },
  {
    id: 6, data: '', nonce: '20237', hash: '', previous: '',
    tx: [
      { id: '1', from: 'Jammie', to: 'Brianne', amount: 10.4 },
      { id: '2', from: 'Little finger', to: 'Sansa Stark', amount: 35.2 },
      { id: '3', from: 'Aria Stark', to: 'Sansa Stark', amount: 20.5 },
      { id: '4', from: 'Aria Stark', to: 'John Snow', amount: 20.33 },
      { id: '5', from: 'Aria Stark', to: 'John Snow', amount: 12 }
    ]
  },
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