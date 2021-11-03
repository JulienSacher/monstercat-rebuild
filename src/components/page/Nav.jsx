import React from "react";
import logo from "../img/logo.jpg";
import sideLogo from "../img/side-logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaTwitch,
  FaFacebook,
  FaDiscord,
} from "react-icons/fa";
import { CgPlayButtonO } from "react-icons/cg";

function Nav() {
  return (
    <div>
      {/* Nav */}
      <div className="nav__container d-flex justify-content-between fixed-top">
        <a href="/">
          <img src={logo} width="50px" alt="logo" />
        </a>
        <div className="nav__socials">
          <ul className="nav__socialsNav">
            <li className="nav__socialLi">
              <a href="https://www.instagram.com/monstercat">
                <FaInstagram
                  size="1.2em"
                  color="white"
                  className="mb-3 nav__socialLink"
                />
              </a>
            </li>
            <li className="nav__socialLi">
              <a href="https://tiktok.com/@monstercat">
                <FaTiktok
                  size="1.2em"
                  color="white"
                  className="mb-3 nav__socialLink"
                />
              </a>
            </li>
            <li className="nav__socialLi">
              <a href="https://twitter.com/monstercat">
                <FaTwitter
                  size="1.2em"
                  color="white"
                  className="mb-3 nav__socialLink"
                />
              </a>
            </li>
            <li className="nav__socialLi">
              <a href="https://www.twitch.tv/monstercat">
                <FaTwitch
                  size="1.2em"
                  color="white"
                  className="mb-3 nav__socialLink"
                />
              </a>
            </li>
            <li className="nav__socialLi">
              <a href="https://www.facebook.com/monstercat">
                <FaFacebook
                  size="1.2em"
                  color="white"
                  className="mb-3 nav__socialLink"
                />
              </a>
            </li>
            <li className="nav__socialLi">
              <a href="https://discord.com/invite/monstercat">
                <FaDiscord
                  size="1.2em"
                  color="white"
                  className="mb-3 nav__socialLink"
                />
              </a>
            </li>
            <li>
              <a href="https://www.monstercat.com/player">
                <CgPlayButtonO
                  size="1.2em"
                  color="white"
                  className="nav__socialLink"
                />
              </a>
            </li>
          </ul>
        </div>
        <button
          className="btn btn-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <GiHamburgerMenu size="1.5em" color="white" />
        </button>
      </div>

      {/* Sidebar*/}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        data-bs-scroll="true"
        data-bs-backdrop="false"
      >
        <div className="offcanvas-header pb-3 sticky-top d-flex justify-content-between">
          <a href="https://www.monstercat.com/">
            <img src={sideLogo} width="200px" alt="logo" />
          </a>
          <button
            type="button"
            className="btn-close btn-close-white text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                music
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <a
                  href="https://www.monstercat.com/music"
                  className="nav__dropdown"
                >
                  our music
                </a>
              </div>
              <div className="accordion-body">
                <a
                  href="https://www.monstercat.com/instinct"
                  className="nav__dropdown"
                >
                  instinct
                </a>
              </div>
              <div className="accordion-body">
                <a
                  href="https://www.monstercat.com/uncaged"
                  className="nav__dropdown"
                >
                  uncaged
                </a>
              </div>
              <div className="accordion-body">
                <a
                  href="https://www.monstercat.com/silk"
                  className="nav__dropdown"
                >
                  silk
                </a>
              </div>
            </div>
          </div>
          <div className="nav__links">
            <a
              href="https://www.monstercat.com/artists"
              className="nav__sideLinks"
            >
              artists
            </a>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                about
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <a
                  href="https://www.monstercat.com/about"
                  className="nav__dropdown"
                >
                  about monstercat
                </a>
              </div>
              <div className="accordion-body">
                <a
                  href="https://www.monstercat.com/diversity-and-inclusion"
                  className="nav__dropdown"
                >
                  diversity & inclusion
                </a>
              </div>
              <div className="accordion-body">
                <a
                  href="https://www.monstercat.com/code-of-ethics"
                  className="nav__dropdown"
                >
                  code of ethics
                </a>
              </div>
              <div className="accordion-body">
                <a
                  href="https://www.monstercat.com/contact-us"
                  className="nav__dropdown"
                >
                  contact us
                </a>
              </div>
            </div>
          </div>
          <div className="nav__links">
            <a
              href="https://www.monstercat.com/news"
              className="nav__sideLinks"
            >
              news
            </a>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Events
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <a
                  href="https://www.monstercat.com/events"
                  className="nav__dropdown text-center"
                >
                  monstercat events experience
                </a>
              </div>
              <div className="accordion-body">
                <a
                  href="https://www.monstercat.com/events/upcoming"
                  className="nav__dropdown"
                >
                  upcomming events
                </a>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                programming
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <a
                  href="https://www.monstercat.com/monstercat-tv"
                  className="nav__dropdownLow"
                >
                  MonstercatTV
                </a>
              </div>
              <div className="accordion-body">
                <a
                  href="https://www.monstercat.com/call-of-the-wild"
                  className="nav__dropdown"
                >
                  call of the wild
                </a>
              </div>
              <div className="accordion-body">
                <a
                  href="https://www.monstercat.com/silk-showcase"
                  className="nav__dropdown"
                >
                  silk showcase
                </a>
              </div>
              <div className="accordion-body">
                <a
                  href="https://www.monstercat.com/monstercat-tv/upcoming"
                  className="nav__dropdown"
                >
                  upcomming shows
                </a>
              </div>
            </div>
          </div>
          <div className="nav__links">
            <a
              href="https://www.monstercat.com/gold"
              className="nav__sideLinks"
            >
              gold
            </a>
          </div>
          <div className="nav__links">
            <a
              href="https://www.monstercat.com/partnerships"
              className="nav__sideLinks"
            >
              partners
            </a>
          </div>
          <div className="nav__links">
            <a
              href="https://www.monstercat.com/press"
              className="nav__sideLinks"
            >
              press
            </a>
          </div>
          <div className="nav__links">
            <a
              href="https://www.monstercat.com/player"
              className="nav__sideLinks"
            >
              player
            </a>
          </div>
          <div className="nav__links">
            <a href="https://shop.monstercat.com/" className="nav__sideLinks">
              shop
            </a>
          </div>
          <div className="nav__links">
            <a
              href="https://www.monstercat.com/lost-civ"
              className="nav__sideLinks"
            >
              lost civilization
            </a>
          </div>
        </div>

        <div className="nav__sideFooterLink">
          <div>
            <ul className="d-flex">
              <li>
                <a href="https://www.instagram.com/monstercat">
                  <FaInstagram size="1.2em" color="white" className="" />
                </a>
              </li>
              <li>
                <a href="https://tiktok.com/@monstercat">
                  <FaTiktok size="1.2em" color="white" className="ms-3" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/monstercat">
                  <FaTwitter size="1.2em" color="white" className="ms-3" />
                </a>
              </li>
              <li>
                <a href="https://www.twitch.tv/monstercat">
                  <FaTwitch size="1.2em" color="white" className="ms-3" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/monstercat">
                  <FaFacebook size="1.2em" color="white" className="ms-3" />
                </a>
              </li>
              <li>
                <a href="https://discord.com/invite/monstercat">
                  <FaDiscord size="1.2em" color="white" className="ms-3" />
                </a>
              </li>
              <li>
                <a href="https://www.monstercat.com/player">
                  <CgPlayButtonO size="1.2em" color="white" className="ms-3" />
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <button
              className="nav__signInBtn"
              onClick={() => {
                window.open("https://www.monstercat.com/sign-in");
              }}
            >
              sign in
            </button>
            <span className="nav__signText ms-2">or</span>
            <button
              className="nav__signUpBtn"
              onClick={() => {
                window.open("https://www.monstercat.com/sign-up");
              }}
            >
              sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
