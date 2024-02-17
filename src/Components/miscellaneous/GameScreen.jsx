import { useState } from "react";
import { getLeftCoordinate, getRightCoordinate } from "../../utils/GameLogics";
import { GameState } from "../../context/GameProvider";

const GameScreen = () => {
  const [leftCoordinate, setLeftCoordinate] = useState(null);
  const [rightCoordinate, setRightCoordinate] = useState(null);
  const [play, setPlay] = useState(false);

  const {
    timer,
    setTimer,
    score,
    setScore,
    setHighScore,
    highScore,
    missedShots,
    setMissedShots,
  } = GameState();

  const launchTimer = () => {
    let i = 30;
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

  const countScore = () => {
    if (score + 1 > highScore) {
      setHighScore(score + 1);
    }
    setScore(score + 1);
  };

  const countMissed = () => {
    console.log("missed");
    setMissedShots(missedShots + 1);
  };

  const resetTimer = () => {
    setTimer(60);
  };

  const handleClick = () => {
    setLeftCoordinate(getLeftCoordinate());
    setRightCoordinate(getRightCoordinate());
  };

  return (
    <div
      className="game-screen"
      onClick={() => {
        play ? countMissed() : null;
      }}
    >
      {timer && timer > 0 ? (
        <div
          className="target"
          style={{
            position: "relative",
            left: `${leftCoordinate}%`,
            top: `${rightCoordinate}%`,
            transition: "0.5s",
          }}
          onClick={() => {
            handleClick();
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
            setMissedShots(0);
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
  );
};

export default GameScreen;
