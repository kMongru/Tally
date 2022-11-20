import * as React from 'react';
import { Paper, Stack, Chip } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';

import './locationCard.css'

import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';


ChartJS.register(ArcElement, Tooltip);

export default function LocationCard({cardDetails}) {

  let data = {}

  if (cardDetails.capacity){
    data = {
      labels: ['Full', 'Available'],
      datasets: [
        {
          label: '# of People',
          data: [cardDetails.counter[0].ctr, cardDetails.capacity - cardDetails.counter[0].ctr],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  }

  return (
    <Paper elevation={5} className = 'zone_container' style={{background: '#fffef2'}}> 
    <h1 className='card-name'>{cardDetails.name}</h1>
    <Stack direction='row' spacing={1}>
        {cardDetails.tags && cardDetails.tags.map((info) => <Chip label={info.title} />
        )}
       </Stack>
       <div style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems:'center'}}>
       <div style={{height: '11rem', width: '11rem'}}><Doughnut data={data} /></div>
       </div>
       <div style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems:'center'}}><h4>Last Updated: {cardDetails.counter[0].ts} <br/></h4></div>
    </Paper>
  );
}

