import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LogoCollection from './LogoCollection';
import FullWidthImageBox from './FullWidthImageBox';
import {
  AllInclusiveRounded,
  ApiRounded,
  AutoAwesomeRounded,
  BugReportRounded,
  LanguageRounded,
  SchoolRounded,
} from '@mui/icons-material';

const items = [
  {
    icon: <ApiRounded />,
    title: 'RESTful APIs',
    description:
      '2+ years of experience engineering APIs that conform to RESTful standards, in C# with ASP.NET, EF Core, and PostgreSQL or MySQL.',
  },
  {
    icon: <LanguageRounded />,
    title: 'Modern Web Development',
    description:
      '2+ years of experience developing modern Web UI with TypeScript/JavaScript & React.',
  },
  {
    icon: <AutoAwesomeRounded />,
    title: 'CSS Frameworks',
    description:
      'Varied experience with CSS frameworks such as Tailwind CSS, Material UI, PrimeReact, and Sass.',
  },
  {
    icon: <AllInclusiveRounded />,
    title: 'CI/CD & Version Control',
    description:
      'Familiarity with CI/CD using SonarCube and GitHub Actions, Tagging, & Releases.',
  },
  {
    icon: <BugReportRounded />,
    title: 'Test Oriented Development',
    description:
      '2+ years of experience writing Unit, Integration, and End-to-End Tests with tools like XUnit, Jest, React Testing Library, Selenium, and Cucumber.',
  },
  {
    icon: <SchoolRounded />,
    title: 'Lifelong Learning',
    description:
      'Passionate for learning new tools, developing skills, and collaborating to build the team up!',
  },
];

export default function Skillset() {
  return (
    <Box
      id="skillset"
      sx={{
        py: { xs: 10, sm: 16 },
        color: 'text.primary',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Skillset
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {/* TODO: put some text here */}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
      <LogoCollection />
      <FullWidthImageBox
        label="Click to open my GitHub"
        src="/images/github-dark.png"
        url="https://github.com/SuddyN"
      />
    </Box>
  );
}
