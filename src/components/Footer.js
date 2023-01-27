import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
//import GithubIcon from '@material-ui/icons/Github';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer"> 
            <div className="socialMedia"> 
                <a href="https://www.instagram.com/amandakwong_/" target="_blank">
                    <InstagramIcon />
                </a>
                <a href="mailto:amandakwong898@gmail.com" target="_blank">
                    <EmailIcon />
                </a>
                <a href="https://www.linkedin.com/in/amandakwong898/" target="_blank">
                    <LinkedInIcon />
                </a>
            </div>
            <p> &copy; 2023 Amanda Kwong </p>
        </div>
    )
}

export default Footer;