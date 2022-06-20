import React from "react";
import ActivityItem from "./ActivityItem";

const ActivityList = ({ data }) => {
  return (
    <div className="activity-list">
      {data?.length > 0 ? (
        data?.map((activity) => (
          <ActivityItem key={activity?.id} activity={activity} />
        ))
      ) : (
        <div style={{alignItems:"center",justifyContent:"center",display:"flex"}}>Uygun etkinlik yoktur.</div>
      )}
    </div>
  );
};

export default ActivityList;
