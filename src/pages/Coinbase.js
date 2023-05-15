import React from 'react';
import { Container } from '@mui/material';
import Page from '../components/Page';
import LedgerContainer from '../sections/@main/ledger/LedgerContainer';
import PageTitle from '../components/PageTitle';

const defaultCoinbase = [
  {
    id: 1, data: '', nonce: '88484', hash: '',
    tx: [],
    coinbase: [{ id: '1', name: 'Ned Stark', amount: 1000 }]
  },
  {
    id: 2, data: '', nonce: '180915', hash: '',
    tx: [
      { id: '1', from: 'Ned Stark', to: 'Rob Stark', amount: 155.4 },
      { id: '2', from: 'Ned Stark', to: 'Bran Stark', amount: 75.2 },
      { id: '3', from: 'Ned Stark', to: 'Sansa Stark', amount: 120.5 },
      { id: '4', from: 'Ned Stark', to: 'Aria Stark', amount: 110.33 }
    ],
    coinbase: [{ id: '1', name: 'Ned Stark', amount: 250 }]
  },
  {
    id: 3, data: '', nonce: '77478', hash: '', previous: '',
    tx: [
      { id: '1', from: 'Rob Stark', to: 'Theon G.', amount: 1.5 },
      { id: '2', from: 'Bran Stark', to: 'Aria Stark', amount: 75.2 },
      { id: '3', from: 'Sansa Stark', to: 'Joffrey', amount: 60 }
    ],
    coinbase: [{ id: '1', name: 'Aria Stark', amount: 100 }, { id: '2', name: 'Sansa Stark', amount: 100 }]
  },
  {
    id: 4, data: '', nonce: '414', hash: '', previous: '',
    tx: [
      { id: '1', from: 'Joffrey', to: 'Cersei', amount: 30 },
      { id: '2', from: 'Joffrey', to: 'Little finger', amount: 30 },
      { id: '3', from: 'Aria Stark', to: 'John Snow', amount: 35.75 },
      { id: '4', from: 'John Snow', to: 'Sam Tarley', amount: 20.11 }
    ]
  },
  {
    id: 5, data: '', nonce: '28197', hash: '', previous: '',
    tx: [
      { id: '1', from: 'Cersei', to: 'Jammie', amount: 10.4 },
      { id: '2', from: 'Cersei', to: 'The Mountain', amount: 5.2 },
      { id: '3', from: 'Cersei', to: 'The Spider', amount: 0.5 },
      { id: '4', from: 'Cersei', to: 'Little finger', amount: 7.37 }
    ]
  },
  {
    id: 6, data: '', nonce: '63186', hash: '', previous: '',
    tx: [
      { id: '1', from: 'Jammie', to: 'Brianne', amount: 10.4 },
      { id: '2', from: 'Little finger', to: 'Sansa Stark', amount: 35.2 },
      { id: '3', from: 'Aria Stark', to: 'Sansa Stark', amount: 20.5 },
      { id: '4', from: 'Aria Stark', to: 'John Snow', amount: 20.33 },
      { id: '5', from: 'Aria Stark', to: 'John Snow', amount: 12 }
    ]
  },
];

export const Coinbase = () => {
  return (
    <Page title="Coinbase">
      <Container maxWidth="xxl">
      <PageTitle title={'Coinbase:'}></PageTitle>
        <LedgerContainer defaultBlocks={defaultCoinbase} />
      </Container>
    </Page>
  );
};
