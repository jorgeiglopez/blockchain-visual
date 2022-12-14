import { Grid, Container, Typography } from '@mui/material';
import Page from '../components/Page';
import { HashBlock } from "../sections/@main/hash";


export default function HashFunction() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hash function:
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <HashBlock />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
