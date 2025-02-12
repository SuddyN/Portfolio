import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import visuallyHidden from '@mui/utils/visuallyHidden';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box
            sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}
          >
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                variant="text"
                color="info"
                size="small"
                sx={(theme) => ({
                  color: 'primary.main',
                  ...theme.applyStyles('dark', {
                    color: 'primary.light',
                  }),
                })}
              >
                Skillset
              </Button>
              <Button
                variant="text"
                color="info"
                size="small"
                sx={(theme) => ({
                  color: 'primary.main',
                  ...theme.applyStyles('dark', {
                    color: 'primary.light',
                  }),
                })}
              >
                Projects
              </Button>
              <Button variant="text" color="info" size="small">
                HewDraw Remix
              </Button>
              <Button variant="text" color="info" size="small">
                HDR Stage Tools
              </Button>
              <Button variant="text" color="info" size="small">
                StartGG Discord Actions
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <InputLabel htmlFor="email-appbar" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-appbar"
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
              onClick={(e) => {
                window.open('mailto:suddy121800@hotmail.com', '_blank');
              }}
            >
              Email Me
            </Button>
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem
                  sx={(theme) => ({
                    color: 'primary.main',
                    ...theme.applyStyles('dark', {
                      color: 'primary.light',
                    }),
                  })}
                >
                  Skillset
                </MenuItem>
                <MenuItem
                  sx={(theme) => ({
                    color: 'primary.main',
                    ...theme.applyStyles('dark', {
                      color: 'primary.light',
                    }),
                  })}
                >
                  Projects
                </MenuItem>
                <MenuItem>HewDraw Remix</MenuItem>
                <MenuItem>HDR Stage Tools</MenuItem>
                <MenuItem>StartGG Discord Actions</MenuItem>
                <Divider sx={{ my: 3 }} />
                <InputLabel htmlFor="email-menu" sx={visuallyHidden}>
                  Email
                </InputLabel>
                <TextField
                  id="email-menu"
                  hiddenLabel
                  size="small"
                  variant="outlined"
                  placeholder="suddy121800@hotmail.com"
                  fullWidth
                  value="suddy121800@hotmail.com"
                  disabled
                  sx={{ pb: 1 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="small"
                  sx={{ minWidth: 'fit-content' }}
                  onClick={(e) => {
                    window.open('mailto:suddy121800@hotmail.com', '_blank');
                  }}
                >
                  Email Me
                </Button>
                <MenuItem></MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
