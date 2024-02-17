import ModeComponent from "../../Components/ModeComponent";
import { GameState } from "../../context/GameProvider";
import "./style.css";

const ModePage = () => {
  const { user } = GameState();

  return (
    <div className="modepage">
      <p style={{ fontSize: "30px", fontWeight: "bold" }}>Welcome {user}</p>
      <div className="mode-container">
        <ModeComponent
          imgageUrl={"https://aimtrainer.io/img/games/challange.svg"}
          gameMode={"challenge"}
        />
        <ModeComponent
          imgageUrl={"https://aimtrainer.io/img/games/target-tracing.svg"}
          gameMode={"tracking"}
        />
      </div>
    </div>
  );
};

export default ModePage;
