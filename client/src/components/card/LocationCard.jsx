import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Whatshot from '@mui/icons-material/Whatshot';

export default function LocationCard({cardDetails}) {

  
  return (
    <Card sx={{ maxWidth: '100px' }}>
      <CardContent>
        <h1>{cardDetails.name}</h1>
      <Stack direction='row' spacing={1}>
        {cardDetails.tags && cardDetails.tag.map(() => {
          <Chip label={cardDetails.title} color={cardDetails.color}/>
        })}
       </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}