import '../css/our programs.css';
import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Container, Button, CardActions, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import pro from '../pro/33.jpg';
import pro1 from '../pro/44.jpg';
import pro2 from '../pro/55.jpg';
import pro3 from '../pro/66.jpg';
import pro4 from '../pro/777.jpg';
import pro5 from '../pro/77.jpg';
const programs = [
  {
    title: 'Primary Care',
    description: 'Routine checkups, chronic disease management, and general consultations.',
    image: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/9876/conversions/iStock-489563440-thumb.jpg',
    details: 'Primary Care provides comprehensive health services including routine checkups, management of chronic diseases like diabetes and hypertension, and general medical consultations. Our team of experienced physicians ensures personalized care to maintain your overall well-being.',
  },
  {
    title: 'Women’s Health',
    description: 'Pregnancy care, breast and cervical cancer screenings, and family planning.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCNYyZxeVpUJexg-MXilzwzuL0rlhOuaSyiA&s',
    details: 'Our Women’s Health program offers specialized care for pregnancy, including prenatal and postnatal support. We also provide screenings for breast and cervical cancer, as well as family planning services to empower women in their health decisions.',
  },
  {
    title: 'Pediatrics',
    description: 'Vaccinations, growth monitoring, and treatment of common childhood illnesses.',
    image: pro,
    details: 'Pediatrics focuses on the health of children from infancy to adolescence. Services include vaccinations, growth and development monitoring, and treatment for common illnesses, ensuring your child’s healthy growth.',
  },
  {
    title: 'Cardiology',
    description: 'Heart checkups, ECG, and management of hypertension and diabetes.',
    image: pro1,
    details: 'Cardiology services include heart checkups, ECG tests, and management of conditions like hypertension and diabetes. Our cardiologists provide expert care to prevent and treat heart-related issues.',
  },
  {
    title: 'Surgical Program',
    description: 'Day surgeries, general and specialized operations, and post-operative care.',
    image: pro2,
    details: 'The Surgical Program offers day surgeries and both general and specialized operations. Post-operative care is provided to ensure a smooth recovery and optimal outcomes.',
  },
  {
    title: 'Mental Health',
    description: 'Psychological consultations, treatment for depression and anxiety, and emotional support.',
    image: pro3,
    details: 'Mental Health services include psychological consultations, treatment for depression and anxiety, and emotional support. Our professionals help individuals achieve mental well-being through therapy and counseling.',
  },
  {
    title: 'Emergency Services',
    description: '24/7 emergency care, specialized medical team, and full equipment.',
    image: pro4,
    details: 'Emergency Services provide 24/7 care with a specialized medical team and full equipment. We are equipped to handle urgent medical situations promptly and effectively.',
  },
  {
    title: 'Rehabilitation & Physiotherapy',
    description: 'Physical therapy, post-injury or surgery rehabilitation, and mobility support.',
    image: pro5,
    details: 'Rehabilitation & Physiotherapy offers physical therapy, rehabilitation after injury or surgery, and mobility support. Our therapists work to restore function and improve quality of life.',
  },
];

const OurPrograms = () => {
  const [open, setOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleLearnMore = (program) => {
    setSelectedProgram(program);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProgram(null);
  };

  return (
    <Container sx={{ py: 6 }}>
      
      <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-hospital-room-with-long-row-of-beds-image_2953664.jpg"
        alt="Our Programs"
        style={{ width: '100%', borderRadius: '30px', marginBottom: '30px',height:'300px' }}
      />
      <Typography variant="body1" sx={{ mb: 4 }} color=" #483d8a"> <h1>OurPrograms</h1></Typography>
      <Typography variant="body1" sx={{ mb: 4 } }>
        <p>
          Commitment to empowering individuals and communities through a diverse range of innovative and impactful programs. Our offerings span various fields, including education, professional development, community engagement, and personal growth. Each program is thoughtfully designed to address real-world challenges, foster creativity, and build essential skills for success in an ever-evolving world. Whether you're seeking to enhance your career, contribute to your community, or explore new passions, our programs provide the tools, support, and opportunities to help you thrive.
        </p>
      </Typography>
       
      <Grid container spacing={3}>
        {programs.map((program, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                height="250"
                image={program.image}
                alt={program.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom color="#483d8a">
                  {program.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {program.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => handleLearnMore(program)}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* نافذة منبثقة للتفاصيل */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{selectedProgram?.title}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            {selectedProgram?.details}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default OurPrograms;
