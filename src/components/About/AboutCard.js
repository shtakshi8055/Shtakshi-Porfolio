import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shtakshi Sharma </span>
            from <span className="purple"> Chandigarh, India.</span>
            <br />
            I am currently pursuing Bachelor's of Technologies in Computer Science
            Engineering at Chandigarh Groups of College, Landran.
            <br /> <br />
            I am a 3rd year student with the a good hold on :
            <br />
            <ul>
            <li className="about-activity">
              <ImPointRight /> C++, Java, Python and Javascript.
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Structure and Algorithms
            </li>
            <li className="about-activity">
              <ImPointRight /> Deep knowledge on Data Science and Machine Learning. 
            </li>
            </ul>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Fictional Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Caliigraphy
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shtakshi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
