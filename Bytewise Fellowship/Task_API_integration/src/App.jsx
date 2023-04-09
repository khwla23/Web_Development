import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      }) //we need to resolve the Response object to JSON format using the json() method.
      //This also returns a promise for us to get the actual data using the second.then().
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <h1>GET Request in React</h1>
      {posts.map((post) => {
        return (
          <div className="whole">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div>
              <div className="del-btn">Delete</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
