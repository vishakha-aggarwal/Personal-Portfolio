import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import linkedin from '../assets/img/linkedin.jpg';
import githubLogo from '../assets/img/githubLogo.jpg';
import instagram from '../assets/img/instagram.jpg';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) 
        setScrolled(true);
      else 
        setScrolled(false);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <Router>
      <Navbar expand="md" className="scrolled" style={{width: window.innerWidth < 768 ? "200px": "100vw", height:  window.innerWidth < 768 ? "": ""}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
            <Nav.Link href="#profile" className={activeLink === 'codingprofile' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('codingprofile')}>Profiles</Nav.Link>
            <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
          <span className="navbar-text social-icon">
            <a href="https://www.linkedin.com/in/vishakha-aggarwal-49b348206/"><img src={linkedin} alt="" /></a>
            <a href="https://github.com/vishakha-aggarwal"><img src={githubLogo} alt="" /></a>
            <a href="https://www.instagram.com/251_vishakha/"><img src={instagram} alt="" /></a>
          </span>
        </Navbar.Collapse>
      </Navbar>
    </Router>
  )
}
