import "react-calendar/dist/Calendar.css";
import React, { useState } from 'react'
import Calendar from "react-calendar";

const ActivityFilter = ({categories , handleChange , handleCategoryChange , findDate,value}) => {
  
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
        <ul style={{listStyle:"none"}}>
          {categories?.map(category=> (
            <li><button onClick={handleCategoryChange}>{category}</button></li>
          ))}
        </ul>
      </div>
      <div className='filter-calendar'>
      <Calendar onChange={findDate} value={value} />
      </div>
    </div>
  );
}

export default ActivityFilter