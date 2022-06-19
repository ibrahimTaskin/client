import React from 'react'

const ActivityFilter = ({categories , handleChange , handleCategoryChange}) => {
  return (
    <div className="filter-container">
      <div className='filter-search'>
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
    </div>
  );
}

export default ActivityFilter