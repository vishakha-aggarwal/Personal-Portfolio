import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  
  return (
    <Col size={12} sm={6} md={4}>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "black"}}>
        <div className="proj-imgbx" style={{height: "198px"}}>
          <img src={imgUrl} style={{height: "inherit"}} alt="project card"/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
