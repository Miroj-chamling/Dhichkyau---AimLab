import GameScreen from "../miscellaneous/GameScreen";
import InfoBar from "../miscellaneous/InfoBar";
import "./style.css";

const ChallengeComponent = () => {
  return (
    <div className="challenge-component">
      <InfoBar />
      <GameScreen />
    </div>
  );
};

export default ChallengeComponent;
