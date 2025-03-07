import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import teamCollab from "../../Assets/Projects/teamCollab.webp";
import Ecommerce from "../../Assets/Projects/Ecommerce.png";
// import suicide from "../../Assets/Projects/suicide.png";
import todolist from "../../Assets/Projects/todolist.png";
import mindsweeper from "../../Assets/Projects/mindsweeper.png";
import mood from "../../Assets/Projects/mood.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="MyStore"
              description="Discover a seamless shopping experience with our cutting-edge e-commerce app, designed to bring your favorite products to your fingertips. With intuitive navigation, secure payments, and personalized recommendations, we make online shopping easier and more enjoyable than ever."
              ghLink="https://github.com/shtakshi8055/E-CommerceApp"
              demoLink="https://ecommerce-app-zeta-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="To-Do-List"
              description="A personnalised To-do-list build with React.js and Tailwind Css which helps to keep you organized and boost your productivity with our simple yet powerful to-do list app. It effortlessly manage tasks, set priorities, and track progress—all in one place."
              ghLink="https://github.com/shtakshi8055/To-DO-List"
              demoLink="https://to-do-list-swart-beta-93.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindsweeper}
              isBlog={false}
              title="Mindsweeper"
              description=" A console-based implementation of the classic Minesweeper game using Python. This project demonstrates game logic, including grid generation, bomb placement, user input handling, and win/lose conditions. The game features an interactive user interface with a grid display, allowing players to uncover cells while avoiding hidden mines. This project helped improve my problem-solving skills and knowledge of Python data structures."
              ghLink="https://github.com/shtakshi8055/Minesweeper"
             // demoLink="https://to-do-list-swart-beta-93.vercel.app/"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teamCollab}
              isBlog={false}
              title="Team-Collab"
              description=" This Team Management and Task Assignment app is designed to streamline collaboration within teams. Built using React.js and Firebase, it allows users to create teams, assign tasks, and manage workflows efficiently. The real-time synchronization ensures that all team members are kept up-to-date with task progress. The app features intuitive interfaces for creating teams, managing members, and assigning tasks, making it an ideal tool for teams of all sizes looking to improve their project management and collaboration. Whether you’re managing a small team or handling multiple projects, this app simplifies the entire process."
              ghLink="https://github.com/shtakshi8055/Team-Collab"
              demoLink="https://team-collab-rust.vercel.app/"
            />
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mood}
              isBlog={false}
              title="Mood-Tracker"
              description=" A Mood Tracking App built using Next.js that allows users to log and monitor their daily emotional states. The app provides an intuitive interface for users to track their mood over time, visualize trends, and reflect on their emotional well-being. The app emphasizes a simple, user-friendly design and utilizes modern web technologies to ensure a smooth and responsive experience."
              ghLink="https://github.com/shtakshi8055/Broodlee"
              demoLink="https://broodlenew.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;