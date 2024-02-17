import { createContext, useContext, useState } from "react";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timer, setTimer] = useState(null);
  const [missedShots, setMissedShots] = useState(0);

  return (
    <GameContext.Provider
      value={{
        user,
        setUser,
        score,
        setScore,
        highScore,
        setHighScore,
        timer,
        setTimer,
        setMissedShots,
        missedShots,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const GameState = () => {
  return useContext(GameContext);
};

export default GameProvider;
