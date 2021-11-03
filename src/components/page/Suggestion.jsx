import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import small from "../img/small.jfif";
import sabai from "../img/sabai.png";
import dyro from "../img/dyro.jpg";
import luv from "../img/luv.jpg";
import gotta from "../img/gotta.jpg";
import fighters from "../img/fighters.jfif";

function Suggestion() {
  return (
    <div className="suggestion__container">
      <h2 className="suggestion__title d-flex">other release like this</h2>
      <div>
        <Row className="suggestion__album">
          <Col className="d-flex flex-column">
            <Image src={sabai} width="100%" />
            <span className="suggestion__track mt-3">falling for you</span>
            <span className="suggestion__artist">Sabai, With Løve & Nevve</span>
          </Col>
          <Col className="d-flex flex-column">
            <Image src={dyro} width="100%" />
            <span className="suggestion__track mt-3">memory bank</span>
            <span className="suggestion__artist">Dyro x Conro</span>
          </Col>
          <Col className="d-flex flex-column">
            <Image src={luv} width="100%" />
            <span className="suggestion__track mt-3">luv(drunk)</span>
            <span className="suggestion__artist">Conro</span>
          </Col>
          <Col className="d-flex flex-column">
            <Image src={gotta} width="100%" />
            <span className="suggestion__track mt-3">you gotta be</span>
            <span className="suggestion__artist">Conro & LissA</span>
          </Col>
          <Col className="d-flex flex-column">
            <Image src={small} width="100%" />
            <span className="suggestion__track mt-3">the small things</span>
            <span className="suggestion__artist">Conro</span>
          </Col>
          <Col className="d-flex flex-column">
            <Image src={fighters} width="100%" />
            <span className="suggestion__track mt-3">fighters</span>
            <span className="suggestion__artist">Conro</span>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Suggestion;
