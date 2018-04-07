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
            profileImageArray: [IMG0338,IMG0181, IMG0087, IMG0110, IMG0168]
        }
    }
    componentWillMount() {
        var profileImageArray = this.state.profileImageArray;
        var n = 0;
        this.profileRotator = setInterval(function () {
                if (n >= profileImageArray.length) {
                    n = 0;
                }
                document.getElementById("profile-image").src = profileImageArray[n];
                n++;
            }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.profileRotator);
    }

    render() {
        //var className = 'center-text';
        return (
            <div className="landing-div-positioning" >
                <img id="profile-image" className="profile-image" src={IMG0338} alt="profile" />
                <hr/>
                <h2>I am Joe Jung, I code</h2>
                <p className="self-description">
                    Not only I love coding, but I also love playing board & video games and watching good movies!<br/>
                    My favorite food is Hamburgers and Subway sandwitches. <br/>
                    Feel free to connect with me on Social Network Services provided in the footer below!
                </p>
            </div>
        );
    }
}

export default Landing;
