import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import { Tooltip } from '@mui/material';

const logos: [string, string, boolean?, string?, string?][] = [
  ['/images/html5-plain-wordmark.png', 'HTML 5'],
  ['/images/css3-plain-wordmark.png', 'CSS 3'],
  ['/images/javascript-plain.png', 'JavaScript'],
  ['/images/typescript-plain.png', 'TypeScript'],
  ['/images/react-original-wordmark.png', 'React'],
  [
    '/images/nextjs-line.png',
    'NextJS',
    true,
    undefined,
    'brightness(0) invert(1)',
  ],
  ['/images/csharp-plain.png', 'C#'],
  ['/images/dotnetcore-original.png', '.NET Core Platform'],
  [
    '/images/rust-plain.png',
    'Rust',
    true,
    undefined,
    'brightness(0) invert(1)',
  ],
];

export default function LogoCollection() {
  const theme = useTheme();
  return (
    <Box
      id="logoCollection"
      sx={{
        pt: { xs: 4, sm: 6 },
      }}
    >
      <Grid container sx={{ justifyContent: 'center', mt: 0.0, opacity: 1.0 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <Tooltip title={logo[1]}>
              <img
                src={logo[0]}
                alt={logo[1]}
                style={{
                  width: 'auto',
                  height: '100px',
                  margin: '16px 16px',
                  opacity: 1.0,
                  filter: !logo[2]
                    ? undefined
                    : theme.palette.mode === 'light'
                    ? logo[3]
                    : logo[4],
                }}
              />
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
