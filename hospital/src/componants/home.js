import '../css/home.css';
import hospitalImage from '../images/7-3.jpg';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import hospitalImage2 from '../hos/1.jpg';
import hospitalImage3 from '../hos/2.jpg';
import hospitalImage4 from '../hos/3.jpg';
import hospitalImage5 from '../hos/4.jpg';
import hospitalImage6 from '../hos/5.jpg';

const itemData = [ 
    {
        name: "Patient Registration",
        img: hospitalImage2,
        desc: "Allows staff to register new patients by entering personal details such as full name, national ID, date of birth, contact information, and medical history. This creates a digital medical record for future reference."
    },
    {
        name: "Appointment Scheduling",
        img: hospitalImage3,
        desc: "Enables patients to schedule appointments with doctors, view available time slots, and receive reminders for upcoming appointments."
    },
    {
        name: "Medical Records Management",
        img: hospitalImage4,
        desc: "Facilitates the secure storage and retrieval of patient medical records, including past treatments, medications, and test results."
    },
    {
        name: "Billing and Insurance",
        img: hospitalImage5,
        desc: "Streamlines the billing process by generating invoices, processing payments, and managing insurance claims."
    },
    {
        name: "Telemedicine",
        img: hospitalImage6,
        desc: "Allows patients to consult with doctors remotely via video calls, making healthcare more accessible."
    }
];


export default function Home() {
    //const [selectedItem, setSelectedItem] = useState(null);

    //const handleReadMore = (item) => {
        //setSelectedItem(item);
        //alert(`Read more about ${item.name}: ${item.desc}`);
   // };

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
              <h3>images hospital </h3>
             <ImageList sx={{ width:900 , height : 900}} cols={3} rowHeight={164}>
             {itemData.map((item) => (
             <ImageListItem key={item.img}>
              <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
       </ImageList>
  

            
        </div>
    );
}
