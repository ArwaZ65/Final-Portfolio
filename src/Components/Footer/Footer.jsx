import React from 'react'
import './Fooeter.css'
import logo from '../../assets/logo.png'
import user from '../../assets/user_icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div>
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo} alt="" />
                    <p> I'm Arwa Zakria, a passionate front-end developer</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user} alt="" />
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="subscribe">
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <div className="footer-bottom-left">
            © 2023 Arwa Zakria. All rights reserved.
            </div>
            <div className="footer-bottom-right">
                <div className="social-icons">
                <p>
                    <a href="https://www.facebook.com/arwa.zakaria.98">
                <FontAwesomeIcon icon={faFacebook} style={{color:'#1877f2'}}/></a>
                </p>
                <p>
                <a href="https://github.com/ArwaZ65">
                <FontAwesomeIcon icon={faGithub} /></a>
                </p>
                <p>
                <a href="https://www.linkedin.com/in/arwa-zakria-8687a5242/">
                <FontAwesomeIcon icon={faLinkedin} style={{color:'#0a66c2'}} /></a>
                </p>
                <p>
                    <a href="https://x.com/ArwaZakria1">
                <FontAwesomeIcon icon={faTwitterSquare} style={{color:'#1DA1F2'}}/></a>
                </p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
