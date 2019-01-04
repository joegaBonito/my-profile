import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './WorkHistory.css';
import anime from 'animejs';

class WorkHistory extends Component {
  componentDidMount() {
    this.animeEasingDidMount = anime({
        targets: '.wh-div-positioning',
        easing:'linear',
        opacity:1
    });
}

  render() {
    return (
      <div className="wh-div-positioning">
      <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Samsung SDS America.</h1>
            <br />
            <p className="lead">Software Engineer, 06/15/18 to Present</p>
            <hr className="my-2" />
            <p className="description">
              Samsung Project Management System (SPMS) is Samsung Network Divison's internal system that manages network cell tower installation.<br/>
              Updated PostgresSQL Database, Provided Data, Deployed Software releases using Jenkins, Managed directory disk space on Red Hat Linux Server,<br/>
              Monitored services by using/configuring the UI testing tool Selenium, and Suported users who are having technical difficulties.
            </p>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">LG CNS America Inc.</h1>
            <br />
            <p className="lead">LG.COM Technical Account Manager, 08/16/16 to 06/15/2018</p>
            <hr className="my-2" />
            <p className="description">
              Analyzed daily requests from clients on LG.COM, communicate with development team regarding development
              scope, and monitor website traffics & issues.<br />
              Coded with Javascript when implementing or modifying API between 3rd party systems.
            </p>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">LG CNS America Inc.</h1>
            <p className="lead">eCommerce Analyst, 05/16/16 to 08/16/16</p>
            <hr className="my-2" />
            <p className="description">
              Managed product stock levels, submitted purchase orders, handled customer services, and <br />
              worked on monthly account closings for LG.COM’s Online Brand Shop and LG Employees’ Online Shop.<br />
              After 3 months, transitioned to a Technical Account Manager role within the same team.
              </p>
          </Container>
        </Jumbotron>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Fordham University</h1>
            <p className="lead">News Archive Data Entry, 10/02/2015 to 05/10/16</p>
            <hr className="my-2" />
            <p className="description">
              Moved Fordham University’s old news articles to a new database through WordPress CMS.
            </p>
          </Container>
        </Jumbotron>
        <div className="footer-placeholder"></div>
      </div>
    );
  }
}
export default WorkHistory;
