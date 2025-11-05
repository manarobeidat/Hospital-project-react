import '../css/home.css';
// Add these imports for react-slick to work properly
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hospitalImage from '../images/7-3.jpg';
import hospitalImage2 from '../hos/1.jpg';
import hospitalImage3 from '../hos/2.jpg';
import hospitalImage4 from '../hos/3.jpg';

import React from "react";
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Card1 () {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={hospitalImage4}
          alt="Hospital Image 4"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Medical Records Management
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Facilitates the secure storage and retrieval of patient medical records,
             including past treatments, medications, and test results.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function Card2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={hospitalImage3}
          alt="Appointment Scheduling"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Appointment Scheduling
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Enables patients to schedule appointments with doctors,
            view available time slots, and receive reminders for upcoming appointments
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function Card3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={hospitalImage2}
          alt="Patient Registration"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Patient Registration
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           Allows staff to register new patients by entering personal details such as full name, 
            national ID, date of birth, contact information,
            and medical history. This creates a digital medical record for future reference.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function Home() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
   
    return (
        <div className="home-container">
            <img src={hospitalImage} alt="Hospital" className="hospital-image" />
            <h1 className="welcome-message">Welcome to Our Hospital</h1>
            <p className="description">
                We are committed to providing the best healthcare services to our community.
                Our team of experienced doctors and staff are here to ensure your well-being.
                Our hospital offers a wide range of medical services and state-of-the-art facilities to cater to your health needs.
                We provide our services with compassion and excellence.
            </p>
            <button className="learn-more-button">Learn More</button>
            <div className="slider-container">
              <Slider {...settings}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <Card1 />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <Card2 />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <Card3 />
                </div>
              </Slider>
            </div>
            <div style={{
              maxWidth: '500px',
              margin: '50px auto',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              backgroundColor: '#f8f9fa'
            }}>
              <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#007bff' }}>Book an Appointment</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter your name" 
                    style={{
                      borderRadius: '5px',
                      border: '1px solid #ced4da',
                      padding: '10px'
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicId">
                  <Form.Label>ID</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter your ID" 
                    style={{
                      borderRadius: '5px',
                      border: '1px solid #ced4da',
                      padding: '10px'
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check 
                    type="checkbox" 
                    label="Confirm Information" 
                    style={{
                      fontSize: '14px'
                    }}
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    fontSize: '16px'
                  }}
                >
                  Book Appointment
                </Button>
              </Form>
            </div>
            
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#007bff' }}>Images Hospital</h2>
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <Image
    src="https://www.shutterstock.com/image-photo/black-surgeon-giving-instruction-medical-260nw-400845949.jpg"
    rounded
    style={{ width: '800px', height: '300px', objectFit: 'cover' }}
  />
  <Image
    src="https://www.agingproject.uniupo.it/wp-content/uploads/2021/12/intentional-rounding--1080x675.jpg"
    rounded
    style={{ width: '800px', height: '300px', objectFit: 'cover' }}
  />
  <Image
    src="https://trauma-news.com/wp-content/uploads/2018/10/Stanford-item-header-image.png"
    rounded
    style={{ width: '800px', height: '300px', objectFit: 'cover' }}
      />
       </div> 
    </div> 
    );
}

export default Home;
