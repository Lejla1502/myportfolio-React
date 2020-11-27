import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import './contact-form.style.css';

const Contact=()=>{
    return (
        <div id="contact">
        <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
        <Jumbotron className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a href="mailto:lejlasp@hotmail.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-danger" title="lejlasp@hotmail.com">
                    <i className="fas fa-envelope-square"></i> Email Me
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://www.linkedin.com/in/lejla-spahic/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-primary" title="Visit my LinkenIn">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </Button>
                </a>
              </div>
              
              <div className="m-2">
                <a href="https://github.com/Lejla1502" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-dark" title="My other projects">
                    <i className="fab fa-github-square"></i> GitHub
                  </Button>
                </a>
              </div>
              
              <div className="m-2">
                <a href="https://www.instagram.com/lej.sp94/" target="_blank" rel="noopener noreferrer">
                  <Button id="instagram-btn" variant="outline-info" title="Lets connect!">
                    <i className="fab fa-instagram"></i> Instagram
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://www.facebook.com/lellaa1502/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-primary" title="Say hello on FB">
                    <i className="fab fa-facebook-square"></i> Facebook
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    )
}

export default Contact