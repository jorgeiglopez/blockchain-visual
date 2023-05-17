import React from 'react';
import { Container } from '@mui/material';
import Page from '../components/Page';
import BlockchainContainer from '../sections/@main/blockchain/BlockchainContainer';
import PageTitle from '../components/PageTitle';
import TextExpander from '../components/TextExpander';

export const Blockchain = () => {
  return (
    <Page title="Blockchain">
      <Container maxWidth="xxl">
        <PageTitle title={'Chain of blocks:'} />
        <TextExpander title='the Blockchain'>
          <p>In summary, blocks are the fundamental elements of a blockchain where data is permanently recorded. Each block is
            linked to the one before and after it (by including the <em>previous block hash</em>), and every time a block is added to
            the blockchain, a hash is created using the blocks data plus the previous block data. This hash is unique to this set of
            transactions and this hash along with the hash of the previous block in the chain are stored in the next block forming
            the "chain" in blockchain.</p>
        </TextExpander>
        <BlockchainContainer />
      </Container>
    </Page>
  );
};
