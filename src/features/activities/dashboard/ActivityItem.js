import React from "react";

const ActivityItem = ({ activity }) => {
  const {title,description,images,category,date,city,region,owner} = activity;
  return (
    <div className="activity-list-item">
      <div id="container">
        <div class="item-details">
          <h1>{title}</h1>
          <p className="description">{description}</p>
          <div class="control">
            <button class="btn">
              <span class="buy">Görüntüle</span>
            </button>
          </div>
        </div>

        <div class="item-image">
          <img src={images[0].url}/>

          <div class="info">
            <h2> Etkinlik Özeti </h2>
            <ul>
              <li>
                <strong>Kategori : </strong> {category}
              </li>
              <li>
                <strong>Tarih : </strong> {new Date(date).toLocaleDateString()}
              </li>
              <li>
                <strong>Şehir: </strong> {city}
              </li>
              <li>
                <strong>Semt: </strong> {region}
              </li>
              <li>
                <strong>Düzenleyen: </strong> {owner}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
