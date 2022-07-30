import React from 'react'
import { Card, Button } from 'react-bootstrap';
import HelpingHand from '../../../assets/goals/goal1.jpeg';
import Lifeskills from '../../../assets/goals/goal2.JPG';
import SocialMobility from '../../../assets/goals/goal3.jpg';

import './children_goals.css';



const ChildrenGoals = () => {
    return (
        <div className='goals_container'>
            <div className='childrenGoals'>
                <Card className='goalCard'>
                    <Card.Img className="cardImg" variant="top" src={HelpingHand} />
                    <Card.Body className='card_body'>
                        <Card.Text className='card_title'>צמצום התנהגויות סיכוניות בקרב בני נוער</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='goalCard'>
                    <Card.Img className="cardImg" variant="top" src={Lifeskills} />
                    <Card.Body className='card_body'>
                        <Card.Text className='card_title'>הקניית כישורי חיים ופיתוח מסוגלות אישית ותעסוקתית</Card.Text>
                    </Card.Body>
                </Card>
                <Card className='goalCard'>
                    <Card.Img className="cardImg" variant="top" src={SocialMobility} />
                    <Card.Body className='card_body'>
                        <Card.Text className='card_title'>שילוב והתמדה במסגרות בעתיד כאמצעי ליצירת מוביליות חברתית</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default ChildrenGoals