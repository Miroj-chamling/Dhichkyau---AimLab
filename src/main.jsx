import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GameProvider from "./context/GameProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GameProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GameProvider>
);
