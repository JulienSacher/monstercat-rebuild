import React from "react";
import { CgPlayButtonO } from "react-icons/cg";
import {
  FaApple,
  FaSpotify,
  FaYoutube,
  FaBandcamp,
  FaSoundcloud,
} from "react-icons/fa";

function Stream() {
  return (
    <div className="stream__container">
      <h2 className="stream__title">stream it your way</h2>
      <div className="d-flex flex-wrap stream__content">
        <div className="stream__links d-flex align-items-center">
          <a
            href="https://www.monstercat.com/player/release/MCLP017"
            className="d-flex align-items-center"
          >
            <CgPlayButtonO size="1.2em" color="white" />
            <span className="stream__playText ps-1">player</span>
          </a>
        </div>
        <div className="stream__links">
          <a href="https://music.apple.com/ca/album/level-days/1508531211">
            <FaApple size="1.2em" color="white" />
          </a>
        </div>
        <div className="stream__links">
          <a href="https://open.spotify.com/playlist/4vM8ONc8HQ9odCaEZTEv89?si=7DJVqY5dTJm6rfylntpAHg">
            <FaSpotify size="1.2em" color="white" />
          </a>
        </div>
        <div className="stream__links">
          <a href="https://www.youtube.com/watch?v=7nObtWENgxA&list=PLyBpB3ighZijdaq0QsA77iQVvE39gJ9-U&index=2&t=0s">
            <FaYoutube size="1.2em" color="white" />
          </a>
        </div>
        <div className="stream__links">
          <a href="https://monstercatmedia.bandcamp.com/album/level-days">
            <FaBandcamp size="1.2em" color="white" />
          </a>
        </div>
        <div className="stream__links">
          <a href="https://soundcloud.com/monstercat/sets/conro-level-days">
            <FaSoundcloud
              className="stream__icons"
              size="1.2em"
              color="white"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Stream;
