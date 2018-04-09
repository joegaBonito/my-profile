import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './project.css';

class Projects extends Component {
    render() {
        return (
            <div className="project-div-positioning">
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">LG One Price Program</h1>
                        <p className="lead">Developed the site into a mobile responsive website as a frontend developer.<br />
                            Tools used: HTML, Javascript, JQuery, and Bootstrap.</p>
                        <hr className="my-2" />
                        <a href="https://lgoneprice.ca/en/main/home.do" rel="noopener noreferrer" target="_blank">https://lgoneprice.ca/en/main/home.do</a>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">LG Velaro Live Chat</h1>
                        <p className="lead">Implemented a script that allows inline char bar to come up after 20 seconds of page load.<br />
                            The "eyecatcher" will only be visible during live chat support hours.</p>
                        <hr className="my-2" />
                        <a href="http://www.lg.com/ca_en/support" rel="noopener noreferrer" target="_blank">http://www.lg.com/ca_en/support</a>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">VAYA Website</h1>
                        <p className="lead">Developed a church youth group website by working on both Front-End and Back-End.<br/>
                            Tools used: Angular5 (Typescript), Spring Boot (Java), Bootstrap, MYSQL, and Apache Server.</p>
                        <hr className="my-2" />
                        <a href="http://www.lg.com/ca_en/support" rel="noopener noreferrer" target="_blank">http://www.lg.com/ca_en/support</a>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Inventory Management Program</h1>
                        <p className="lead">Developed an Inventory Management Program that keeps records of Product Name, SKU, Selling & Purchase Price, Quantity, and etc,.<br/>
                            Tools used: ReactJS (with Redux), Spring Boot, Bootstrap, and MYSQL</p>
                        <hr className="my-2" />
                        <a href="https://github.com/joegaBonito/Inventory-Management-Program-React" rel="noopener noreferrer" target="_blank">Front-End Git Repository</a>&nbsp;&&nbsp; 
                        <a href="https://github.com/joegaBonito/Inventory-Management-Program" rel="noopener noreferrer" target="_blank">Back-End Git Repository</a>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Information Keeping Program</h1>
                        <p className="lead">Developed an Information Keeping Program that allows users to keep track of IDs and Passwords<br/>
                            Tools used: ReactJS (with Redux), Spring Boot, Bootstrap, and MYSQL</p>
                        <hr className="my-2" />
                        <a href="https://github.com/joegaBonito/Info-Keeper-frontend-React" rel="noopener noreferrer" target="_blank">Front-End Git Repository</a>&nbsp;&&nbsp; 
                        <a href="https://github.com/joegaBonito/Info-Keeper-backend-SpringBoot" rel="noopener noreferrer" target="_blank">Back-End Git Repository</a>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Joe Jung's Profile Site</h1>
                        <p className="lead">Created this profile site in order to introduce myself to the whole world!<br/>
                            Tools used: ReactJS, Reactrap, AWS (light sail), Apache </p>
                        <hr className="my-2" />
                        <a href="https://github.com/joegaBonito/my-profile.git" rel="noopener noreferrer" target="_blank">Joe Jung's Profile Site</a>
                    </Container>
                </Jumbotron>
                <div className="footer-placeholder"></div>
            </div>
        );
    }
}
export default Projects;