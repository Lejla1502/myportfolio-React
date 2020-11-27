import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Tilt from 'react-tilt'
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import L_GIIKLY from "../../assets/img/experience/giikly_p.jpg"

import './experience.style.css'


const Experience=()=>{
    return(
        
            <div id='experience'>
                <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
                <Jumbotron className="jumbo-style">
                    <Container>
                    <Tilt  options={{ max : 25 }}  >
                    <Card>
                        <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                            <Card.Img variant="top" className="img-resize" src={L_GIIKLY} alt="Accenture logo" />
                        </Card.Header>
                        <Card.Body className="d-flex justify-content-center flex-column">
                            <div>
                            <Card.Title className="text-center">Internship (Intera,Mostar)</Card.Title>
                            </div>
                            <div>
                            <Card.Text className="text-center style">
                                <strong className="body-title-style ">C# Developer</strong>
                                <br />
                                <strong>Technology:</strong> C#, Unity
                                <br />
                                <strong>Duration:</strong> October 2015-December 2015
                                <br/>
                                <strong> Roles </strong>
                                <ul className="text-left">
                                <li><strong>Worked </strong> with a team of IT and chemistry students responsible for developing interactive web application in C#</li>
                                <li><strong>Organized</strong>  meetings to exchange ideas and implement them in project
                                </li>
                                <li><strong>Analyzed</strong>  user needs and proposed design software solutions to meet them 
                                </li>
                                <li><strong>Closely collaborated</strong>  with team members to identify and quickly solve problems</li>
                                <li><strong>Solved</strong> the problem of connecting different components on a page into a functional unit</li>
                                <li><strong>Demonstrated</strong> fast adaptation to the new programming environment (Unity 3D)</li>
                                {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                                </ul>
                                
                                
                            </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                    </Tilt>
                    </Container>
                </Jumbotron>
            </div>
       
    )
}

export default Experience;