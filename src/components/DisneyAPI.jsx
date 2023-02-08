import React, { useState, useEffect } from "react";

const DisneyAPI = () => {
  const API = "https://api.disneyapi.dev/characters/";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const apiDisney = async () => {
    const fetchApi = await fetch(API);
    const response = await fetchApi.json();
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    apiDisney();
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <h1>Cargando...</h1>
        </>
      ) : (
        <>
          {data.map((card, index) => {
            return (
              <div className="col" key={index}>
                <div
                  className="card"
                  style={{ width: "18rem", margin: "20px" }}
                >
                  <img
                    src={card.imageUrl}
                    className="card-img-top"
                    alt="..."
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{card.name}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default DisneyAPI;
