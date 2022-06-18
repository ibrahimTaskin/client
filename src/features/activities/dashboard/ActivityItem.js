import React from "react";

const ActivityItem = ({ activity }) => {
    console.log(activity.images[0].url);
  return (
    <div className="activity-list-item">
      <div id="container">
        <div class="item-details">
          <h1>{activity.title}</h1>
          <p className="description">{activity.description}</p>
          <div class="control">
            <button class="btn">
              <span class="buy">Görüntüle</span>
            </button>
          </div>
        </div>

        <div class="item-image">
          <img src={activity.images[0].url}/>

          <div class="info">
            <h2> Etkinlik Özeti </h2>
            <ul>
              <li>
                <strong>Kategori : </strong> {activity.category}
              </li>
              <li>
                <strong>Tarih : </strong> {new Date(activity.date).toLocaleDateString()}
              </li>
              <li>
                <strong>Şehir: </strong> {activity.city}
              </li>
              <li>
                <strong>Semt: </strong> {activity.region}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
