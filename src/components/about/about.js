import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './about.css';
import anime from 'animejs';

class About extends Component {
    componentDidMount() {
        this.animeEasingDidMount = anime({
            targets: '.about-div-positioning',
            easing:'linear',
            opacity:1
        });
    }

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
                            <li>ReactJS</li>
                            <li>Angular</li>
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>NPM</li>
                            <li>Webpack</li>
                            <li>Babel</li>
                            <li>Java</li>
                            <li>JavaEE</li>
                            <li>Spring Framework</li>
                            <li>Maven</li>
                            <li>Gradle</li>
                            <li>MySQL</li>
                            <li>PostgreSQL</li>
                            <li>Bootstrap</li>
                            <li>Git</li>
                            <li>RESTful API calls</li>
                            <li>Redux flow</li>
                            <li>Tomcat</li>
                            <li>JBoss</li>
                            <li>Selenium</li>
                            <li>JUnit</li>
                            <li>AWS (EC2, S3, Elastic Beanstalk, Lightsail)</li>
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
                            <li>Highly Self motivated</li>
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
