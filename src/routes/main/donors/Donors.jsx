import React from "react";
import { Container, Row } from "react-bootstrap";
import './donors.css';
import Nike from '../../../assets/donors/nije.png';
import Adidas from '../../../assets/donors/adidas.png';
import Fb from '../../../assets/donors/fb.png';
import Google from '../../../assets/donors/google.png';
import Netflix from '../../../assets/donors/netflix.png';
import SpaceX from '../../../assets/donors/spaceX.png';





const Donors = () => {
    return (
        <Container className="center donors">
            <h2 className="donors_title">התורמים שלנו</h2>
            <div className="ourDonors">
                <div className="donor">
                    <img className="donor_logo" src={Nike} />
                </div>
                <div className="donor">
                    <img className="donor_logo" src={Adidas} />
                </div>
                <div className="donor">
                    <img className="donor_logo" src={Fb} />
                </div>
                <div className="donor">
                    <img className="donor_logo" src={Google} />
                </div>
                <div className="donor">
                    <img className="donor_logo" src={Netflix} />
                </div>
                <div className="donor">
                    <img className="donor_logo" src={SpaceX} />

                </div>
            </div>
        </Container>

    )
}

export default Donors