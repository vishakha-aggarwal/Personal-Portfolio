import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import welcomeImg from "../assets/img/welcome.gif";
import 'animate.css'
import TrackVisibility from "react-on-screen";

export const Home = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Full Stack Web Developer",
    "Ethereum Blockchain Developer",
    "Open Source Contributor",
    "Problem solver",
    "Tech Enthusiast",
    "Competitive Programmer",
  ];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) setDelta((prevDelta) => prevDelta / 2);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else 
      setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <section className="home" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div>
                    <h1 style={{ fontStyle: "italic" }}>
                      <div>Hey! I'm Vishakha,</div>
                    </h1>
                    <h2 style={{ fontStyle: "italic" }}>
                      <span className="txt-rotate">
                        <span className="wrap">{text}</span>
                      </span>
                    </h2>
                    <p>
                      A Full Stack Web and Ethereum Blockchain Developer who
                      loves to build Web Apps using modern technologies, always
                      passionate and ready to learn new things, have worked on
                      several projects and contributed in Open Source projects.
                    </p>
                    <a href="#contact" style={{ textDecoration: "none" }}>
                      <button className="home-contact">Let’s Connect </button>
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={welcomeImg} alt="Welcome Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
