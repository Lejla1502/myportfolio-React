import React from 'react';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import BgImage from "./assets/img/parallex/background.webp";


//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from './pages/skills/skills.component';
import Experience from "./pages/experience/experience.component";
import ProjectTimeline from "./components/projects-timeline/projects-timeline.component";
import Contact from "./pages/contact-form/contact-form.component" ;
import FooterPanel from "./components/footer/footer.component";


import './App.css';

const  App=() =>{
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar/>
      <MyCarousal/>
      <TitleMessage/>

      {/*about section */}
      <div>
        <Parallax  blur={{ min: -30, max: 30 }}
          bgImage={BgImage}
          bgImageAlt=""
          strength={-200}>
            <div>
              <Container className="container-box rounded">
                <Fade duration={500}>
                  <About/>
                </Fade>
              </Container>
            </div>
          </Parallax>
        
      </div>

      {/*skills section*/}
      
      <div>
          <Container className="container-box rounded">
            <Slide bottom duration={500}>
              <r/>
                <Skills/>
            </Slide>
          </Container>
       </div>

      {/*experience section*/ }

      <div>
      <Container className="container-box rounded">
         <Fade duration={500}>
           <hr/>
             <Experience/>
          </Fade>
      </Container>
      </div>

      {/*projects section */}

      <div>
          <Container className="container-box rounded">
            <Slide bottom duration={500}>
              <r/>
                <ProjectTimeline/>
            </Slide>
          </Container>
       </div>
    

    {/*contact form */}
    <div>
      <Container className="container-box rounded">
         <Fade duration={500}>
           <hr/>
             <Contact/>
          </Fade>
      </Container>
      </div>
      
      <hr />
      <FooterPanel />
    </div>
  );
}

export default App;
