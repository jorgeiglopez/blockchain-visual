import React from 'react';
import { Block } from '../sections/@main/block';
import { Grid, Container, Typography } from '@mui/material';
import Page from '../components/Page';

export const Blockchain = () => {
  const defaultBlocks = [
    { id: 1, data: '', nonce: '88484', previous: 'd' },
    { id: 2, data: 'd', nonce: '88484', previous: 'prev' },
    { id: 3, data: 'd', nonce: '88484', previous: '2prev' },
  ];

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          The blockchain
        </Typography>
        <Grid container spacing={3}>
          {
            defaultBlocks.map(block =>
              <Grid item xs={12} sm={6} md={4} key={block.id}>
                <Block { ...defaultBlocks } />
              </Grid>)
          }
        </Grid>
      </Container>
    </Page>
  );
};
