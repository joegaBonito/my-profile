import React,{Component} from 'react';
import './footer.css';
import * as FontAwesome from 'react-icons/lib/fa';
class Footer extends Component {
    render() {
        return(
            <div>
                <footer className="footer">
                    <div className="footer-container">
                        <FontAwesome.FaLinkedinSquare size={60} className="cursor-pointer fontawesome-icon"/>
                        <FontAwesome.FaGitSquare size={60} className="cursor-pointer fontawesome-icon"/>
                        <FontAwesome.FaFacebookSquare size={60} className="cursor-pointer fontawesome-icon"/>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Footer;