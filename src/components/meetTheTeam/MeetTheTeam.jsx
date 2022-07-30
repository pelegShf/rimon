import React from 'react'
import { Col } from 'react-bootstrap';
import './meetTheTeam.css';
const MeetTheTeam = (props) => {
  return (
    <Col md={3} gx={0}>
      <div className="box">
        <img className="dir_pictures" src={props.portrait} />
        <div className="box-content">
          <h3 className="name">{props.name}</h3>
          <span className="post">{props.role}</span>
        </div>
      </div>
    </Col>
  )
}

export default MeetTheTeam