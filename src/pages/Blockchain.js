import React from 'react';
import { Container } from '@mui/material';
import Page from '../components/Page';
import BlockchainContainer from '../sections/@main/blockchain/BlockchainContainer';
import PageTitle from '../components/PageTitle';

export const Blockchain = () => {
  return (
    <Page title="Blockchain">
      <Container maxWidth="xxl">
      <PageTitle title={'Chain of blocks:'}></PageTitle>
        <BlockchainContainer />
      </Container>
    </Page>
  );
};
