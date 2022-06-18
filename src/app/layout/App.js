import "./style.css";
import { Routes, Route } from "react-router-dom";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import HomePage from "../../features/home/HomePage";
import NothingPage from "../common/NothingPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activities" element={<ActivityDashboard />} />
        <Route path="*" element={<NothingPage />} />
      </Routes>
    </>
  );
};

export default App;
