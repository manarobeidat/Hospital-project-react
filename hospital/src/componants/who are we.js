import '../css/who are we.css'; // Added space after 'import' for proper syntax
import hospitalImagedm from '../images/images.jpg';

export default function WhoWeAre() {
    return (
        <div className="who-we-are">
            <img src={hospitalImagedm} alt="Image" width="100%" height="300px" /> {/* Changed 'Image' to 'img' (lowercase), and fixed 'src=' to 'src={}' for proper JSX expression */}
            <h1> About us</h1>
            <p><h6> With over 20 years of experience in healthcare</h6>  the Virtual University Hospital delivers 100% safe and high-quality medical services. The idea of establishing the hospital emerged alongside the founding of the Virtual University of Science and Technology, aiming to become a center of excellence in advanced healthcare and a comprehensive referral hub locally and across the Middle East.
           The hospital was designed to meet the latest global standards in hospital architecture. It features a main tower with fifteen floors and three low-rise buildings, covering a total area of 95,583 square meters. The hospital has an operational capacity of 678 beds, expandable to 819 beds in emergency situations.
            The hospital is committed to providing integrated healthcare services, supported by cutting-edge medical technologies and highly qualified staff, setting a benchmark for excellence in the region.</p>
           <h1> Vision</h1>
           <p> We aspire to achieve leadership and excellence in delivering healthcare services at the regional and international levels.</p>
           <h1> Mission</h1>
           <p> 
         To provide comprehensive, safe, high-quality, accessible, and cost-effective healthcare services through qualified professionals, meeting the needs of the community in an environment where healthcare integrates with education, training, and scientific research.</p>
           <h1>Core Values </h1>
           <p> 

          Responsibility
         Excellence
         Sustainability
          Belonging
         Integrity
           Accountability
          Distinction
           Teamwork
            Justice</p>
        </div>
    );
}
