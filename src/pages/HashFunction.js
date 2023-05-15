import { Grid, Container } from '@mui/material';
import Page from '../components/Page';
import { HashBlock } from "../sections/@main/hash";
import PageTitle from '../components/PageTitle';


export default function HashFunction() {
  return (
    <Page title="Hash">
      <Container maxWidth="xl">
      <PageTitle title={'Hash function:'}></PageTitle>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <HashBlock />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
