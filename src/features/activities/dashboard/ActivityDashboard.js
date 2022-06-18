import React from 'react'
import ActivityFilter from './ActivityFilter'
import ActivityList from './ActivityList'

const ActivityDashboard = () => {
  return (
    <>
        <h1>Etkinlik Dashboard</h1>
        <ActivityList/>
        <ActivityFilter/>
    </>
  )
}

export default ActivityDashboard