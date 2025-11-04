
import './App.css';
import Nav from './componants/nav.js';
import Home from './componants/home.js';
import ContactUs from './componants/contact us.js';

import OurDoctors from './componants/OurDoctors.js';
import OurPrograms from './componants/our programs.js';
import WhoWeAre from './componants/who are we.js';
import Footer from './componants/footer.js';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/contact us" Component={ContactUs} />
        
        <Route path="/our doctors" Component={ OurDoctors} />
        <Route path="/our programs" Component={OurPrograms} />
        <Route path="/who we are" Component={WhoWeAre} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
