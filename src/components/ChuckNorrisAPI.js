import React, { useEffect, useState } from "react";

export const ChuckNorrisAPI = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    getJokes();
  }, []);

  async function getJokes() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        setValue(data.value);
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Chuck Norris Jokes</h1>
      <div
        style={{
          border: "1px solid #333",
          padding: "10px",
          margin: "10px auto",
          maxWidth: "400px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <p>{value}</p>
      </div>
      <button
        onClick={getJokes}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Shuffle
      </button>
    </div>
  );
};
