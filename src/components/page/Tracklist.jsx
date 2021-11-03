import React, { useState } from "react";
import useSound from 'use-sound';
import { RiPlayLine, RiPauseLine } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";
import ghost from "../mp3/Ghostrifter-Deflector.mp3"
import lyvo from "../mp3/Lyvo-Home.mp3"
import scan from "../mp3/Scandinavianz-Hiking.mp3"
import clo from "../mp3/Clo.mp3"
import ero from "../mp3/Ero.mp3"
import hmo from "../mp3/HMO.mp3"
import mark from "../mp3/Mark.mp3"
import niwel from "../mp3/Niwel.mp3"
import uncle from "../mp3/Uncle.mp3"
import vex from "../mp3/Vex.mp3"
import virt from "../mp3/Virt.mp3"
import won from "../mp3/Won.mp3"

function Tracklist() {

  const [playingGhost, setPlayingGhost] = useState(false);
  const [playingLyvo, setPlayingLyvo] = useState(false);
  const [playingScan, setPlayingScan] = useState(false);
  const [playingClo, setPlayingClo] = useState(false);
  const [playingEro, setPlayingEro] = useState(false);
  const [playingHmo, setPlayingHmo] = useState(false);
  const [playingMark, setPlayingMark] = useState(false);
  const [playingNiwel, setPlayingNiwel] = useState(false);
  const [playingUncle, setPlayingUncle] = useState(false);
  const [playingVex, setPlayingVex] = useState(false);
  const [playingVirt, setPlayingVirt] = useState(false);
  const [playingWon, setPlayingWon] = useState(false);

  const [song, setSong] = useState('');
  const [play, {stop}] = useSound(song);
  
  return (
    <div className="tracklist__container">
      <h2 className="tracklist__title">track list</h2>
      <table className="table table-borderless mb-1">
        <tbody>
          <tr className="d-flex align-items-center justify-content-between pt-3">
            <td className="me-2 tracklist__num">1</td>
            <td>
              <button className="tracklist__btn song" onMouseDown={() => setSong(ghost)} onClick={() => {
                playingGhost? stop() : play();
                setPlayingGhost(!playingGhost)
              }}>
                {playingGhost?
                  <RiPauseLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />:
                  <RiPlayLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />}
              </button>
            </td>
            <td>
              <div className="d-flex flex-column ms-1 tracklist__track">
                <span className="tracklist__song">The Small Things</span>
                <span className="tracklist__artist">Conro</span>
              </div>
            </td>
            <td className="text-end tracklist__duration ms-auto">3:35</td>
            <td className="mx-4 tracklist__shareBtn">
              <button className="tracklist__btn">
                <FiShare2 size="1.5em" color="white" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table table-borderless mb-1">
        <tbody>
          <tr className="d-flex align-items-center justify-content-between tracklist__content">
            <td className="me-2 tracklist__num">2</td>
            <td>
              <button className="tracklist__btn song" onMouseDown={() => setSong(lyvo)} onClick={() => {
                playingLyvo? stop() : play();
                setPlayingLyvo(!playingLyvo)
              }}>
                {playingLyvo?
                  <RiPauseLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />:
                  <RiPlayLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />}
              </button>
            </td>
            <td>
              <div className="d-flex flex-column ms-1 tracklist__track">
                <span className="tracklist__song">Without Your Love</span>
                <span className="tracklist__artist">Conro</span>
              </div>
            </td>
            <td className="text-end tracklist__duration ms-auto">3:09</td>
            <td className="mx-4 tracklist__shareBtn">
              <button className="tracklist__btn">
                <FiShare2 size="1.5em" color="white" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table table-borderless mb-1">
        <tbody>
          <tr className="d-flex align-items-center justify-content-between tracklist__content">
            <td className="me-2 tracklist__num">3</td>
            <td>
              <button className="tracklist__btn song" onMouseDown={() => setSong(scan)} onClick={() => {
                playingScan? stop() : play();
                setPlayingScan(!playingScan)
              }}>
                {playingScan?
                  <RiPauseLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />:
                  <RiPlayLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />}
              </button>
            </td>
            <td>
              <div className="d-flex flex-column ms-1 tracklist__track">
                <span className="tracklist__song">Therapy</span>
                <span className="tracklist__artist">Conro</span>
              </div>
            </td>
            <td className="text-end tracklist__duration ms-auto">3:06</td>
            <td className="mx-4 tracklist__shareBtn">
              <button className="tracklist__btn">
                <FiShare2 size="1.5em" color="white" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table table-borderless mb-1">
        <tbody>
          <tr className="d-flex align-items-center justify-content-between tracklist__content">
            <td className="me-2 tracklist__num">4</td>
            <td>
              <button className="tracklist__btn song" onMouseDown={() => setSong(clo)} onClick={() => {
                playingClo? stop() : play();
                setPlayingClo(!playingClo)
              }}>
                {playingClo?
                  <RiPauseLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />:
                  <RiPlayLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />}
              </button>
            </td>
            <td>
              <div className="d-flex flex-column ms-1 tracklist__track">
                <span className="tracklist__song">Fighters</span>
                <span className="tracklist__artist">Conro</span>
              </div>
            </td>
            <td className="text-end tracklist__duration ms-auto">3:46</td>
            <td className="mx-4 tracklist__shareBtn">
              <button className="tracklist__btn">
                <FiShare2 size="1.5em" color="white" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table table-borderless mb-1">
        <tbody>
          <tr className="d-flex align-items-center justify-content-between tracklist__content">
            <td className="me-2 tracklist__num">5</td>
            <td>
              <button className="tracklist__btn song" onMouseDown={() => setSong(ero)} onClick={() => {
                playingEro? stop() : play();
                setPlayingEro(!playingEro)
              }}>
                {playingEro?
                  <RiPauseLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />:
                  <RiPlayLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />}
              </button>
            </td>
            <td>
              <div className="d-flex flex-column ms-1 tracklist__track">
                <span className="tracklist__song">Way Up</span>
                <span className="tracklist__artist">Conro & Nevve</span>
              </div>
            </td>
            <td className="text-end tracklist__duration ms-auto">3:32</td>
            <td className="mx-4 tracklist__shareBtn">
              <button className="tracklist__btn">
                <FiShare2 size="1.5em" color="white" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table table-borderless mb-1">
        <tbody>
          <tr className="d-flex align-items-center justify-content-between tracklist__content">
            <td className="me-2 tracklist__num">6</td>
            <td>
              <button className="tracklist__btn song" onMouseDown={() => setSong(hmo)} onClick={() => {
                playingHmo? stop() : play();
                setPlayingHmo(!playingHmo)
              }}>
                {playingHmo?
                  <RiPauseLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />:
                  <RiPlayLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />}
              </button>
            </td>
            <td>
              <div className="d-flex flex-column ms-1 tracklist__track">
                <span className="tracklist__song">Waiting</span>
                <span className="tracklist__artist">Conro</span>
              </div>
            </td>
            <td className="text-end tracklist__duration ms-auto">3:07</td>
            <td className="mx-4 tracklist__shareBtn">
              <button className="tracklist__btn">
                <FiShare2 size="1.5em" color="white" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table table-borderless mb-1">
        <tbody>
          <tr className="d-flex align-items-center justify-content-between tracklist__content">
            <td className="me-2 tracklist__num">7</td>
            <td>
              <button className="tracklist__btn song" onMouseDown={() => setSong(mark)} onClick={() => {
                playingMark? stop() : play();
                setPlayingMark(!playingMark)
              }}>
                {playingMark?
                  <RiPauseLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />:
                  <RiPlayLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />}
              </button>
            </td>
            <td>
              <div className="d-flex flex-column ms-1 tracklist__track">
                <span className="tracklist__song">Dreaming</span>
                <span className="tracklist__artist">Conro</span>
              </div>
            </td>
            <td className="text-end tracklist__duration ms-auto">2:57</td>
            <td className="mx-4 tracklist__shareBtn">
              <button className="tracklist__btn">
                <FiShare2 size="1.5em" color="white" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table table-borderless mb-1">
        <tbody>
          <tr className="d-flex align-items-center justify-content-between tracklist__content">
            <td className="me-2 tracklist__num">8</td>
            <td>
              <button className="tracklist__btn song" onMouseDown={() => setSong(niwel)} onClick={() => {
                playingNiwel? stop() : play();
                setPlayingNiwel(!playingNiwel)
              }}>
                {playingNiwel?
                  <RiPauseLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />:
                  <RiPlayLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />}
              </button>
            </td>
            <td>
              <div className="d-flex flex-column ms-1 tracklist__track">
                <span className="tracklist__song">Tattoo</span>
                <span className="tracklist__artist">Conro</span>
              </div>
            </td>
            <td className="text-end tracklist__duration ms-auto">3:29</td>
            <td className="mx-4 tracklist__shareBtn">
              <button className="tracklist__btn">
                <FiShare2 size="1.5em" color="white" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table table-borderless mb-1">
        <tbody>
          <tr className="d-flex align-items-center justify-content-between tracklist__content">
            <td className="me-2 tracklist__num">9</td>
            <td>
              <button className="tracklist__btn song" onMouseDown={() => setSong(uncle)} onClick={() => {
                playingUncle? stop() : play();
                setPlayingUncle(!playingUncle)
              }}>
                {playingUncle?
                  <RiPauseLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />:
                  <RiPlayLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />}
              </button>
            </td>
            <td>
              <div className="d-flex flex-column ms-1 tracklist__track">
                <span className="tracklist__song">Out for the Night</span>
                <span className="tracklist__artist">Conro</span>
              </div>
            </td>
            <td className="text-end tracklist__duration ms-auto">3:05</td>
            <td className="mx-4 tracklist__shareBtn">
              <button className="tracklist__btn">
                <FiShare2 size="1.5em" color="white" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table table-borderless mb-1">
        <tbody>
          <tr className="d-flex align-items-center justify-content-between tracklist__content">
            <td className="tracklist__num">10</td>
            <td>
              <button className="tracklist__btn song" onMouseDown={() => setSong(vex)} onClick={() => {
                playingVex? stop() : play();
                setPlayingVex(!playingVex)
              }}>
                {playingVex?
                  <RiPauseLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />:
                  <RiPlayLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />}
              </button>
            </td>
            <td>
              <div className="d-flex flex-column ms-1 tracklist__track">
                <span className="tracklist__song">Overdue</span>
                <span className="tracklist__artist">Conro</span>
              </div>
            </td>
            <td className="text-end tracklist__duration ms-auto">2:48</td>
            <td className="mx-4 tracklist__shareBtn">
              <button className="tracklist__btn">
                <FiShare2 size="1.5em" color="white" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table table-borderless mb-1">
        <tbody>
          <tr className="d-flex align-items-center justify-content-between tracklist__content">
            <td className="tracklist__num">11</td>
            <td>
              <button className="tracklist__btn song" onMouseDown={() => setSong(virt)} onClick={() => {
                playingVirt? stop() : play();
                setPlayingVirt(!playingVirt)
              }}>
                {playingVirt?
                  <RiPauseLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />:
                  <RiPlayLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />}
              </button>
            </td>
            <td>
              <div className="d-flex flex-column ms-1 tracklist__track">
                <span className="tracklist__song">Say It</span>
                <span className="tracklist__artist">Conro</span>
              </div>
            </td>
            <td className="text-end tracklist__duration ms-auto">3:04</td>
            <td className="mx-4 tracklist__shareBtn">
              <button className="tracklist__btn">
                <FiShare2 size="1.5em" color="white" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table table-borderless mb-1">
        <tbody>
          <tr className="d-flex align-items-center justify-content-between tracklist__content">
            <td className="me-0 tracklist__num">12</td>
            <td>
              <button className="tracklist__btn song" onMouseDown={() => setSong(won)} onClick={() => {
                playingWon? stop() : play();
                setPlayingWon(!playingWon)
              }}>
                {playingWon?
                  <RiPauseLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />:
                  <RiPlayLine
                    size="2.2em"
                    color="white"
                    className="tracklist__icon"
                  />}
              </button>
            </td>
            <td>
              <div className="d-flex flex-column ms-1 tracklist__track">
                <span className="tracklist__song">Here to Stay</span>
                <span className="tracklist__artist">Conro</span>
              </div>
            </td>
            <td className="text-end tracklist__duration ms-auto">2:44</td>
            <td className="mx-4 tracklist__shareBtn">
              <button className="tracklist__btn">
                <FiShare2 size="1.5em" color="white" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tracklist;
