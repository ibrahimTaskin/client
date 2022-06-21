import React from "react";

const ActivityDetailSummary = ({ activity }) => {
  return (
    <>
      <div class="col">
        <div class="box">
          <div className="box-a">
            <h3>{activity?.title}</h3>
            <p><strong>Açıklama: </strong>{activity?.description}</p>
            <p><strong>Tarih: </strong>{new Date(activity?.date).toLocaleDateString()}</p>
            <p><strong>Şehir: </strong>{activity?.city} {activity?.region}</p>
            <p><strong>Organizator: </strong>{activity?.owner}</p>
          </div>
          <div className="box-b">
            <h3>Bilet Fiyatları</h3>
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
      </div>
    </>
  );
};

export default ActivityDetailSummary;
