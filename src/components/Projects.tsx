import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import {
  DevicesRounded,
  Twitter,
  YouTube,
  GitHub,
  GamepadRounded,
  NotificationsRounded,
} from '@mui/icons-material';

const items = [
  {
    icon: <GamepadRounded />,
    title: 'HewDraw Remix',
    description: (
      <>
        A comprehensive gameplay overhaul mod for the Super Smash Bros.
        Ultimate, which overhauls the game&apos;s engine, reworks characters and
        mechanics, and adds new stages and music.
      </>
    ),
    imageLight: `url(/images/HewDrawRemix.png)`,
    imageDark: `url(/images/HewDrawRemix.png)`,
    github: 'https://github.com/HDR-Development/HewDraw-Remix',
    liveApp: null,
    youtube: 'https://www.youtube.com/@HewDrawRemix',
    twitter: 'https://x.com/HewDrawRemix',
  },
  {
    icon: <DevicesRounded />,
    title: 'HDR Stage Tools',
    description: (
      <>
        A React-based single-page web app which interfaces with Desmos&apos; API
        and open source resources for HewDraw Remix to graph stage data and
        simulate gameplay elements to the benefit of players ane event
        organizers.
      </>
    ),
    imageLight: `url(/images/HDRStageTools.png)`,
    imageDark: `url(/images/HDRStageTools.png)`,
    github: 'https://github.com/SuddyN/HDRStageTools',
    liveApp: 'https://hdr.suddy.dev',
    youtube: null,
    twitter: null,
  },
  {
    icon: <NotificationsRounded />,
    title: 'Start.GG Discord Actions',
    description: (
      <>
        A Discord Bot written in Python and executed via GitHub Actions, which
        interfaces with the Start.GG API and Discord API to post daily and
        weekly updates on upcoming tournament events for any competitive video
        game on Start.GG&apos;s website.
      </>
    ),
    imageLight: `url(/images/StartGGDiscordActions.png)`,
    imageDark: `url(/images/StartGGDiscordActions.png)`,
    github: 'https://github.com/SuddyN/StartGGDiscordActions',
    liveApp: null,
    youtube: null,
    twitter: null,
  },
];

interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        background:
          'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
        color: 'hsl(0, 0%, 100%)',
        borderColor: theme.palette.primary.light,
        '& .MuiChip-label': {
          color: 'hsl(0, 0%, 100%)',
        },
        ...theme.applyStyles('dark', {
          borderColor: theme.palette.primary.dark,
        }),
      },
    },
  ],
}));

interface MobileLayoutProps {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  selectedFeature: (typeof items)[0];
}

export function MobileLayout({
  selectedItemIndex,
  handleItemClick,
  selectedFeature,
}: MobileLayoutProps) {
  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 0.5, overflow: 'auto' }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined">
        <Box
          sx={(theme) => ({
            mb: 2,
            backgroundSize: 'contain',
            minHeight: 280,
            backgroundImage: 'var(--items-imageLight)',
            ...theme.applyStyles('dark', {
              backgroundImage: 'var(--items-imageDark)',
            }),
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          })}
          style={
            items[selectedItemIndex]
              ? ({
                  '--items-imageLight': items[selectedItemIndex].imageLight,
                  '--items-imageDark': items[selectedItemIndex].imageDark,
                } as React.CSSProperties)
              : {}
          }
        />
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: 'text.primary', fontWeight: 'medium' }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
          {items[selectedItemIndex].github && (
            <Button
              variant="contained"
              color="primary"
              size="small"
              fullWidth
              sx={{ flexShrink: 0, mb: 1 }}
              onClick={() => {
                window.open(items[selectedItemIndex].github ?? '/', '_blank');
              }}
            >
              <GitHub sx={{ mr: 1 }} />
              Source Code
            </Button>
          )}
          {items[selectedItemIndex].liveApp && (
            <Button
              variant="contained"
              color="primary"
              size="small"
              fullWidth
              sx={{ flexShrink: 0, mb: 1 }}
              onClick={() => {
                window.open(items[selectedItemIndex].liveApp ?? '/', '_blank');
              }}
            >
              <DevicesRounded sx={{ mr: 1 }} />
              Visit Live App
            </Button>
          )}
          {items[selectedItemIndex].twitter && (
            <Button
              variant="contained"
              color="primary"
              size="small"
              fullWidth
              sx={{ flexShrink: 0, mb: 1 }}
              onClick={() => {
                window.open(items[selectedItemIndex].twitter ?? '/', '_blank');
              }}
            >
              <Twitter sx={{ mr: 1 }} />
              Twitter
            </Button>
          )}
          {items[selectedItemIndex].youtube && (
            <Button
              variant="contained"
              color="primary"
              size="small"
              fullWidth
              sx={{ flexShrink: 0, mb: 1 }}
              onClick={() => {
                window.open(items[selectedItemIndex].youtube ?? '/', '_blank');
              }}
            >
              <YouTube sx={{ mr: 1 }} />
              YouTube
            </Button>
          )}
        </Box>
      </Card>
    </Box>
  );
}

export default function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="projects" sx={{ py: { xs: 10, sm: 16 } }}>
      <Box sx={{ width: { sm: '100%', md: '60%' } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Personal Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
        >
          {/* TODO: free space for content here */}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          gap: 2,
        }}
      >
        <div>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 2,
              height: '100%',
            }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: '100%',
                    width: '100%',
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: 'action.selected',
                  },
                ]}
              >
                <Box
                  sx={[
                    {
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'left',
                      gap: 1,
                      textAlign: 'left',
                      textTransform: 'none',
                      color: 'text.secondary',
                    },
                    selectedItemIndex === index && {
                      color: 'text.primary',
                    },
                  ]}
                >
                  {icon}

                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="body2">{description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            width: { xs: '100%', md: '70%' },
            height: 'var(--items-image-height)',
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              position: 'relative',
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{
                justifyContent: 'left',
                color: 'text.secondary',
                position: 'absolute',
              }}
            >
              {items[selectedItemIndex].github && (
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ flexShrink: 0 }}
                  onClick={() => {
                    window.open(
                      items[selectedItemIndex].github ?? '/',
                      '_blank'
                    );
                  }}
                >
                  <GitHub sx={{ mr: 1 }} />
                  Source Code
                </Button>
              )}
              {items[selectedItemIndex].liveApp && (
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ flexShrink: 0 }}
                  onClick={() => {
                    window.open(
                      items[selectedItemIndex].liveApp ?? '/',
                      '_blank'
                    );
                  }}
                >
                  <DevicesRounded sx={{ mr: 1 }} />
                  Visit Live App
                </Button>
              )}
              {items[selectedItemIndex].twitter && (
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ flexShrink: 0 }}
                  onClick={() => {
                    window.open(
                      items[selectedItemIndex].twitter ?? '/',
                      '_blank'
                    );
                  }}
                >
                  <Twitter sx={{ mr: 1 }} />
                  Twitter
                </Button>
              )}
              {items[selectedItemIndex].youtube && (
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ flexShrink: 0 }}
                  onClick={() => {
                    window.open(
                      items[selectedItemIndex].youtube ?? '/',
                      '_blank'
                    );
                  }}
                >
                  <YouTube sx={{ mr: 1 }} />
                  YouTube
                </Button>
              )}
            </Stack>
            <Box
              sx={(theme) => ({
                m: 'auto',
                width: 500,
                height: 420,
                backgroundSize: 'contain',
                backgroundImage: 'var(--items-imageLight)',
                ...theme.applyStyles('dark', {
                  backgroundImage: 'var(--items-imageDark)',
                }),
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
              })}
              style={
                items[selectedItemIndex]
                  ? ({
                      '--items-imageLight': items[selectedItemIndex].imageLight,
                      '--items-imageDark': items[selectedItemIndex].imageDark,
                    } as React.CSSProperties)
                  : {}
              }
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
