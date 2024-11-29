import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

// Skeleton uchun styled komponent
const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover || '#e0e0e0',
  borderRadius: theme.shape?.borderRadius || '4px',
  height: height || '20px',
}));

export default function DashboardLayoutBasic() {
  return (
    <div style={{ padding: '16px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Grid container spacing={2}>
        <Grid item xs={5}></Grid>
        <Grid item xs={12}>
          <Skeleton height={14} />
        </Grid>
        <Grid item xs={12}>
          <Skeleton height={14} />
        </Grid>
        <Grid item xs={4}>
          <Skeleton height={100} />
        </Grid>
        <Grid item xs={8}>
          <Skeleton height={100} />
        </Grid>
        <Grid item xs={12}>
          <Skeleton height={150} />
        </Grid>
        <Grid item xs={12}>
          <Skeleton height={14} />
        </Grid>
        <Grid item xs={3}>
          <Skeleton height={100} />
        </Grid>
        <Grid item xs={3}>
          <Skeleton height={100} />
        </Grid>
        <Grid item xs={3}>
          <Skeleton height={100} />
        </Grid>
        <Grid item xs={3}>
          <Skeleton height={100} />
        </Grid>
        <Grid item xs={12}>
          <Skeleton height={14} />
        </Grid>
        <Grid item xs={4}>
          <Skeleton height={100} />
        </Grid>
        <Grid item xs={8}>
          <Skeleton height={100} />
        </Grid>
        <Grid item xs={12}>
          <Skeleton height={150} />
        </Grid>
      </Grid>
    </div>
  );
}
