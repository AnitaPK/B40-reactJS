import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { Navbar, Nav, Container, Card, Form, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import img11 from "../assets/aboutUs.jpg";
import { FaBahai } from "react-icons/fa";

AOS.init();

const PageOne = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="text-center bg-dark text-white py-5">
        <Container>
          <h2>
          Main hoon <span className="text-primary"><FaBahai />James Bond<FaBahai /></span>, jo duniya ki raahon mein apna rang chhoda hai! 
          </h2>
          <ReactTyped
            strings={["A Computer Technology Student", "Web Developer", "Tech Enthusiast"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Container>
      </section>
{/* About Section */}
<section id="about" className="py-5" style={{ backgroundImage: 'url("https://via.placeholder.com/1500")', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
  <Container>
    <h2 className="text-center mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>About Me</h2>
    <div className="row justify-content-center">
      <div className="col-md-6" data-aos="fade-up">
        <p className="text-dark" style={{ fontSize: '1.2rem', lineHeight: '1.6', textAlign: 'center' }}>
          I am a passionate computer technology student with a strong interest in software development, web design, and emerging technologies.
          I thrive on solving problems and learning new skills to stay updated in this ever-evolving field.
        </p>
        <div className="text-center">
          <Button variant="outline-dark" size="lg" className="mt-4">Learn More</Button>
        </div>
      </div>
      <div className="col-md-6" data-aos="fade-up">
        <img 
          src={img11} 
          alt="Profile" 
          className="img-fluid rounded-circle shadow-lg " 
          style={{ border: '5px solid white' }} 
        />
      </div>
    </div>
  </Container>
</section>


      {/* Skills Section */}
      <section id="skills" className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">My Skills</h2>
          <div className="d-flex justify-content-around flex-wrap">
            <Card style={{ width: "18rem" }} data-aos="flip-left">
              <Card.Body>
                <Card.Title>Frontend Development</Card.Title>
                <Card.Text>
                  Proficient in HTML, CSS, JavaScript, React, and Bootstrap.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} data-aos="flip-right">
              <Card.Body>
                <Card.Title>Backend Development</Card.Title>
                <Card.Text>
                  Skilled in Node.js, Express, and database management with MongoDB.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} data-aos="flip-left">
              <Card.Body>
                <Card.Title>Problem Solving</Card.Title>
                <Card.Text>
                  Experienced in solving coding challenges and algorithms.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <Container>
          <h2 className="text-center mb-4">My Projects</h2>
          <div className="d-flex justify-content-around flex-wrap">
            <Card style={{ width: "18rem" }} data-aos="fade-up">
              <Card.Img variant="top" src="https://i.ytimg.com/vi/aibtHnbeuio/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLANiu3K3Tz-UBj_mu5KQYedGMhbTA" />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>A brief description of the project.</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} data-aos="fade-up">
              <Card.Img variant="top" src="https://i.ytimg.com/vi/aibtHnbeuio/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLANiu3K3Tz-UBj_mu5KQYedGMhbTA" />
              <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>A brief description of the project.</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} data-aos="fade-up">
              <Card.Img variant="top" src="https://i.ytimg.com/vi/aibtHnbeuio/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLANiu3K3Tz-UBj_mu5KQYedGMhbTA" />
              <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>A brief description of the project.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-dark text-white py-5">
        <Container>
          <h2 className="text-center mb-4">Contact Me</h2>
          <Form data-aos="fade-up">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <div className="text-center mt-4">
            <FaGithub className="mx-2" size={30} />
            <FaLinkedin className="mx-2" size={30} />
            <FaEnvelope className="mx-2" size={30} />
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PageOne;
