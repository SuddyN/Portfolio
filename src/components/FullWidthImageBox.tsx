import * as React from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { Tooltip } from '@mui/material';

export interface FullWidthImageBoxProps {
  label: string;
  src: string;
  url?: string;
}

export default function FullWidthImageBox(props: FullWidthImageBoxProps) {
  const StyledBox = styled('div')(({ theme }) => ({
    alignSelf: 'center',
    width: '100%',
    height: 400,
    borderRadius: theme.shape.borderRadius,
    outline: '6px solid',
    outlineColor: 'hsla(0, 0.00%, 83.10%, 0.20)',
    border: '1px solid',
    borderColor: theme.palette.grey[200],
    boxShadow: '0 0 12px 8px hsla(0, 0.00%, 84.30%, 0.20)',
    backgroundImage: `url(${props.src})`,
    backgroundSize: 'cover',
    [theme.breakpoints.up('sm')]: {
      height: 700,
    },
    ...theme.applyStyles('dark', {
      boxShadow: '0 0 24px 12px hsla(0, 0.00%, 49.00%, 0.20)',
      backgroundImage: `url(${props.src})`,
      outlineColor: 'hsla(0, 0.00%, 51.80%, 0.10)',
      borderColor: theme.palette.grey[700],
    }),
  }));

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 4, sm: 6 },
      }}
    >
      <Tooltip title={props.label}>
        <StyledBox
          id="image"
          aria-label={props.label}
          sx={{ cursor: props.url ? 'pointer' : undefined }}
          onClick={() => {
            if (!props.url) return;
            window.open(props.url, '_blank');
          }}
        />
      </Tooltip>
    </Container>
  );
}
