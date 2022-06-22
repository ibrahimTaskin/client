import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const ActivityDetailSlider = ({ activity }) => {
  return (
    <>
      <div class="col">
        <div class="box">
          {activity !== null ? (
            <SimpleImageSlider
              width={"38%"}
              height={500}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems:"center",
                ali
              }}
              images={
                activity?.images?.length > 0
                  ? activity?.images
                  : [{ id: 1, url: `/assets/${activity?.category}.png` }]
              }
              showBullets={true}
              showNavs={true}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ActivityDetailSlider;
