import React from 'react';
import { Block } from '../sections/@main/block';
import { Grid, Container } from '@mui/material';
import Page from '../components/Page';
import PageTitle from '../components/PageTitle';

export const TheBlock = () => {
  return (
    <Page title="Block">
      <Container maxWidth="xl">
        <PageTitle title={'The block:'}></PageTitle>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Block />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};
