import "./dashboard.css";
import React, { useEffect, useState } from "react";
import ActivityFilter from "./ActivityFilter";
import ActivityList from "./ActivityList";
import { fakeData } from "./fakeData";
const _ = require("lodash");
const isNil = require("lodash");

const ActivityDashboard = () => {
  const [data, setData] = useState(fakeData);
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const _categories = _.uniq(_.map(data, "category"));
    setCategories(_categories);
  }, []);

  const handleChange = (e) => {
    let _data = fakeData;
    let searchedData = e.target.value.toLowerCase();
    const newData = _data?.filter(
      (x) =>
        x.title.toLowerCase().includes(searchedData) ||
        x.owner.toLowerCase().includes(searchedData) ||
        x.city.toLowerCase().includes(searchedData) ||
        x.region.toLowerCase().includes(searchedData)
    );

    if (newData?.length !== 0) {
      setData(newData);
    }
    if (searchedData === "") getAllData();
  };

  const handleCategoryChange = (e) => {
    let _category = e.target.name;
    let _data = fakeData;

    const newData = _data?.filter(x=> x.category === _category);
    if (newData?.length !== 0) {
      setData(newData);
    }
  };

  const findDate = (value) => {
    let _data = fakeData;
    setValue(value);
    var newData = _data.filter(
      (x) =>
        new Date(x.date).toLocaleDateString() ===
        new Date(value).toLocaleDateString()
    );
    setData(newData);
  };
  const getAllData = () => {
    setData(fakeData);
  };

  const getAllEndedData = () => {
    let _data = fakeData;
    var newData = _data.filter((x) =>
        new Date(x.date).toLocaleDateString() < new Date(Date.now()).toLocaleDateString()
    );
    setData(newData);
  }

  return (
    <>     
      <div className="container">
        <div className="main-content">
          <ActivityList data={data} />
        </div>
        <div className="side-content">
          <ActivityFilter
            value={value}
            findDate={findDate}
            categories={categories}
            handleChange={handleChange}
            getAllData={getAllData}
            handleCategoryChange={handleCategoryChange}
            getAllEndedData={getAllEndedData}
          />
        </div>
      </div>
    </>
  );
};

export default ActivityDashboard;
