import React from "react";
import cover from "../img/cover.jpg";
import conro from "../img/conro.jpg";
import nevve from "../img/nevve.jpg";
import { Row, Col, Image } from "react-bootstrap";
import { BsPlay } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";

function Artist() {
  return (
    <div>
      <Row className="artist__container d-flex align-items-center">
        <div className="artist__release__block">
          <Col sm={3} className="artist__releaseDate">
            <span className="artist__dateText">Instinct</span>
            <span className="artist__dateRelease">
              {" "}
              — Released May 22, 2020
            </span>
          </Col>
        </div>

        <Col sm={5} className="artist__cover">
          <img src={cover} width="100%" alt="album cover" />
        </Col>

        <Col sm={6} className="artist__info">
          <div>
            <h1 className="artist__title">level days</h1>
            <p className="artist__subTitle">conro</p>
          </div>
          <div className="pt-4 artist__images">
            <a href="https://www.monstercat.com/artist/conro">
              <Image src={conro} width="13%" alt="conro" roundedCircle />
            </a>
            <a href="https://www.monstercat.com/artist/nevve">
              <Image
                src={nevve}
                width="13%"
                alt="nevve"
                roundedCircle
                className="ms-3"
              />
            </a>
          </div>
          <div className="artist__btns pt-5 d-flex">
            <button className="artist__playBtn d-flex align-items-center">
              <BsPlay size="1.5em" /> listen now
            </button>
            <button className="artist__shareBtn d-flex align-items-center ms-2">
              <FiShare2 className="me-2" size="1.1em" /> share
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Artist;
