import './detail.css'
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fakeData } from "../dashboard/fakeData";
import ActivityDetailSlider from './ActivityDetailSlider';
import ActivityDetailMap from './ActivityDetailMap';
import ActivityDetailSocial from './ActivityDetailSocial';

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
            <p>{activity?.ticket?.length > 0 ? activity?.ticket?.map(ticket=> (
              <>              
                <label>Kategori: {ticket.category} </label>
                <label>Fiyat: {ticket.price} </label><br/>
              </>
            )) : <p>Ücretsiz</p>}</p>
          </div>
        </div>

        <div class="col">
          <div class="box">
            <ActivityDetailSocial/>
          </div>
        </div>

        <div class="col">
          <div class="box">
            <ActivityDetailMap activity={activity} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
