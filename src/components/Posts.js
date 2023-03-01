import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Posts.css";

const Posts = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setPostList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="post-card">
      <h1>User List</h1>
      <ul className="card-body">
        {postList.map((post) => (
          <div className="card">
            <h3>User Number: {post.id}</h3>
            <h3>Name: {post.name}</h3>
            <h3>Username: {post.username}</h3>
            <h3>Email: {post.email}</h3>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
