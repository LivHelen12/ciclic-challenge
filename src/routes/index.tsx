import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Information } from "../pages/Information";
import Simulator from "../pages/Simulator";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Simulator />} />
        <Route path="/information" element={<Information />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
