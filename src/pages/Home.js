import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css";

function Home() {
    return (
        <div className="home">
            <div className="about">
               <h2> Hi, my name is Amanda. </h2> 
               <div className="prompt">
                <p> A software engineer who is passionate about empowering marginalized 
                    communities to make the tech space an inclusive place for all. 
                </p>
                <a href="mailto:amandakwong898@gmail.com" target="_blank">
                    <EmailIcon />
                </a>
                <a href="https://www.linkedin.com/in/amandakwong898/" target="_blank">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/amandakwong898" target="_blank">
                    <GitHubIcon />
                </a>
               </div>
            </div>
            <div className="skills">
                <h1> Skills </h1>
                <ol className="list">
                    <li className="item">
                        <h2> Technologies </h2>
                        <span> ReactJS, ExpressJS, AWS, MongoDB, Docker, Kubernetes </span>
                    </li>
                    <li className="item">
                        <h2> Languages </h2>
                        <span> Python, Javascript, Java, SQL, Go, C </span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;