import "./style.css";
import { Routes, Route } from "react-router-dom";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import NothingPage from "../common/NothingPage";
import ActivityDetail from "../../features/activities/detail/ActivityDetail";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<ActivityDashboard />} />
        <Route path="/:id" element={<ActivityDetail />} />
        <Route path="*" element={<NothingPage />} />
      </Routes>
    </>
  );
};

export default App;
