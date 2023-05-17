import { Grid, Container } from '@mui/material';
import Page from '../components/Page';
import { HashBlock } from "../sections/@main/hash";
import PageTitle from '../components/PageTitle';
import TextExpander from '../components/TextExpander';

export default function HashFunction() {
  return (
    <Page title="Hash">
      <Container maxWidth="xl">
        <PageTitle title={'Hash function:'} />
        <TextExpander title='the Hash Function'>
          <p>A hash function is a mathematical function that takes an input and returns a fixed-size string of bytes, typically a digest
            that is unique to each unique input. It's a one-way function, which means that it's impossible (or at least extremely
            difficult and resource-intensive) to reverse the process and generate the original input from the hash output. This makes
            hash functions useful in a variety of applications, including cryptography.</p>
          <br />
          <p>The hash function used in Bitcoin is SHA-256 (Secure Hash Algorithm 256-bit), which was developed by the National Security
            Agency (NSA) in the USA. As the name implies, it produces a 256-bit hash, which is a string of 64 hexadecimal characters.</p>
        </TextExpander>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <HashBlock />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
