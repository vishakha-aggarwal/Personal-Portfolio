import React from "react";
import 'animate.css'
import TrackVisibility from "react-on-screen";

const Experience = () => {

    return (   
      <section className="experience" id="experience">
        <h2 style={{textDecoration: "underline", paddingBottom: "20px", textAlign: "center"}}>Experience</h2>
        <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
        <div className = "experience-container" style={{display: "flex"}}>
          <div className="line" style={{borderLeft:"2px solid white", height: "auto"}}></div>
          <div>
          <div className="logo-container">
          </div>
          <div class="details-container" style={{paddingLeft: "30px"}}>
              <h4>Senior Team Member</h4>
              <h6>Newton School Coding Club - BPIT</h6>
              <p>Sept 2022 - Present</p>         </div>
          <div class="logo-container">
          </div>
          <div class="details-container" style={{paddingLeft: "30px"}}>
              <h4>Open Source Mentee</h4>
              <h6>Codess.Cafe</h6>
              <p>Oct 2022 - Present</p>
          </div>
          <div class="logo-container">
          </div>
          <div class="details-container" style={{paddingLeft: "30px"}}>
              <h4>Open Source Contributor</h4>
              <h6>Rocket.Chat</h6>
              <p>Jan 2023 - May2023</p>
          </div>
          <div class="logo-container">
          </div>
          <div class="details-container" style={{paddingLeft: "30px"}}>
              <h4>Teaching Assistant</h4>
              <h6>Pepcoding Education Pvt. Ltd.</h6>
              <p>Sept 2021 - Mar 2022</p>         </div>
          <div class="logo-container">
          </div>
          <div class="details-container" style={{paddingLeft: "30px"}}>
              <h4>Open Source Contributor</h4>
              <h6>GirlScript Summer of Code</h6>
              <p>Feb 2021 - May 2021</p>         </div>
        </div>
      </div>
      </div>
}
</TrackVisibility>
        </section>
        
    );
  }
   
  export default Experience;