import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";


//projects
import L_ReactMovieSearch from "../../assets/img/projects/ReactMovieSearch.png";
import L_AndroidAppLogin from "../../assets/img/projects/scran.png";
import L_TributePage from "../../assets/img/projects/tribute.png";
import L_DocumentationPage from "../../assets/img/projects/docpage.png";
import L_ProductLandingPage from "../../assets/img/projects/prod.png";
import L_NOPR from "../../assets/img/projects/nopr.png";



import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_JS from "../../assets/img/skills/javascript.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_TMDB from "../../assets/img/skills/tmdb.svg";
import L_CSHARP from "../../assets/img/skills/csharp.svg";
import L_VSSTUDIO15 from "../../assets/img/skills/visualstudio15.svg";
import L_MSSQL from "../../assets/img/skills/sqlserver.svg";
import L_PLESK from "../../assets/img/skills/plesk.svg";
import L_JAVA from "../../assets/img/skills/java.svg";
import L_ANDROID from "../../assets/img/skills/androidstudio.svg";
import L_API from "../../assets/img/skills/restapi.svg";
import L_ASPNET from "../../assets/img/skills/aspnet.png";
import L_NETCORE from "../../assets/img/skills/netcore.svg";
import L_VS17 from "../../assets/img/skills/vs17.svg";
import L_AZURE from "../../assets/img/skills/azure-devops.svg";
import L_AJAX from "../../assets/img/skills/ajax.svg";
import L_JQUERY from "../../assets/img/skills/jquery.svg";




import "./projects-timeline.style.css";


const ProjectTimeline=()=>{
    return (
        <div id="projects">
         <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                    
                


                    {/* Project: React Movie Search */}

                    <ImageEvent
                        date="2020"
                        className="text-center"
                        text="React Movie Search"
                        src={L_ReactMovieSearch}
                        alt="React Movie Search"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                            <Card>
                                <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                                >
                                PROJECT DETAILS
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                    <strong>Description:</strong> An app that allows to
                                    search  movies with given query using <strong>themoviedb.org</strong> API.
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                    <li>Search through movies</li>
                                    <li>Movies being fetched via API call</li>
                                    <li>React components</li>
                                    <li>React Hooks</li>
                                    <li>Fecth API</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_HTML5}
                                            alt="HTML 5"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        HTML5
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_CSS3}
                                            alt="CSS 3"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        CSS3
                                        </span>
                                    </li>
                                    
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_REACT}
                                            alt="React"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        React
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_TMDB}
                                            alt="TMDB"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        The Movie DB API
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_NODE_JS}
                                            alt="Node.js"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        Node.js
                                        </span>
                                    </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">
                            <UrlButton
                            href="https://lejla1502.github.io/movieSearch-React/"
                            target="_blank"
                            >
                            SEE LIVE
                            </UrlButton>
                            <UrlButton
                            href="https://github.com/Lejla1502/movieSearch-React"
                            target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                        </div>
                        </div>
                    </ImageEvent>

                    {/* Project: eNamjestaj web app */}
                    <ImageEvent
                        date="2020"
                        className="text-center"
                        text="eNamjestaj web app"
                        src="https://user-images.githubusercontent.com/22219433/98401316-c3946480-2065-11eb-9be7-66f445b1e1df.png"
                        alt="eNamjestaj web app"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                            <Card>
                                <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                                >
                                PROJECT DETAILS
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                    <strong>Description:</strong> eNamjestaj is ecommerce application built
                                     in Asp.Net Core (C#). For backend data storage and retrieving was used MSSQL.
                                      It provides different modules for three different types of users plus anonymous 
                                      (all of which are shown in screenshots). Options for system admin is managing users
                                       on the system and log files. Manager is allowed to manage products and action catalogues,
                                       while buyer can manage his/hers orders, see the history of all made orders on the system,
                                       see pending orders and is able to double secure his login with two-way authentication system
                                       that works with QR code.If buyer is to use this functionallity he/she would have to install
                                       "Google authenticatior" app on their phone, otherwise they won't be able to use it..
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                    <li>Multiple user roles</li>
                                    <li>Authentication</li>
                                    <li>Authorization</li>
                                    <li>Different layouts with different functionalities for each user role</li>
                                    <li>Register new user</li>
                                    <li>Signing exiting user</li>
                                    <li>Overview and search of products</li>
                                    <li>Rating and commenting products</li>
                                    <li>Order and purchase</li>
                                    <li>Review and history of orders</li>
                                    <li>Managing users, products and action catalogues</li>
                                    <li>Picture uploads</li>
                                    <li>Validation</li>
                                    <li>Two-factor authentication</li>
                                    <li>Logging</li>
                                    <li>Unit testing</li>
                                    <li>Test driven development</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_HTML5}
                                            alt="HTML 5"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        HTML5
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_CSS3}
                                            alt="CSS 3"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        CSS3
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_JS}
                                            alt="JavaScript"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        JavaScript
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_BOOTSTRAP4}
                                            alt="Bootstrap 4"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        Bootstrap 4
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_AJAX}
                                            alt="Ajax"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        Ajax
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_JQUERY}
                                            alt="jQuery"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        jQuery
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_CSHARP}
                                            alt="C#"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        C#
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_NETCORE}
                                            alt="ASP.NET Core"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        ASP.NET Core 2.2
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_VS17}
                                            alt="Visual Studio 2017"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        Visual Studio 2017
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_AZURE}
                                            alt="AZURE"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        Azure DevOps
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_API}
                                            alt="Rest API"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        Rest API
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_MSSQL}
                                            alt="MSSQL"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        SQL Server 2014
                                        </span>
                                    </li>
                                    </ul>
                                    <hr />
                                    <em>
                                    <strong>SignUp/ Signin:</strong>
                                    <br />
                                    <br />
                                    You can <strong>register</strong> as new user or{" "}
                                    <strong>log in</strong> using one of the demo accounts below.
                                    <br />
                                    <br />
                                    <strong>DEMO ACCOUNT DETAILS:</strong>
                                    <br />
                                    <strong>Administrator</strong><br/>
                                    username: Admin
                                    <br />
                                    password: Admin
                                    <br/>
                                    <strong>Menagement</strong><br/>
                                    username: Menadzer
                                    <br/>
                                    password: Menadzer
                                    <br/>
                                    <strong>Buyer</strong><br/>
                                    username: Neki
                                    <br/>
                                    password: Neki
                                    </em>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">
                            <UrlButton
                            href="http://p1738.app.fit.ba"
                            target="_blank"
                            >
                            SEE LIVE
                            </UrlButton>
                            <UrlButton
                            href="https://github.com/Lejla1502/eNamjestaj-ASP.NetCore2.2"
                            target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                            
                        </div>
                        </div>
                    </ImageEvent>

                    {/*Project: product landing page */}
                    <ImageEvent
                        date="2019"
                        className="text-center"
                        text="Product Landing Page"
                        src={L_ProductLandingPage}
                        alt="Product landing page"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                            <Card>
                                <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                                >
                                PROJECT DETAILS
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                    <strong>Description:</strong> This is a product landing web page done with HTML and CSS.
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                    <li>Product overview</li>
                                    <li>Video</li>
                                    <li>Contact form</li>
                                    <li>Responsive design</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_HTML5}
                                            alt="HTML 5"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        HTML5
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_CSS3}
                                            alt="CSS 3"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        CSS3
                                        </span>
                                    </li>
                                    
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">
                            <UrlButton
                            href="https://codepen.io/Lejla1502/full/aPNYYK"
                            target="_blank"
                            >
                            SEE LIVE
                            </UrlButton>
                            <UrlButton
                            href="https://codepen.io/Lejla1502/pen/aPNYYK"
                            target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                            
                        </div>
                        </div>
                    </ImageEvent>


                    {/*Project: documentation page */}
                    <ImageEvent
                        date="2019"
                        className="text-center"
                        text="Documentation Page"
                        src={L_DocumentationPage}
                        alt="Documentation page"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                            <Card>
                                <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                                >
                                PROJECT DETAILS
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                    <strong>Description:</strong> This is a documentation web page done with HTML and CSS.
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                    <li>Responsive design</li>
                                    <li>Flexbox</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_HTML5}
                                            alt="HTML 5"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        HTML5
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_CSS3}
                                            alt="CSS 3"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        CSS3
                                        </span>
                                    </li>
                                    
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">
                            <UrlButton
                            href="https://codepen.io/Lejla1502/full/maNxMd"
                            target="_blank"
                            >
                            SEE LIVE
                            </UrlButton>
                            <UrlButton
                            href="https://codepen.io/Lejla1502/pen/maNxMd"
                            target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                            
                        </div>
                        </div>
                    </ImageEvent>
                    
                    {/*Project: tribute page */}
                    <ImageEvent
                        date="2019"
                        className="text-center"
                        text="Tribute Page"
                        src={L_TributePage}
                        alt="Tribute page"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                            <Card>
                                <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                                >
                                PROJECT DETAILS
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                    <strong>Description:</strong> This is a tribute page to Elon Musk done with HTML and CSS.
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                    <li>Elon Musk bio and projects overview</li>
                                    <li>Flexbox</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_HTML5}
                                            alt="HTML 5"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        HTML5
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_CSS3}
                                            alt="CSS 3"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        CSS3
                                        </span>
                                    </li>
                                    
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">
                            <UrlButton
                            href="https://codepen.io/Lejla1502/full/vQYzjZ"
                            target="_blank"
                            >
                            SEE LIVE
                            </UrlButton>
                            <UrlButton
                            href="https://codepen.io/Lejla1502/pen/vQYzjZ"
                            target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                            
                        </div>
                        </div>
                    </ImageEvent>

                    {/* Project: eNamjestaj PEP */}
                    <ImageEvent
                        date="2018"
                        className="text-center"
                        src={L_NOPR}
                        text="eNamjestaj desktop and mobile app"
                        
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                            <Card>
                                <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                                >
                                PROJECT DETAILS
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                    <strong>Description:</strong> An app that offers overview of products, 
                                    purchase, review of history of orders, confirmation of orders, reports through .NET MVC,
                                    API and MS SQL. Mobile part of the app is done for Windows Phone and that project can
                                    only be loaded on Win 8.1 and above.
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                    <li>Multiple user roles</li>
                                    <li>Search users</li>
                                    <li>ASP.NET API</li>
                                    <li>Validation</li>
                                    <li>Exception handling</li>
                                    <li>Picture upload</li>
                                    <li>Product rating</li>
                                    <li>System of recommendation based on rating</li>
                                    <li>Reports</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_CSHARP}
                                            alt="C#"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        C#
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_ASPNET}
                                            alt="ASP .NET"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        ASP .NET (MVC)
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_VSSTUDIO15}
                                            alt="Visual Studio 2015"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        Visual Studio 2015
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_API}
                                            alt="Rest API"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        Rest API
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_MSSQL}
                                            alt="SQLServer"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        SQL Server 2014
                                        </span>
                                    </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">
                            
                            <UrlButton
                            href="https://github.com/Lejla1502/eNamjestaj-csharp_desktop_mobile"
                            target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                            
                        </div>
                        </div>
                    </ImageEvent>

                    {/* Project: ZZZ android mobile app */}
                    <ImageEvent
                        date="2018"
                        className="text-center"
                        text="EmployementBureau Android app"
                        src={L_AndroidAppLogin}
                        alt="Android app"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                            <Card>
                                <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                                >
                                PROJECT DETAILS
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                    <strong>Description:</strong> 
                                    This application is built for job applicants and companies to help them find
                                    desired jobs and workers, respectively.  
                                    It uses PLESK server for APIs and fetching needed data.
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                    <li>Search options</li>
                                    <li>API calls with Backend features</li>
                                    <li>Styled according to UI standards</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_JAVA}
                                            alt="Java"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        Java
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_ANDROID}
                                            alt="Android Studio"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        Android Studio
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_PLESK}
                                            alt="Plesk"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        Plesk server
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_MSSQL}
                                            alt="MSSQL"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        Sql Server 2014
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_API}
                                            alt="Rest API"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        API
                                        </span>
                                    </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">
                            <UrlButton
                            href="https://github.com/Lejla1502/ZavodZaZaposljavanje-AndroidMobApp/"
                            target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                            
                        </div>
                        </div>
                    </ImageEvent>

                    {/* Project: ZZZ desktop */}
                    <ImageEvent
                        date="2017"
                        className="text-center"
                        src={L_NOPR}
                        text="Employement Bureau desktop app"
                        
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                            <Card>
                                <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                                >
                                PROJECT DETAILS
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                    <strong>Description:</strong> This is a Desktop C# application created in Visual Studio 2015 using MSSQL for backend.
                                     It allows job applicant to search for companies and its ads within different job categories before he/she applies for a job.
                                     And it also offers companies ability to view and search job applicants that have applied for different job positions
                                     and to review their informations.
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                    <li>Multiple user roles</li>
                                    <li>Search options</li>
                                    <li>Reports</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_CSHARP}
                                            alt="C SHARP"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        C#
                                        </span>
                                    </li>
                                    
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_VSSTUDIO15}
                                            alt="VS Studio 2015"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        Visual Studio 2015
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_MSSQL}
                                            alt="MS SQL Server"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        SQL Menagement studio 2014
                                        </span>
                                    </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">
                            <UrlButton
                            href="https://github.com/Lejla1502/ZavodZaZaposljavanjeDesktopApp"
                            target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                            
                        </div>
                        </div>
                    </ImageEvent>
                    
                </Events>
            </Timeline>
        </div>
    )
}

export default ProjectTimeline