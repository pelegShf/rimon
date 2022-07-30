import React, { useRef, useEffect } from 'react'
import {  Pictures, Features, WhatRimon, News,Donors,FarmTimeline,ChildrenGoals ,Gallery } from './index';
import { Donate, Footer,Header, Navbar } from '../../components';

import './mainPage.css';
import '../../index.css';
import { Outlet } from 'react-router-dom';

const Main = () => {

  return (
    <>
      <div className='App'>
         <Header />
        <ChildrenGoals />
        <WhatRimon />
        <Features />
        <FarmTimeline />
        <Gallery />
        <Donors />
        <News />
        {/* <Pictures /> */}
        <Footer />
      </div>
    </>
  )
}

export default Main