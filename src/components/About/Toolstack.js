import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiPandas, SiNumpy, SiPlotly, SiJupyter, SiDocker
} from "react-icons/si";
import { MdOutlineMenuBook } from 'react-icons/md';

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
      <SiPandas />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiNumpy />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiPlotly /> {/* Using Plotly to represent Matplotlib */}
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiJupyter /> {/* Representing Jupyter */}
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <MdOutlineMenuBook /> {/* Representing Notebooks */}
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <SiDocker /> {/* Representing Docker */}
    </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
