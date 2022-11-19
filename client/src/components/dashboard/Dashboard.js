import React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Item from '@mui/material/ListItem';

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
