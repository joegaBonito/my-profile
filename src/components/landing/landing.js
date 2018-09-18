import React, { Component } from 'react';
import './landing.css';
import IMG0181 from '../../assets/img/IMG-0181.JPG';
//import IMG0178 from '../../assets/img/IMG-0178.JPG';
import IMG0087 from '../../assets/img/IMG-0087.JPG';
import IMG0110 from '../../assets/img/IMG-0110.JPG';
import IMG0168 from '../../assets/img/IMG-0168.JPG';
import IMG0338 from '../../assets/img/IMG-0338.JPG';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileImageArray: [IMG0338,IMG0181, IMG0087, IMG0110, IMG0168],
            skillsArray: ["I Communicate","I Analyze","I Code","I Solve" ],
            skill: ""
        }
    }
    componentWillMount() {
        var profileImageArray = this.state.profileImageArray;
        var n = 1;
        this.profileRotator = setInterval(function () {
                if (n >= profileImageArray.length) {
                    n = 0;
                }
                document.getElementById("profile-image").src = profileImageArray[n];
                n++;
        }, 3000);
        var skillsArray = this.state.skillsArray;
        this.setState({skill:this.state.skillsArray[0]});
        var skillCount = 1;
        this.skillsRotator = setInterval(()=>{
            if(skillCount >= skillsArray.length) {
                skillCount = 0;
            }
            this.setState({
                skill:skillsArray[skillCount]
            });
            skillCount++;
        },3000);
    }

    componentWillUnmount() {
        clearInterval(this.profileRotator);
        clearInterval(this.skillsRotator);
    }

    render() {
      const { isMobile } = this.props;
        return (
            <div className="landing-div-positioning" >
            <div>
        // <h1>hello world {isMobile ? 'mobile' : 'desktop'}</h1>
        </div>
                <img id="profile-image" className="profile-image" src={IMG0338} alt="profile" />
                <hr/>
                <br/>
                <h2>I am <span className="spanStyle">Joe Jung</span>, {this.state.skill}</h2>
                <p className="self-description">
                    I love playing board & video games and watching good movies!<br/>
                    My favorite foods are Hamburgers and Subway sandwitches. <br/>
                    Feel free to connect with me on Social Network Services provided in the footer below!
                </p>
                <div className="footer-placeholder"></div>
            </div>
        );
    }
}

export default Landing;
