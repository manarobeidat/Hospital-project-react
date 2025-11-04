import'../css/our programs.css';
import React from 'react';
import { Grid, Card, CardContent, Typography, Container } from '@mui/material';

const programs = [
  {
    title: 'Primary Care',
    description: 'Routine checkups, chronic disease management, and general consultations.',
  },
  {
    title: 'Women’s Health',
    description: 'Pregnancy care, breast and cervical cancer screenings, and family planning.',
  },
  {
    title: 'Pediatrics',
    description: 'Vaccinations, growth monitoring, and treatment of common childhood illnesses.',
  },
  {
    title: 'Cardiology',
    description: 'Heart checkups, ECG, and management of hypertension and diabetes.',
  },
  {
    title: 'Surgical Program',
    description: 'Day surgeries, general and specialized operations, and post-operative care.',
  },
  {
    title: 'Mental Health',
    description: 'Psychological consultations, treatment for depression and anxiety, and emotional support.',
  },
  {
    title: 'Emergency Services',
    description: '24/7 emergency care, specialized medical team, and full equipment.',
  },
  {
    title: 'Rehabilitation & Physiotherapy',
    description: 'Physical therapy, post-injury or surgery rehabilitation, and mobility support.',
  },
];

const OurPrograms = () => {
  return (
    
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Programs
      </Typography>
      <Grid container spacing={4}>
        {programs.map((program, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {program.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {program.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurPrograms;
