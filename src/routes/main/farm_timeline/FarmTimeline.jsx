import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsFacebook, BsGithub, BsFillLightningFill, BsLightbulb } from "react-icons/bs";
import { FaSeedling, FaAppleAlt } from "react-icons/fa";
import { GiChampions, GiGrapes, GiPlantSeed, GiFruitTree } from "react-icons/gi";


import './farmTimeline.css';


const FarmTimeline = () => {
    return (
        <div className='timeline' >
            <h2 className='center timelineTitle'>יעדי החווה</h2>
            <VerticalTimeline className='verticalTimeline' >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#fff', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid #fff' }}
                    date="2023"
                    dateClassName={"dates"}
                    iconStyle={{ background: '#B0C15B', color: '#fff' }}
                    icon={<GiPlantSeed />}
                >
                    <h3 className="vertical-timeline-element-title">יעדים לטווח הקרוב</h3>
                    <ul>
                        <li className='liText'>
                            <div>•</div>
                            <div className="vertical-timeline-element-text">
                                התמדה במסגרת העבודה בחווה לתקופת זמן שהוגדרה בתחילת התהליך
                            </div>
                        </li>
                        <li className='liText'>
                            <div>•</div>
                            <div className="vertical-timeline-element-text">
                                מוגנות- הפסקה של התנהגויות עוברות חוק ומסכנות חיים
                            </div>
                        </li>
                        <li className='liText'>
                            <div>•</div>
                            <div className="vertical-timeline-element-text">
                                דיווח של 80% מהנערים על עליה בתחושת המסוגלות, השייכות והחוסן
                            </div>
                        </li>
                        <li className='liText'>
                            <div>•</div>
                            <div className="vertical-timeline-element-text">
                                80% מהנערים מסוגלים להתנהל כלכלית באופן עצמאי ואחראי כעבור שנה מתחילת התהליך
                            </div>
                        </li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#fff', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid #fff' }}
                    date="2025"
                    dateClassName={"dates"}
                    iconStyle={{ background: '#B0C15B', color: '#fff' }}
                    icon={<FaSeedling />}
                >
                    <h3 className="vertical-timeline-element-title">יעדים לטווח הביניים</h3>
                    <ul>
                        <li className='liText'>
                            <div>•</div>
                            <div className="vertical-timeline-element-text">
                                גיוס של 70% מהנערים לשירות צבאי או לאומי. 70% מהם מסיימים בהצלחה שנה ראשונה
                            </div>
                        </li>
                        <li className='liText'>
                            <div>•</div>
                            <div className="vertical-timeline-element-text">
                                70% מהנערים מחזיקים במסגרות תעסוקתיות במשך שנה לפחות

                            </div>
                        </li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#fff', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid #fff' }}
                    date="2025"
                    dateClassName={"dates"}
                    iconStyle={{ background: '#B0C15B', color: '#fff' }}
                    icon={<GiFruitTree />}
                >
                    <h3 className="vertical-timeline-element-title">יעדים לטווח הרחוק</h3>
                    <ul className="vertical-timeline-element-text">
                        <li className='liText'>
                            <div>•</div>
                            <div>
                                70% מבוגרי התוכנית יימצאו מחוץ למעגל העוני/פשיעה תוך 5 שנים מסיום התוכנית
                            </div>
                        </li>
                    </ul>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>

    )
}

export default FarmTimeline