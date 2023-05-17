import React from 'react';
import { Block } from '../sections/@main/block';
import { Grid, Container } from '@mui/material';
import Page from '../components/Page';
import PageTitle from '../components/PageTitle';
import TextExpander from '../components/TextExpander';

export const TheBlock = () => {
  return (
    <Page title="Block">
      <Container maxWidth="xl">
        <PageTitle title={'The block:'} />
        <TextExpander title='the Block'>
          <p>The block is the a collection of data grouped together and the data contained in the block depends on the type
            of blockchain. For instance, in the Bitcoin blockchain, a block records all of the recent Bitcoin transactions that
            have ocurred since the last block.</p>
          <br />
          <ul style={{ paddingLeft: '20px' }}>
            <li><strong>Data:</strong> The data stored in a block includes information about the sender, receiver, and the number
              of coins transferred. It's important to note that once the data has been written into a block, it becomes nearly
              impossible to alter that data.</li>
            <li><strong>Nonce:</strong> The nonce is a 32-bit (4-byte) field in the block header. The nonce is the variable part of
              the puzzle that miners must solve to write a new block into the blockchain. In other words, miners keep changing the
              nonce to a new random number until they find a hash that meets the current difficulty target. Once the nonce is set,
              it is used along with the transaction data to create a hash.</li>
            <li><strong>Hash:</strong> The hash includes the hash of all the transactions (also known as the Merkle root), the nonce,
              the timestamp, and the hash of the previous block. The hash function is designed to be a one-way function, meaning that
              once data has been input and the hash created, it is virtually impossible to reconstruct the original input data from
              the hash, giving immutability to the blockchain.</li>
          </ul>
        </TextExpander>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Block />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};
