import React from 'react';
import { Container, Typography } from '@mui/material';
import Page from '../components/Page';
import BlockchainContainer from '../sections/@main/blockchain/BlockchainContainer';

export const Blockchain = () => {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          The blockchain
        </Typography>
        <BlockchainContainer />
      </Container>
    </Page>
  );
};
