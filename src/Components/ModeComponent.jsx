import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

const ModeComponent = ({ imgageUrl, gameMode }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const navigate = useNavigate();

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  const handleClick = (newPage) => {
    navigate(`/modes/${newPage}`);
  };

  return (
    <div
      className="mode-component"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={() => handleClick(gameMode)}
    >
      <div className="image-div">
        <img src={imgageUrl} alt="aimlab" />
      </div>
      <div className="mode">
        {isMouseOver ? (
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        ) : (
          gameMode
        )}
      </div>
    </div>
  );
};

export default ModeComponent;
