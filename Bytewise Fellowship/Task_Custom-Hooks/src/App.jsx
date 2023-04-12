import React from "react";
import "./App.css";
import useFetch from "./useFetch";

function App() {
  const { data, error, loading, refresh } = useFetch(
    "https://api.quotable.io/random"
  );

  return (
    <div className="app">
      <h1>Random Quote Generator</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {data && (
        <div className="quote">
          <p>{data.content}</p>
          <p className="author"> - {data.author}</p>
        </div>
      )}
      <button onClick={refresh}>New Quote</button>
    </div>
  );
}

export default App;
