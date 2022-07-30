import React from 'react';
import './directors.css';
import Portarit from '../../../../assets/portait.jpg';
import ShacharAvishai from '../../../../assets/ourTeam/shacharAvishaiS.jpeg';
import Batel from '../../../../assets/ourTeam/batelS.jpg';
import Iceman from '../../../../assets/ourTeam/ayaGreensS.jpg';
import MeetTheTeam from '../../../../components/meetTheTeam/MeetTheTeam';

import { Col, Row } from 'react-bootstrap';



const Directors = () => {
  return (
    <div className='directors__container'>
      <Row className='gx-0 border-bottom'>
        <Col md={11}>
          <Row className="row trustees gx-0" >
            <MeetTheTeam portrait={Portarit} name="ניר אמיתי" role='מנכל וייזם החווה'  _class='directors'/>
            <MeetTheTeam portrait={ShacharAvishai} name="שחר אבישי" role='יועץ פיננסי' _class='directors'/>
            <MeetTheTeam portrait={Batel} name="בת אל תורכיה" role='מנהלת אדמיניסטרטיבית ' _class='directors'/>
            <MeetTheTeam portrait={Iceman} name="Iceman" role='Captin Douce' _class='directors'/>
          </Row>
        </Col>
        <Col className="rowTitle fs-4 text-center" md={1}>ועד<br /> מנהל</Col>
      </Row>
    </div>
  )
}

export default Directors






