import React, { useState } from 'react'
import { Footer, Navbar } from './components';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from "./routes/aboutUs/aboutUs";
// import Activities from "./routes/activities/activities";
import ContactUs from "./routes/contactUs/ContactUs";



import './App.css';
import './index.css';
import Main from './routes/main/mainPage';


const App = () => {
  const [main, setMain] = useState(true);
  const [aboutUs, setAboutUs] = useState(false);
  const [contactUs, setContactUs] = useState(false);
  return (
    <BrowserRouter>
      <div className='gradient__bg'>
        <Navbar main={main} setMain={setMain} aboutUs={aboutUs} setAboutUs={setAboutUs} contactUs={contactUs} setContactUs={setContactUs} />
      </div>
      {main && <Main />}
      {aboutUs && <AboutUs />}
      {contactUs && <ContactUs />}
      <Footer />
      {/* <Routes>
        <Route path="/" element={<Main />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes> */}
    </BrowserRouter>
  )
}

export default App