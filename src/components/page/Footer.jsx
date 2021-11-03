import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import {
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaTwitch,
  FaFacebook,
  FaDiscord,
  FaYoutube,
  FaSpotify,
  FaApple,
} from "react-icons/fa";
import { CgPlayButtonO } from "react-icons/cg";
import { SiTriller } from "react-icons/si";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer__container">
      <Row className="footer__content py-5 d-flex justify-content-between">
        <Col>
          <div className="mb-2">
            <a href="https://www.monstercat.com/about" className="footer__link">
              about monstercat
            </a>
          </div>
          <div className="mb-2">
            <a
              href="https://www.monstercat.com/contact-us"
              className="footer__link"
            >
              contact us
            </a>
          </div>
          <div className="mb-2">
            <a
              href="https://www.monstercat.com/careers"
              className="footer__link"
            >
              careers
            </a>
          </div>
          <div className="mb-2">
            <a href="https://www.monstercat.com/news" className="footer__link">
              news
            </a>
          </div>
          <div>
            <a href="https://www.monstercat.com/press" className="footer__link">
              press
            </a>
          </div>
        </Col>
        <Col>
          <div className="mb-2 footer__linkResp">
            <a
              href="https://www.monstercat.com/terms-of-service"
              className="footer__link"
            >
              terms of services
            </a>
          </div>
          <div>
            <a
              href="https://www.monstercat.com/privacy-policy"
              className="footer__link"
            >
              privacy policy
            </a>
          </div>
        </Col>
        <Col>
          <p className="footer__subtitle">monstercat news</p>
          <br />
          <p className="footer__quote">
            Don't miss a thing, stay up to date with the latest news from us.
          </p>
          <div className="footer__input pb-2 d-flex">
            <input
              type="text"
              placeholder="Enter email"
              className="footer__mail"
            />
            <button className="footer__btn px-4 py-2">
              <HiOutlineArrowNarrowRight />
            </button>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-between mt-5 footer__copyrightBlock">
        <Col>
          <span className="footer__copyright">
            2021 © Monstercat, All Rights Reserved
          </span>
        </Col>
        <Col>
          <ul className="d-flex justify-content-end footer__li">
            <li>
              <a href="https://www.youtube.com/user/MonstercatMedia">
                <FaYoutube size="1.2em" color="white" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/monstercat">
                <FaInstagram
                  size="1.2em"
                  color="white"
                  className="ms-4 footer__socialsIcon"
                />
              </a>
            </li>
            <li>
              <a href="https://tiktok.com/@monstercat">
                <FaTiktok
                  size="1.2em"
                  color="white"
                  className="ms-4 footer__socialsIcon"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/monstercat">
                <FaTwitter
                  size="1.2em"
                  color="white"
                  className="ms-4 footer__socialsIcon"
                />
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/user/monstercatmedia">
                <FaSpotify
                  size="1.2em"
                  color="white"
                  className="ms-4 footer__socialsIcon"
                />
              </a>
            </li>
            <li>
              <a href="https://music.apple.com/ca/curator/monstercat/1233905953">
                <FaApple
                  size="1.2em"
                  color="white"
                  className="ms-4 footer__socialsIcon"
                />
              </a>
            </li>
            <li>
              <a href="https://www.twitch.tv/monstercat">
                <FaTwitch
                  size="1.2em"
                  color="white"
                  className="ms-4 footer__socialsIcon"
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/monstercat">
                <FaFacebook
                  size="1.2em"
                  color="white"
                  className="ms-4 footer__socialsIcon"
                />
              </a>
            </li>
            <li>
              <a href="https://discord.com/invite/monstercat">
                <FaDiscord
                  size="1.2em"
                  color="white"
                  className="ms-4 footer__socialsIcon"
                />
              </a>
            </li>
            <li>
              <a href="https://triller.co/@monstercat">
                <SiTriller
                  size="1.2em"
                  color="white"
                  className="ms-4 footer__socialsIcon"
                />
              </a>
            </li>
            <li>
              <a href="https://www.monstercat.com/player">
                <CgPlayButtonO
                  size="1.2em"
                  color="white"
                  className="ms-4 footer__socialsIcon"
                />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <div className="d-flex flex-column text-center footer__bottom">
        <div>
          <p className="footer__text">
            We acknowledge with gratitude the traditional, ancestral and unceded
            land of the Coast Salish peoples, including the territories of the
            Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh
            (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which
            Monstercat's Vancouver HQ stands.
          </p>
        </div>
        <div>
          <p className="footer__text">
            We acknowledge the unceded and ancestral territories of the
            Gabrielino/Tongva peoples on which our LA team live and work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
