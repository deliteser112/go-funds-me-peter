// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { FaqsHero, FaqsCategory, FaqsList } from '../sections/faqs';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Faqs() {
  return (
    <Page title="Home">
      <RootStyle>
        <FaqsHero />

        <Container sx={{ mt: 15, mb: 10, position: 'relative' }}>
          <FaqsCategory />

          <Typography variant="h3" sx={{ mb: 5, textAlign: 'center' }}>
            Crowdsourcing for Humanity
          </Typography>

          <Grid container spacing={10}>
            <Grid item xs={12}>
              <FaqsList />
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}