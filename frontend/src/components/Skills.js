import React from "react";
import { Row, Col } from "react-bootstrap";
import 'animate.css'
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  
  return (
    <section className="skill" id="skills">
      <div className="container skill-container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2
                style={{ textDecoration: "underline", paddingBottom: "20px" }}
              >
                Programming Skills
              </h2>

              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <Row style={{ display: "flex" }}>
                      <Col size={12} md={6}>
                        <div className="outerCont" style={{ display: "flex" }}>
                          <div class="bullet"></div>
                          <h4 style={{ paddingLeft: "10px" }}>
                            Web Development
                          </h4>
                          <h5 style={{ paddingLeft: "10px", color: "grey" }}>
                            (Advanced)
                          </h5>
                        </div>
                        <div className="outerCont" style={{ display: "flex" }}>
                          <div class="bullet"></div>
                          <h4 style={{ paddingLeft: "10px" }}>
                            Ethereum Development
                          </h4>
                          <h5 style={{ paddingLeft: "10px", color: "grey" }}>
                            (Intermediate)
                          </h5>
                        </div>
                        <div className="outerCont" style={{ display: "flex" }}>
                          <div class="bullet"></div>
                          <h4 style={{ paddingLeft: "10px" }}>Javascript</h4>
                          <h5 style={{ paddingLeft: "10px", color: "grey" }}>
                            (Advanced)
                          </h5>
                        </div>
                        <div className="outerCont" style={{ display: "flex" }}>
                          <div class="bullet"></div>
                          <h4 style={{ paddingLeft: "10px" }}>HTML</h4>
                          <h5 style={{ paddingLeft: "10px", color: "grey" }}>
                            (Advanced)
                          </h5>
                        </div>
                        <div className="outerCont" style={{ display: "flex" }}>
                          <div class="bullet"></div>
                          <h4 style={{ paddingLeft: "10px" }}>CSS</h4>
                          <h5 style={{ paddingLeft: "10px", color: "grey" }}>
                            (Intermediate)
                          </h5>
                        </div>
                        <div className="outerCont" style={{ display: "flex" }}>
                          <div class="bullet"></div>
                          <h4 style={{ paddingLeft: "10px" }}>ReactJs</h4>
                          <h5 style={{ paddingLeft: "10px", color: "grey" }}>
                            (Advanced)
                          </h5>
                        </div>
                        <div className="outerCont" style={{ display: "flex" }}>
                          <div class="bullet"></div>
                          <h4 style={{ paddingLeft: "10px" }}>Redux</h4>
                          <h5 style={{ paddingLeft: "10px", color: "grey" }}>
                            (Intermediate)
                          </h5>
                        </div>
                        <div className="outerCont" style={{ display: "flex" }}>
                          <div class="bullet"></div>
                          <h4 style={{ paddingLeft: "10px" }}>NodeJs</h4>
                          <h5 style={{ paddingLeft: "10px", color: "grey" }}>
                            (Advanced)
                          </h5>
                        </div>
                        <div className="outerCont" style={{ display: "flex" }}>
                          <div class="bullet"></div>
                          <h4 style={{ paddingLeft: "10px" }}>Express</h4>
                          <h5 style={{ paddingLeft: "10px", color: "grey" }}>
                            (Advanced)
                          </h5>
                        </div>
                      </Col>
                      <Col size={12} md={6}>
                        <div className="outerCont" style={{ display: "flex" }}>
                          <div class="bullet"></div>
                          <h4 style={{ paddingLeft: "10px" }}>MongoDB</h4>
                          <h5 style={{ paddingLeft: "10px", color: "grey" }}>
                            (Advanced)
                          </h5>
                        </div>
                        <div className="outerCont" style={{ display: "flex" }}>
                          <div class="bullet"></div>
                          <h4 style={{ paddingLeft: "10px" }}>MySql</h4>
                          <h5 style={{ paddingLeft: "10px", color: "grey" }}>
                            (Advanced)
                          </h5>
                        </div>
                        <div className="outerCont" style={{ display: "flex" }}>
                          <div class="bullet"></div>
                          <h4 style={{ paddingLeft: "10px" }}>C++</h4>
                          <h5 style={{ paddingLeft: "10px", color: "grey" }}>
                            (Advanced)
                          </h5>
                        </div>
                        <div className="outerCont" style={{ display: "flex" }}>
                          <div class="bullet"></div>
                          <h4 style={{ paddingLeft: "10px" }}>Web3</h4>
                          <h5 style={{ paddingLeft: "10px", color: "grey" }}>
                            (Intermediate)
                          </h5>
                        </div>
                        <div className="outerCont" style={{ display: "flex" }}>
                          <div class="bullet"></div>
                          <h4 style={{ paddingLeft: "10px" }}>Solidity</h4>
                          <h5 style={{ paddingLeft: "10px", color: "grey" }}>
                            (Intermediate)
                          </h5>
                        </div>
                        <div className="outerCont" style={{ display: "flex" }}>
                          <div class="bullet"></div>
                          <h4 style={{ paddingLeft: "10px" }}>NextJs</h4>
                          <h5 style={{ paddingLeft: "10px", color: "grey" }}>
                            (Intermediate)
                          </h5>
                        </div>
                        <div className="outerCont" style={{ display: "flex" }}>
                          <div class="bullet"></div>
                          <h4 style={{ paddingLeft: "10px" }}>
                            Git and Github
                          </h4>
                          <h5 style={{ paddingLeft: "10px", color: "grey" }}>
                            (Advanced)
                          </h5>
                        </div>
                        <div className="outerCont" style={{ display: "flex" }}>
                          <div class="bullet"></div>
                          <h4 style={{ paddingLeft: "10px" }}>Postman</h4>
                          <h5 style={{ paddingLeft: "10px", color: "grey" }}>
                            (Advanced)
                          </h5>
                        </div>
                        <div className="outerCont" style={{ display: "flex" }}>
                          <div class="bullet"></div>
                          <h4 style={{ paddingLeft: "10px" }}>Open Source</h4>
                          <h5 style={{ paddingLeft: "10px", color: "grey" }}>
                            (Intermediate)
                          </h5>
                        </div>
                      </Col>
                    </Row>
                  </div>
                )}
              </TrackVisibility>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
