import React from 'react'
import ActivityItem from './ActivityItem'

const ActivityList = ({data}) => {
  return (
    <div className='activity-list'>
      {data?.map((activity)=> (
        <ActivityItem key={activity?.id} activity={activity}/>
      ))}
    </div>
  )
}

export default ActivityList