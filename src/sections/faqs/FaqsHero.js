import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Stack, InputAdornment, Button } from '@mui/material';
// components
import Iconify from '../../components/Iconify';
import InputStyle from '../../components/InputStyle';
import { MotionContainer, TextAnimate, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundImage: 'url(/assets/overlay.svg), url(/assets/landing-hero.jpg)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0,
  },
}));

const ContentStyle = styled(Stack)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function FaqsHero() {
  return (
    <RootStyle>
      <Container component={MotionContainer} sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle spacing={5}>
          <div>
            <TextAnimate text="Your" sx={{ color: 'primary.main' }} variants={varFade().inRight} />
            <br />
            <Box sx={{ display: 'inline-flex', color: 'primary.light' }}>
              <TextAnimate text="home" sx={{ mr: 2 }} />
              <TextAnimate text="for" sx={{ mr: 2 }} />
              <TextAnimate text="help" />
            </Box>
          </div>

          <m.div variants={varFade().inRight}>
            <Stack spacing={1} direction={{ xs: 'column', md: 'row' }}>
              <InputStyle
                stretchStart={280}
                placeholder="Search fundraisers"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Iconify icon={'eva:search-fill'} sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: 'common.white',
                  },
                }}
              />
              <Button sx={{ maxWidth: 150, margin: 'auto' }} variant="contained" startIcon={<Iconify icon={'bx:map-pin'} />}>
                View On Map
              </Button>
            </Stack>
          </m.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
