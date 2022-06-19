import './detail.css'
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fakeData } from "../dashboard/fakeData";
import ActivityDetailSlider from './ActivityDetailSlider';

const ActivityDetail = () => {
  const [activity, setActivity] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let _id = id;
    let _activity = fakeData.find((x) => x.id === parseInt(_id));
    setActivity(_activity);
  }, []);

  return (
    <div className='detail-container'>
      <div class="row">
        <div class="col">
          <div class="box">
            <ActivityDetailSlider activity={activity} />
          </div>
        </div>

        <div class="col">
          <div class="box">
            <h3>{activity?.title}</h3>
            <p>{activity?.description}</p>
            <p>{new Date(activity?.date).toLocaleDateString()}</p>
            <span>{activity?.city} </span>
            <span>{activity?.region}</span>
            <p>{activity?.owner}</p>
          </div>
        </div>

        <div class="col">
          <div class="box">
            <p>Sosyal medya</p>
          </div>
        </div>

        <div class="col">
          <div class="box">
            <p>Harita</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;