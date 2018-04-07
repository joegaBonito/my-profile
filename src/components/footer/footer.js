import React,{Component} from 'react';
import './footer.css';
import * as FontAwesome from 'react-icons/lib/fa';
class Footer extends Component {
    render() {
        return(
            <div>
                <footer className="footer">
                    <div className="footer-container">
                        <a href="https://www.linkedin.com/in/joe-jung-joega5678/"  rel="noopener noreferrer" target="_blank" className="footer-icon-link"><FontAwesome.FaLinkedinSquare size={60} className="cursor-pointer fontawesome-icon"/></a>
                        <a href="https://github.com/joegaBonito"  rel="noopener noreferrer" target="_blank" className="footer-icon-link"><FontAwesome.FaGitSquare size={60} className="cursor-pointer fontawesome-icon"/></a>
                        <a href="https://www.facebook.com/joe.jung.148"  rel="noopener noreferrer" target="_blank" className="footer-icon-link"><FontAwesome.FaFacebookSquare size={60} className="cursor-pointer fontawesome-icon"/></a>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Footer;