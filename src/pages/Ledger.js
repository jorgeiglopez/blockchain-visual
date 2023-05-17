import React from 'react';
import { Container } from '@mui/material';
import Page from '../components/Page';
import LedgerContainer from '../sections/@main/ledger/LedgerContainer';
import PageTitle from '../components/PageTitle';
import TextExpander from '../components/TextExpander';

const defaultLedger = [
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

export const Ledger = () => {
  return (
    <Page title="Ledger">
      <Container maxWidth="xxl">
        <PageTitle title={'Ledger:'} />
        <TextExpander title='the Ledger'>
          <p>A ledger is a record or a log where transactions (financial or otherwise) are listed. Traditionally, ledgers were physical books,
            but now they are typically digital spreadsheets or databases. Ledgers were typically maintained by a central authority like a
            bank, a corporation, or a government institution.</p>
          <br />
          <p>A blockchain can be understood as a kind of distributed ledger or decentralized database that maintains a continuously
            growing list of records, called blocks, which are linked and secured using cryptography.
            The <em>Bitcoin blockchain</em> is a prime example of a blockchain acting as a ledger. Each Bitcoin transaction is recorded on this
            public, distributed ledger. Anyone can view the transaction history of any Bitcoin, all the way back to when it was first
            created (mined).</p>
        </TextExpander>
        <LedgerContainer defaultBlocks={defaultLedger} />
      </Container>
    </Page>
  );
};
