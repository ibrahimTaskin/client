import "./dashboard.css";
import React, { useState } from "react";
import Navbar from "../../../app/layout/Navbar";
import ActivityFilter from "./ActivityFilter";
import ActivityList from "./ActivityList";
import { fakeData } from "./fakeData";

const ActivityDashboard = () => {
  const [data, setData] = useState(fakeData);
  console.log(data);

  const handleChange = (e) => {};

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="main-content">
          <ActivityList data={data} />
        </div>
        <div className="side-content">
          <ActivityFilter handleChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default ActivityDashboard;
