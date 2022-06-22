import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { popularActivities } from "./fakeData";

const ActivityDashboardSlider = () => {
  const _popularActivities = popularActivities;

  return (
    <div className="dashboard-slider">
      {
        <SimpleImageSlider
          width={"100%"}
          height={400}
          style={{
            width: "100%",
            display: "flex",
            objectFit: "cover",
            justifyContent: "center",
            backgroundPosition: "center",
            backgroundSize: "200px 100px",
            backgroundRepeat: "repeat",
          }}
          images={
            _popularActivities?.length > 0
              ? _popularActivities
              : [{ id: 1, url: `/assets/popularActivity.png` }]
          }
          showBullets={true}
          showNavs={true}
        />
      }
      <div className="slider-description">
        <h3>Popüler Etkinlikler</h3>
      </div>
    </div>
  );
};

export default ActivityDashboardSlider;
