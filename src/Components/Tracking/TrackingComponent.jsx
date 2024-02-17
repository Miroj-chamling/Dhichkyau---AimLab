import { useState } from "react";

import InfoBar from "../miscellaneous/InfoBar";
import "./style.css";
import { GameState } from "../../context/GameProvider";
import { randomNumber } from "../../utils/GameLogics";

const TrackingComponent = () => {
  const [leftCoordinate, setLeftCoordinate] = useState(null);
  const [rightCoordinate, setRightCoordinate] = useState(null);
  const [play, setPlay] = useState();

  const { score, setScore, timer, setTimer, highScore, setHighScore } =
    GameState();

  const launchTimer = () => {
    let i = 60;
    const intervalId = setInterval(() => {
      if (i >= 0) {
        setTimer(i);
        // console.log(i);
        i--;
      } else {
        clearInterval(intervalId);
        console.log("End of the countdown");
        setPlay(false);
      }
    }, 1000);
  };

  const mouseOffset = () => {
    setLeftCoordinate(randomNumber(0, 90));
    setRightCoordinate(randomNumber(0, 90));
  };

  const handleClick = () => {
    setPlay(true);
    launchTimer();
    setInterval(() => {
      mouseOffset();
    }, 100);
  };

  const resetTimer = () => {
    setTimer(60);
  };

  const countScore = () => {
    if (score + 3 > highScore) setHighScore(score + 3);
    setScore(score + 3);
  };

  return (
    <div className="tracking-component">
      <InfoBar />
      <div className="game-screen">
        {timer && timer > 0 ? (
          <div
            className="target"
            style={{
              position: "relative",
              left: `${leftCoordinate}%`,
              top: `${rightCoordinate}%`,
              transition: "1.4s",
            }}
            onMouseOver={() => {
              countScore();
            }}
          >
            <i
              className="fa fa-bullseye"
              aria-hidden="true"
              style={{ color: "indianred", fontSize: "56px" }}
            ></i>
          </div>
        ) : (
          <h1
            onClick={() => {
              setScore(0);
              setPlay(true);
              resetTimer();
              launchTimer();
              handleClick();
            }}
            className="start"
          >
            Dhichkyau!
          </h1>
        )}
      </div>
    </div>
  );
};

export default TrackingComponent;
