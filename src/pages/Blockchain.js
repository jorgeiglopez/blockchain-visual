import React from 'react';
import { Container, Typography } from '@mui/material';
import Page from '../components/Page';
import BlockchainContainer from '../sections/@main/blockchain/BlockchainContainer';

export const Blockchain = () => {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xxl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Chain of blocks:
        </Typography>
        <BlockchainContainer />
      </Container>
    </Page>
  );
};
