import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";

const ActivityFilter = ({
  categories,
  handleChange,
  handleCategoryChange,
  findDate,
  value,
  getAllData,
  getAllEndedData
}) => {
  return (
    <div className="filter-container">
      <div>
        <input
          className="filter-input"
          placeholder="Etkinlik ara"
          onChange={handleChange}
        />
      </div>
      <div className="filter-category">
        <h4>Kategoriler</h4>
        <ul style={{ listStyle: "none" }}>
          {categories?.map((category) => (
            <li>
              <button name={category} onClick={handleCategoryChange}>{category}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-calendar">
        <Calendar onChange={findDate} value={value} />
      </div>
      <div>
        <button onClick={getAllData} style={{ marginTop: 10, width: "100%" }}>
          Tüm Etkinlikler
        </button>
      </div>
      <div>
        <button onClick={getAllEndedData} style={{ marginTop: 10, width: "100%" }}>
          Süresi Biten Etkinlikler
        </button>
      </div>
    </div>
  );
};

export default ActivityFilter;
