import "./dashboard.css";
import React, { useEffect, useState } from "react";
import Navbar from "../../../app/layout/Navbar";
import ActivityFilter from "./ActivityFilter";
import ActivityList from "./ActivityList";
import { fakeData } from "./fakeData";
import _ from "lodash";

const ActivityDashboard = () => {
  const [data, setData] = useState(fakeData);
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const _categories = _.uniq(_.map(data, "category"));
    setCategories(_categories);
  }, []);

  const handleChange = (e) => {};

  const handleCategoryChange = (e) => {};

  const findDate = (value) => {
    var _data = fakeData;
    setValue(value);
    var newData = _data.filter((x) => new Date(x.date).toLocaleDateString() === new Date(value).toLocaleDateString());
    setData(newData);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="main-content">
          <ActivityList data={data} />
        </div>
        <div className="side-content">
          <ActivityFilter value={value} findDate={findDate} categories={categories} handleChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default ActivityDashboard;
