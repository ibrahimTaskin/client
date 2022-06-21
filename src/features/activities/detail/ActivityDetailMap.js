import React from "react";
import "./ActivityDetailMap.css";

const ActivityDetailMap = ({ activity }) => {
  return (
    <div class="col">
      <div class="box">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="600"
              height="500"
              id="gmap_canvas"
              src={`https://maps.google.com/maps?q=${activity?.map?.lat},${activity?.map?.lng}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailMap;
