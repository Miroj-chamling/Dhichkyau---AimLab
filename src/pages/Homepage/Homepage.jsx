// import { GameState } from "../../context/GameProvider";
import { useState } from "react";
import { GameState } from "../../context/GameProvider";
import { useNavigate } from "react-router-dom";

import "./style.css";

const Homepage = () => {
  const [userName, setUserName] = useState();
  const [error, setError] = useState();
  const { setUser } = GameState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName);
    if (!userName || userName === "") {
      setError("Please Enter Username");
      return;
    }
    setUser(userName);
    navigate("/modes");
    setUserName("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit}>
        <div className="main-container">
          <div className="greet">
            <div className="typing-text-1">Hello Player !!! </div>
            <br />
            <div className="typing-text-2">
              welcome to dhichkyau - the perfect aim lab
            </div>
            <br />
            <div className="typing-text-3">
              We tend to improve your shooting skills and make you a better
              player overall.
            </div>
          </div>
          <br />

          <div className="typing-text-4">
            Enter username:
            <br />
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
            <p className="error">{error}</p>
          </div>
          <br />
          <button type="submit" className="submit-btn">
            Start
          </button>
        </div>
      </form>
    </div>
  );
};

export default Homepage;
