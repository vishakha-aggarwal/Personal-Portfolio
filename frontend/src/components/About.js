import React from "react";
import 'animate.css'
import TrackVisibility from "react-on-screen";
import profilePic from '../assets/img/profilePic.png';

export const About = () => {
  
  return (
    <section className="about" id="about">
      <h2
        style={{
          textDecoration: "underline",
          paddingBottom: "20px",
          textAlign: "center",
        }}
      >
        About
      </h2>
      <div className="about-img"><img src={profilePic} alt="profile pic"></img></div>
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <div className="about-descp">
              I am a FullStack Web and Ethereum Blockchain developer, currently
              pursuing B.Tech in Computer Science from Guru Gobind Singh
              Indraprastha University, Delhi. I have extensive experience in building
              smart contracts on the blockchain using Solidity and am familiar
              with many frameworks like Web3, NodeJs, Truffle, Express, ReactJs,
              NextJs, Redux, etc. I have worked with databases like MongoDB and
              SQL and learned many programming languages like Solidity, C, C++,
              HTML, CSS, JavaScript, and Python. Moreover, I am proficient in
              using developer tools like Git, Github, VS Code, Postman, and NPM
              packages, and in hosting with Heroku, Netlify, Vercel, and
              Firebase. I love building real-world projects. Apart from
              development, I loves practicing DSA & Competitive Programming and
              contributes to Open Source. I have solved more than 1400+ question
              across different platforms. Currently, I am Senior Team Member of
              NSCC society - BPIT. Previously, I have worked with Pepcoding as a
              Teaching Assistant and also a past GSSOC contributor.
            </div>
          </div>
        )}
      </TrackVisibility>
    </section>
  );
};
