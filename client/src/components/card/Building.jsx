import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Whatshot from '@mui/icons-material/Whatshot';

export default function Building(props) {
  return (
    <Card sx={{ maxWidth: props.width }}>
      <CardMedia
        component="img"
        height="140"
        image={props.data.picture}
        alt="Picture of building"
      />
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          {props.data.name}
            <Avatar sx={{ bgcolor: "#ff5722" }}>
                <Whatshot />
            </Avatar>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.data.address}
        </Typography>
        <br></br>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}