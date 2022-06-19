import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const ActivityDetailSlider = ({ activity }) => {
  return (
    <>
      {activity !== null ? (
        <SimpleImageSlider
          width={896}
          height={504}
          images={
            activity?.images?.length > 0
              ? activity?.images
              : [{ id: 1, url: `/assets/${activity?.category}.png` }]
          }
          showBullets={true}
          showNavs={true}
        />
      ) : null}
    </>
  );
};

export default ActivityDetailSlider;
