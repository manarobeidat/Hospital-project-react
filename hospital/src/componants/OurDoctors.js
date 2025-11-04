import { Image } from 'primereact/image';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import '../css/our-doctors.css';
import hospitalImagedrs from '../dr/dr1.jpg';
import hospitalImagedrs2 from '../dr/dr2.jpg';
import hospitalImagedrs3 from '../dr/dr3.jpg';
import hospitalImagedrs4 from '../dr/dr4.jpg';
import hospitalImagedrs5 from '../dr/dr5.jpg';
import hospitalImagedrs6 from '../dr/dr6.jpg';
import hospitalImagedrs7 from '../dr/dr7.jpg';
import hospitalImagedrs8 from '../dr/dr8.jpg';
import hospitalImagedrs9 from '../dr/dr9.jpg';
import hospitalImagedrs10 from '../dr/dr10.jpg' ; 




// Define an array of doctor data for easier management and to avoid repetition
const doctors = [
  {
    image: hospitalImagedrs,
    name: "Dr. Ahmed Al-Rashid",
    description: "Dr. Ahmed is an expert in heart health and advanced cardiac treatments"
  },
  {
    image:hospitalImagedrs2 , // Placeholder - replace with actual image URL
    name: "Dr. Maryam Al-Farsi",
    description: "Dr. Maryam specializes in pediatric care and child development."
  },
  {
    image: hospitalImagedrs3, // Placeholder
    name: "Dr. Ali Al-Hamadi",
    description: "Dr. Ali specializes in orthopedic surgery and sports medicine."
  },
  {
    image: hospitalImagedrs4, // Placeholder
    name: "Dr. Aisha Al-Mansoori",
    description: "Dr. Aisha specializes in women's health and reproductive medicine."
  },
  {
    image: hospitalImagedrs5, // Placeholder
    name: "Dr. Omar Al-Badri",
    description: "Dr. Omar specializes in internal medicine and chronic disease management."
  },
  {
    image: hospitalImagedrs6, // Placeholder
    name: "Dr. Layla Al-Mansoori",
    description: "Dr. Layla specializes in dermatology and skin care."
  },
  {
    image: hospitalImagedrs7, 
    name: "Dr. Khalid Al-Mansoori",
    description: "Dr. Khalid specializes in cardiology and heart health."
  },
  {
    image: hospitalImagedrs8, // Placeholder
    name: "Dr. Fatima Al-Zahra",
    description: "Dr. Fatima specializes in obstetrics and gynecology."
  },
  {
    image: hospitalImagedrs9, // Placeholder
    name: "Dr. Samir Al-Mansoori",
    description: "Dr. Samir specializes in urology and male reproductive health."
  },
  {
    image: hospitalImagedrs10, // Placeholder
    name: "Dr. Layla Al-Mansoori",
    description: "Dr. Layla specializes in dermatology and skin care."
  }
];

// Reusable DoctorCard component
function DoctorCard({ doctor }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={doctor.image}
          alt={doctor.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {doctor.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {doctor.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function OurDoctors() {
  return (
    <div className="card flex justify-content-center">
      <Image src="https://www.health-tourism.com/_resources/business/222133/american-hospital-821.jpg" alt="Image" width="100%" height="300px" />
      <div className="card-body">
        <h3 className="card-title">Our Doctors</h3>
        <p className="card-text">
          "Our hospital is proud to have a team of highly qualified doctors specializing in various medical fields. They are committed to delivering exceptional healthcare services with expertise and compassion. Working together, our medical team ensures advanced treatment solutions that prioritize patient comfort and safety."
        </p>
      </div>
      <div>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {doctors.map((doctor, index) => (
              <Grid key={index} size={6}> {/* Consistent size for 2 cards per row */}
                <Item>
                  <DoctorCard doctor={doctor} />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}
