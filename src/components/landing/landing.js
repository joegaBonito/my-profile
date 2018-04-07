import React, { Component } from 'react';
import './landing.css';
import IMG0181 from '../../assets/img/IMG-0181.JPG';
import IMG0178 from '../../assets/img/IMG-0178.JPG';
import IMG0087 from '../../assets/img/IMG-0087.JPG';
import IMG0110 from '../../assets/img/IMG-0110.JPG';
import IMG0168 from '../../assets/img/IMG-0168.JPG';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileImageArray: [IMG0181, IMG0178, IMG0087, IMG0110, IMG0168]
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
                <img id="profile-image" className="profile-image" src={IMG0181} alt="profile" />
            </div>
        );
    }
}

export default Landing;
