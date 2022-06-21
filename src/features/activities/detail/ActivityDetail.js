import "./detail.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fakeData } from "../dashboard/fakeData";
import ActivityDetailSlider from "./ActivityDetailSlider";
import ActivityDetailMap from "./ActivityDetailMap";
import ActivityDetailSocial from "./ActivityDetailSocial";
import ActivityDetailSummary from "./ActivityDetailSummary";

const ActivityDetail = () => {
  const [activity, setActivity] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let _id = id;
    let _activity = fakeData.find((x) => x.id === parseInt(_id));
    setActivity(_activity);
  }, []);

  return (
    <div className="detail-container">
      <div class="row">
        <ActivityDetailSlider activity={activity} />
        <ActivityDetailSummary activity={activity} />
      </div>
      <div class="row">
        <ActivityDetailSocial />
        <ActivityDetailMap activity={activity} />
      </div>
    </div>
  );
};

export default ActivityDetail;
