import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const ActivityDetailSlider = ({ activity }) => {
  return (
    <>
      {activity !== null ? (
        <SimpleImageSlider
          width={"38%"}
          height={400}
          style={{width:'100%',display:"flex",justifyContent:"center"}}
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
