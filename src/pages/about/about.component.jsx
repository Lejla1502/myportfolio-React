import React from'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap//Button'

import "./about.style.css"

const About=()=>{
    return(
        <div id="about">
        <div className="about">
          <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
          <Container>
            <Row className="pt-3 pb-5 justify-content-center">
              
              <Col xs={12} md={6}>
                <Row className=" text-justify p-2 my-details rounded">
                  Hi! I am <strong>&nbsp;Lejla Spahić</strong>
                  <br />An undergraduate student of Faculty of Information Technology in Mostar, Bosnia and Herzegovina.
                  <br/>
                  Throughout college, I've had opportunity to develop web, mobile and desktop applications using ASP.NET, ASP.NET Core, C#, HTML, CSS, Ajax, jQuery, Java, MSSQL. 
                  <br />
                  Techology is one of many passions I have, others being writing, drawing, reading and martial arts.          
                  <br />I am a fast learner who loves to search for solutions to various problems and able to pick up new skills with relative ease. 
                  <br /> <br />
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <a href="#contact">
                        <Button className="m-2" variant="outline-primary">
                          Let's talk
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://1drv.ms/b/s!AhdzhacNk_FejVK89FcV8c-Qq-zu?e=8WlbV2" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-success">
                          My Resume
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/Lejla1502" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-dark">
                          GitHub
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/in/lejla-spahic/" target="_blank" rel="noopener noreferrer">
                        <Button className="m-2" variant="outline-info">
                          LinkedIn
                        </Button>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
       /* <div id="about">
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 justify-content-center">
                    
                        <Col xs={12} md={6}>
                            <Row className="text-center  p-8 my-details rounded">
                               Hi there! I am <strong>&nbsp;Lejla Spahić</strong> 
                               
                                <br />I am a Junior Web Developer with C#, Java, React.js, Node.js, and MSSQL as my tech stack.
                                <br/>
                                Working with the  clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                                <br /> 
                                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                                <br /> <br />
                                        
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                        <a href="#contact">
                                        <Button className="m-2 w-95" variant="outline-primary">
                                        <i className="fa fa-comments-o"/>  Let's talk
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2 w-95" variant="outline-success">
                                        <i className="fa fa-file-pdf-o"/>My Resume
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/Lejla1502" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2 w-95" variant="outline-dark">
                                        <i className="fab fa-github"/> GitHub
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/lejla-spahic-52851370/" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2 w-95" variant="outline-info">
                                        <i className="fab fa-linkedin"/>LinkedIn
                                        </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>*/
    );
};

export default About;