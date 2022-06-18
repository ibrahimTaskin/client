import "./dashboard.css";
import React from "react";
import Navbar from "../../../app/layout/Navbar";
import ActivityFilter from "./ActivityFilter";
import ActivityList from "./ActivityList";

const ActivityDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="main-content">
          <ActivityList />
        </div>
        <div className="side-content">
          <ActivityFilter />
        </div>
      </div>
    </>
  );
};

export default ActivityDashboard;
