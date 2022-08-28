// import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import Page from '../components/Page';
import AppWidgetSummary from '../sections/main/AppWidgetSummary';
import AppTasks from '../sections/main/AppTasks';
import { HashBlock } from '../sections/@main/hash';


export default function MainPage() {
  // const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hash function explained
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
