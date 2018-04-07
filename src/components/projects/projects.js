import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './project.css';

class Projects extends Component {
    render() {
        return (
            <div className="landing-div-positioning">
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">LG One Price Program</h1>
                        <p className="lead">Developed the site into a mobile responsive website as a frontend developer.<br />
                            Tools used: HTML, Javascript, JQuery, and Bootstrap.</p>
                        <hr className="my-2" />
                        {/* <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <Button color="primary">Learn More</Button>
                    </p> */}
                        <a href="https://lgoneprice.ca/en/main/home.do" rel="noopener noreferrer" target="_blank">https://lgoneprice.ca/en/main/home.do</a>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">LG Velaro Live Chat</h1>
                        <p className="lead">Implemented a script that allows inline char bar to come up after 20 seconds of page load.<br />
                            The "eyecatcher" will only be visible during live chat support hours.</p>
                        <hr className="my-2" />
                        {/* <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <Button color="primary">Learn More</Button>
                    </p> */}
                        <a href="http://www.lg.com/ca_en/support" rel="noopener noreferrer" target="_blank">http://www.lg.com/ca_en/support</a>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">VAYA Website</h1>
                        <p className="lead">Developed a church youth group site.<br />
                            Tools used: Angular5 (Typescript), Spring Boot (Java), Bootstrap, MYSQL, and Apache Server.</p>
                        <hr className="my-2" />
                        {/* <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <Button color="primary">Learn More</Button>
                    </p> */}
                        <a href="http://www.lg.com/ca_en/support" rel="noopener noreferrer" target="_blank">http://www.lg.com/ca_en/support</a>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}
export default Projects;