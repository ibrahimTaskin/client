import React from "react";
import { Link } from "react-router-dom";

const ActivityItem = ({ activity }) => {
  const {id,title,description,images,category,date,city,region,owner} = activity;
  return (
    <div className="activity-list-item">
      <div id="container">
        <div class="item-details">
          <h1>{title}</h1>
          <p className="description">{description.substring(0,60)}...</p>
          <div class="control">
            <button class="btn">
             <span><Link style={{textDecoration:"none"}} to={`/${id}`}>Görüntüle</Link></span>
            </button>
          </div>
        </div>

        <div class="item-image">
          <img src={images?.length > 0 ? images[0].url : `/assets/${category}.png`}/>

          <div class="info">
            <h3> Etkinlik Özeti </h3>
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
