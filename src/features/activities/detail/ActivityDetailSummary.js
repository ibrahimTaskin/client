import React from "react";

const ActivityDetailSummary = ({ activity }) => {
  return (
    <>
      <div class="col">
        <div class="box">
          <h3>{activity?.title}</h3>
          <p>{activity?.description}</p>
          <p>{new Date(activity?.date).toLocaleDateString()}</p>
          <span>{activity?.city} </span>
          <span>{activity?.region}</span>
          <p>{activity?.owner}</p>
          <p>
            {activity?.ticket?.length > 0 ? (
              activity?.ticket?.map((ticket) => (
                <>
                  <label>Kategori: {ticket.category} </label>
                  <label>Fiyat: {ticket.price} </label>
                  <br />
                </>
              ))
            ) : (
              <p>Ücretsiz</p>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default ActivityDetailSummary;
