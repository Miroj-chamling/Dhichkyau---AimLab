import { GameState } from "../../context/GameProvider";
import "./style.css";

const InfoBar = () => {
  const { timer, score, highScore, missedShots } = GameState();

  return (
    <div className="info-bar">
      <h3>
        <i
          className="fa fa-clock-o"
          aria-hidden="true"
          style={{ color: "indianred" }}
        ></i>
        {"   "}
        Time : {!timer ? 0 : timer}
      </h3>
      <h3>
        <i
          className="fa fa-trophy"
          aria-hidden="true"
          style={{ color: "yellow" }}
        ></i>
        {"   "}
        Score : {!score ? 0 : score}
      </h3>
      <h3>
        <i
          className="fa fa-star"
          aria-hidden="true"
          style={{ color: "orange" }}
        ></i>
        {"   "}
        Best Score : {!highScore ? 0 : highScore}
      </h3>
      <h3>
        <i
          className="fa fa-times"
          aria-hidden="true"
          style={{ color: "red" }}
        ></i>
        {"   "}
        missed Shots : {!missedShots ? 0 : missedShots - score}
      </h3>
    </div>
  );
};

export default InfoBar;
