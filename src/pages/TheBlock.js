import React from 'react';
import { Block } from '../sections/@main/block';
import { Grid, Container, Typography } from '@mui/material';
import Page from '../components/Page';

export const TheBlock = () => {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">

        <Typography variant="h4" sx={{ mb: 4 }}>
          The block:
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Block />
          </Grid>
        </Grid>

      </Container>
    </Page>
  );
};
