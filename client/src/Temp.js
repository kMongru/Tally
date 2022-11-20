import { react, useState }from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Building from './components/card/Building'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      Created with love by 
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [type, setType] = useState(0)
  const handleChange = (val) => { setType(val) }

  const temp = {
    name: "Amit Chakma Engineering Building (ACEB)",
    address: "Medway, 1151 Richmond St, London, ON N6A 3K7",
    lat: "43.0039237",
    lon: "-81.2763313",
    picture: "https://perkinswill.com/wp-content/uploads/2020/04/AmitChakma_I_LisaLogan_M23.jpg",

    parts: [
      {
        id: 1,
        name: "Second Floor",
        capacity: 70,
        picture: null,
        description: "Second Floor study area",
        counter: {
          count: 60,
          update: "2022-11-18  7:17:19 AM"
        },
        tags: [
          {
            title: "Loud",
            icon: "Campaign",
            color: "#9c27b0"
          },
          {
            title: "Study",
            icon: "LibraryBooks",
            color: "#f44336"
          }
        ]
      },
      {
        id: 2,
        name: "Third Floor",
        capacity: 50,
        picture: null,
        description: "Third Floor study area",
        tags: [
          {
            title: "Whispers",
            icon: "VolumeUp",
            color: "#673ab7"
          },
          {
            title: "Study",
            icon: "LibraryBooks",
            color: "#f44336"
          }
        ]
      }
    ]
  }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" minWidth="md" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Search for Buildings
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <TextField
                  fullWidth
                  id="Building Name or Keywords..."
                  label="Building Name or Keywords..."
                  name="lastName"
                  autoComplete="location"
                />
              </Grid>
              <Grid item md={12}>
                <Select
                  labelId="type"
                  id="type"
                  value={type}
                  label="Type"
                  onChange={handleChange}
                  fullWidth
                >
                  <MenuItem value={0}>All</MenuItem>
                  <MenuItem value={1}>Study</MenuItem>
                  <MenuItem value={2}>Class</MenuItem>
                  <MenuItem value={3}>Resturant</MenuItem>
                  <MenuItem value={4}>Fitness</MenuItem>
                  <MenuItem value={5}>Clinic</MenuItem>
                  <MenuItem value={6}>Silent</MenuItem>
                  <MenuItem value={7}>Whispers</MenuItem>
                  <MenuItem value={8}>Loud</MenuItem>
                </Select>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Filter
              </Button>
            </Grid>
          </Box>
        </Box>
        <Grid container>
          <Building data={temp} width={600}></Building>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}