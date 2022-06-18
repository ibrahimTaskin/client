import React from 'react'

const ActivityFilter = ({handleChange}) => {
  return (
    <div className='filter-container'>
      <input
        className='filter-input'
        placeholder='Etkinlik ara'
        onChange={handleChange}
      />
    </div>
  )
}

export default ActivityFilter