import "./detail.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fakeData } from "../dashboard/fakeData";
import ActivityDetailSlider from "./ActivityDetailSlider";
import ActivityDetailMap from "./ActivityDetailMap";
import ActivityDetailSocial from "./ActivityDetailSocial";
import ActivityDetailSummary from "./ActivityDetailSummary";
import { connect } from "react-redux";

const ActivityDetail = ({activity}) => {
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

const mapStateToProps = (state) => {
  return {
    activity:state.selectedActivity
  }
}

export default connect(mapStateToProps)(ActivityDetail);
