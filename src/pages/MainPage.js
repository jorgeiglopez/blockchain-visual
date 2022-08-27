// import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import Page from '../components/Page';
import AppWidgetSummary from '../sections/main/AppWidgetSummary';
import AppTasks from '../sections/main/AppTasks';
import {Hash} from '../sections/@main/hash';


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
            <Hash />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <AppWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <AppWidgetSummary title="New Users" total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <AppWidgetSummary title="Item Orders" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Tu vieja' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Add SCSS and JS files if required' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
