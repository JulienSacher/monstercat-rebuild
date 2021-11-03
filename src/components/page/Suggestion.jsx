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
            <a href="https://www.monstercat.com/release/MCS1285">
              <Image src={sabai} width="100%" />
            </a>
            <span className="suggestion__track mt-3">
              <a href="https://www.monstercat.com/release/MCS1285">falling for you</a>
            </span>
            <span className="suggestion__artist">Sabai, With Løve & Nevve</span>
          </Col>
          <Col className="d-flex flex-column">
            <a href="https://www.monstercat.com/release/MCS1195">
              <Image src={dyro} width="100%" />
            </a>
            <span className="suggestion__track mt-3">
              <a href="https://www.monstercat.com/release/MCS1195">memory bank</a>
            </span>
            <span className="suggestion__artist">Dyro x Conro</span>
          </Col>
          <Col className="d-flex flex-column">
            <a href="https://www.monstercat.com/release/MCS1110">
              <Image src={luv} width="100%" />
            </a>
            <span className="suggestion__track mt-3">
              <a href="https://www.monstercat.com/release/MCS1110">luv(drunk)</a>
            </span>
            <span className="suggestion__artist">Conro</span>
          </Col>
          <Col className="d-flex flex-column">
            <a href="https://www.monstercat.com/release/MCS1087">
              <Image src={gotta} width="100%" />
            </a>
            <span className="suggestion__track mt-3">
              <a href="https://www.monstercat.com/release/MCS1087">you gotta be</a>
            </span>
            <span className="suggestion__artist">Conro & LissA</span>
          </Col>
          <Col className="d-flex flex-column">
            <a href="https://www.monstercat.com/release/MCS985">
              <Image src={small} width="100%" />
            </a>
            <span className="suggestion__track mt-3">
              <a href="https://www.monstercat.com/release/MCS985">the small things</a>
            </span>
            <span className="suggestion__artist">Conro</span>
          </Col>
          <Col className="d-flex flex-column">
            <a href="https://www.monstercat.com/release/MCS964">
              <Image src={fighters} width="100%" />
            </a>
            <span className="suggestion__track mt-3">
              <a href="https://www.monstercat.com/release/MCS964">fighters</a>
            </span>
            <span className="suggestion__artist">Conro</span>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Suggestion;
