import * as React from 'react';
import { Divider } from '@mui/material';

export const RefForwardingDivider = React.forwardRef(
  (props, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref}>
        <Divider />
      </div>
    );
  }
);
