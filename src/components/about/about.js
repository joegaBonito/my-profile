import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './about.css';

class About extends Component {
    render() {
        return (
            <div className="about-div-positioning">
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Education</h1>
                        <br />
                        <p className="lead">Graduated Fordham University</p>
                        <hr className="my-2" />
                        <p className="description">
                            Bachelor of Science: Computer Science, 2012-2016
                        </p>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Technical Skills</h1>
                        <hr className="my-2" />
                        <ul>
                            <li>Angular5</li>
                            <li>ReactJS</li>
                            <li>JQuery</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>MySQL</li>
                            <li>Bootstrap</li>
                            <li>NPM</li>
                            <li>Maven</li>
                            <li>Github</li>
                            <li>Knows RESTful API calls</li>
                            <li>Understands Redux flow</li>
                        </ul>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Interpersonal Skills</h1>
                        <hr className="my-2" />
                        <ul>
                            <li>Client handling</li>
                            <li>Proficient technical analysis</li>
                            <li>Strong communication skills</li>
                            <li>Persistent and responsible work ethic</li>
                            <li>Fast learning and understanding ability</li>
                            <li>Self motivated</li>
                            <li>Fluent in Korean</li>
                        </ul>
                    </Container>
                </Jumbotron>
                <div className="footer-placeholder"></div>
            </div>
        );
    }
}
export default About;
