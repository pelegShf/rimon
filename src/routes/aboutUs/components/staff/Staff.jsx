import React from 'react';
import Phoenix from '../../../../assets/phoenix.avif';
import Bob from '../../../../assets/bob.jpg';
import Hangman from '../../../../assets/hangman.webp';
import Bradley from '../../../../assets/bradley.jpg';
import MeetTheTeam from '../../../../components/meetTheTeam/MeetTheTeam';
import './staff.css';
import { Col, Row } from 'react-bootstrap';





const Staff = () => {
  return (
    <div className='directors__container'>
      <Row className='gx-0'>
        <Col  md={11}>
          <Row className="row trustees gx-0" >
            <MeetTheTeam portrait={Phoenix} name="Phoenix" role='מנכל וייזם החווה' _class='staff' />
            <MeetTheTeam portrait={Bob} name="Bob" role='Captin' _class='staff' />
            <MeetTheTeam portrait={Bradley} name="Bradley" role='WISO' _class='staff' />
            <MeetTheTeam portrait={Hangman} name="Hangman" role='Captin Douce' _class='staff'/>
          </Row>
        </Col>
        <Col className="rowTitle fs-4 text-center" md={1}>חבר<br/>נאמנים</Col>
      </Row>

    </div>
  )
}

export default Staff






