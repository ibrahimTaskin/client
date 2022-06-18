import React from "react";
import Navbar from "../../../app/layout/Navbar";
import ActivityFilter from "./ActivityFilter";
import ActivityList from "./ActivityList";

const ActivityDashboard = () => {
  return (
    <>
      <Navbar />
      <h1>Etkinlik Dashboard</h1>
      <ActivityList />
      <ActivityFilter />
    </>
  );
};

export default ActivityDashboard;
