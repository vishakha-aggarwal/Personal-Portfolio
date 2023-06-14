import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import shopzone from "../assets/img/shopzone.png";
import fundraiser from "../assets/img/fundraiser.jpg";
import chatterbox from "../assets/img/chatterbox.jpg";
import groupChat from "../assets/img/groupChat.png";
import board from "../assets/img/board.png";
import openSource from "../assets/img/openSource.jpg";
import todos from "../assets/img/todos.jpg";
import portfolio from "../assets/img/portfolio.jpg";
import artvista from "../assets/img/artvista.jpg";

export const Projects = () => {
  
  const projects = [
    {
      title: "Art Vista",
      description: "(FullStack Project)",
      imgUrl: artvista,
      type: "web",
      link: "https://github.com/vishakha-aggarwal/ArtVista",
    },
    {
      title: "FundQuest",
      description: "(Ethereum Blockchain Development)",
      imgUrl: fundraiser,
      type: "blockchain",
      link: "https://github.com/vishakha-aggarwal/Fund-Raiser-Campaign",
    },
    {
      title: "ChatterBox",
      description: "(FullStack Project)",
      imgUrl: chatterbox,
      type: "web",
      link: "https://github.com/vishakha-aggarwal/ChatterBox",
    },
    {
      title: "Personal Portfolio",
      description: "(FullStack Project)",
      imgUrl: portfolio,
      type: "web",
      link: "https://github.com/vishakha-aggarwal/Personal-Portfolio",
    },
    {
      title: "Shopzone",
      description: "(FullStack Project)",
      imgUrl: shopzone,
      type: "web",
      link: "https://github.com/vishakha-aggarwal/Shopzone",
    },
    {
      title: "Group Chat Application",
      description: "(FullStack Project)",
      imgUrl: groupChat,
      type: "web",
      link: "https://github.com/vishakha-aggarwal/Group-Chat-App-using-MERN",
    },
    {
      title: "My Digital Board",
      description: "(Frontend Project)",
      imgUrl: board,
      type: "web",
      link: "https://github.com/vishakha-aggarwal/my-digiboard",
    },
    {
      title: "RocketChat",
      description: "(Open Source Project)",
      imgUrl: openSource,
      type: "web",
      link: "https://github.com/RocketChat/",
    },
    {
      title: "Daily Task list",
      description: "(FullStack Project)",
      imgUrl: todos,
      type: "web",
      link: "https://github.com/vishakha-aggarwal/TaskList",
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2
                style={{
                  textDecoration: "underline",
                  paddingBottom: "20px",
                }}
              >
                Personal Projects
              </h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">All</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="mid">Web Based</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="last">BlockChain Based</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="mid">
                    <Row>
                      {projects.map((project, index) => {
                        if (project.type === "web")
                          return <ProjectCard key={index} {...project} />;
                        else 
                          return <></>
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="last">
                    <Row>
                      {projects.map((project, index) => {
                        if (project.type === "blockchain")
                          return <ProjectCard key={index} {...project} />;
                        else 
                          return <></>
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
