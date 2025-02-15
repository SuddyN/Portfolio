import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import visuallyHidden from '@mui/utils/visuallyHidden';

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        pt: { xs: 10, sm: 16 },
        pb: { xs: 4, sm: 6 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Typography
              variant="body2"
              gutterBottom
              sx={(theme) => ({
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
                fontWeight: 600,
                mt: 2,
              })}
            >
              Nathan Sudduth
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              I&apos;m searching for Full-Stack Software Engineer roles!
            </Typography>
            <InputLabel htmlFor="email-footer" sx={visuallyHidden}>
              Email
            </InputLabel>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="email-footer"
                hiddenLabel
                size="small"
                variant="outlined"
                placeholder="suddy121800@hotmail.com"
                fullWidth
                value="suddy121800@hotmail.com"
                disabled
                sx={{ width: '250px' }}
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ flexShrink: 0 }}
                onClick={() => {
                  window.open('mailto:suddy121800@hotmail.com', '_blank');
                }}
              >
                Email Me
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          {/* <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Projects
          </Typography>
          <Link color="text.secondary" variant="body2">
            HewDraw Remix
          </Link>
          <Link color="text.secondary" variant="body2">
            HDR Stage Tools
          </Link>
          <Link color="text.secondary" variant="body2">
            Start.GG Discord Actions
          </Link> */}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>{/* TODO: free space for content here */}</div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >
          <IconButton
            color="inherit"
            size="medium"
            href="https://github.com/SuddyN"
            target="_blank"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="medium"
            href="https://www.linkedin.com/in/nathan-sudduth-46329b146/"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
