import React from 'react'
import { Navbar } from './components';
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

  return (
    <BrowserRouter>
      <div className='gradient__bg'>
        <Navbar />
      </div>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  )
}

export default App