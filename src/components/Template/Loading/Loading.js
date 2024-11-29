import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

// Skeleton uchun styled komponent
const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover || '#e0e0e0',
  borderRadius: theme.shape?.borderRadius || '4px',
  height: height || '20px',
}));

export default function Loading() {
  return (
    <div style={{ padding: '16px', minHeight: '100vh', paddingLeft:  40 }}>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
          <Grid item xs={4}>
            <Skeleton height={210} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
