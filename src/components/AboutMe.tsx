import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import visuallyHidden from '@mui/utils/visuallyHidden';

export default function AboutMe() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',

        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 16 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            Hi,&nbsp;I&apos;m&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              Nathan&nbsp;
            </Typography>
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              Sudduth
            </Typography>
          </Typography>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '100%' },
            }}
          >
            I&apos;m a Full-Stack Software Engineer, Game Developer, Event
            Organizer, Community Leader, and life-long learner!
          </Typography>
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '100%' },
            }}
          >
            I graduated from NC State University with a Masters of Computer
            Science.
            <br />
            In my free time, I like to create, lead, and experiment. I maintain
            several projects related to the Super Smash Bros. Ultimate gameplay
            mod called HewDraw Remix, run local tournaments and fundraising
            events, and tinker with Single Board Computers to improve my home
            and support other projects!
          </Typography>
          <Typography
            // variant="caption"
            color="text.secondary"
            sx={{ pt: 2, textAlign: 'center' }}
          >
            I&apos;m searching for Full-Stack Software Engineer roles!
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            useFlexGap
            sx={{ width: { xs: '100%', sm: '350px' } }}
          >
            <InputLabel htmlFor="email-aboutme" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-aboutme"
              hiddenLabel
              size="small"
              variant="outlined"
              placeholder="suddy121800@hotmail.com"
              fullWidth
              value="suddy121800@hotmail.com"
              disabled
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: 'fit-content' }}
              onClick={() => {
                window.open('mailto:suddy121800@hotmail.com', '_blank');
              }}
            >
              Email Me
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
