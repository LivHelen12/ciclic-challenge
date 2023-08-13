import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorPage } from "../pages/400";
import { Information } from "../pages/Information";
import { Simulator } from "../pages/Simulator";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Simulator />} />
        <Route path="/information" element={<Information />} />
        <Route path="/400" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
