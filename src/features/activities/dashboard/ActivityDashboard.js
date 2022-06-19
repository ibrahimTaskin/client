import "./dashboard.css";
import React, { useEffect, useState } from "react";
import Navbar from "../../../app/layout/Navbar";
import ActivityFilter from "./ActivityFilter";
import ActivityList from "./ActivityList";
import { fakeData } from "./fakeData";
import _ from "lodash";

const ActivityDashboard = () => {
  const [data, setData] = useState(fakeData);
  const [categories,setCategories]=useState([]);
  
  useEffect(() => {
    const _categories = _.uniq(_.map(data,'category'));
    setCategories(_categories);
  }, [])
  

  const handleChange = (e) => {};

  const handleCategoryChange = (e) => {};

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="main-content">
          <ActivityList data={data} />
        </div>
        <div className="side-content">
          <ActivityFilter categories={categories} handleChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default ActivityDashboard;
