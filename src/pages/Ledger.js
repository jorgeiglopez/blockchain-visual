import React from 'react';
import { Container, Typography } from '@mui/material';
import Page from '../components/Page';
import LedgerContainer from '../sections/@main/ledger/LedgerContainer';

export const Ledger = () => {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Ledger
        </Typography>
        <LedgerContainer />
      </Container>
    </Page>
  );
};
