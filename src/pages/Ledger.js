import React from 'react';
import { Container, Typography } from '@mui/material';
import Page from '../components/Page';
import LedgerContainer from '../sections/@main/ledger/LedgerContainer';

export const Ledger = () => {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xxl">
        <Typography variant="h4" sx={{ mb: 4 }}>
          Ledger
        </Typography>
        <LedgerContainer />
      </Container>
    </Page>
  );
};
