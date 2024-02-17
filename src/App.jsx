import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ModePage from "./pages/ModePage/ModePage";
import ChallengePage from "./pages/ChallengePage/ChallengePage";
import TrackingPage from "./pages/TrackingPage/TrackingPage";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Homepage} exact />
      <Route path="/modes" Component={ModePage} exact />
      <Route path="/modes/challenge" Component={ChallengePage} exact />
      <Route path="/modes/tracking" Component={TrackingPage} exact />
    </Routes>
  );
}
export default App;
