/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Second() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey =
          "live_YOHFMbZKWyYu3VeHOlROdyu9NI9ivb2DTsPQBexIYdJp9QMpuJiTTefYrodu0fWn ";
        const response = await axios.get(
          `https://api.thecatapi.com/v1/images/search?limit=10 `,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
          }
        );
        setData(response.data);
      } catch (err) {
        console.error("Erro Na Solicitação Para Api", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 style={{ justifyContent: "center", display: "flex" }}>Api do gato</h1>
      {data ? (
        <ul
          style={{
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginLeft: "-40",
          }}
        >
          {data.map((item, index) => (
            <img
              key={index}
              src={`${item.url}`}
              style={{ width: "400px", height: "380px" }}
            />
          ))}
        </ul>
      ) : (
        <p>Carregando......</p>
      )}
      <Link to={"/"}>
        <button>Voltar</button>
      </Link>
    </>
  );
}

export default Second;
