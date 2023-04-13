import React from "react";
import 'animate.css'
import TrackVisibility from "react-on-screen";

const Education = () => {

  return (
    <section className="experience" id="education">
      <h2 style={{textDecoration: "underline", paddingBottom: "20px", textAlign: "center"}}>Education</h2>
      <TrackVisibility>
        {({ isVisible }) =>
        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
          <div className = "experience-container" style={{display: "flex"}}>
            <div style={{borderLeft:"2px solid white", height: "auto", marginLeft: "5vw"}}></div>
            <div>
            <div class="logo-container">
            </div>
            <div class="details-container" style={{paddingLeft: "30px"}}>
                <h4>Guru Gobind Singh Indraprastha University</h4>
                <h6>Bachelor of Technology (Computer Science)</h6>
                <h6>2020 - 2024</h6>
                <p>CGPA - 9.1 (till sem 4)</p>
            </div>
            <div class="logo-container">
            </div>
            <div class="details-container" style={{paddingLeft: "30px"}}>
                <h4>Little Flowers Public Sr. Sec. School</h4>
                <h6>Class XII (CBSE)</h6>
                <h6>2020</h6>
                <p>Percentage - 91.8%</p>
            </div>
            <div class="logo-container">
            </div>
            <div class="details-container" style={{paddingLeft: "30px"}}>
                <h4>Little Flowers Public Sr. Sec. School</h4>
                <h6>Class X (CBSE)</h6>
                <h6>2018</h6>
                <p>Percentage - 92.2%</p>        
            </div>
          </div>
          </div>
        </div>
      }
      </TrackVisibility>
    </section>  
  );
}
 
export default Education;