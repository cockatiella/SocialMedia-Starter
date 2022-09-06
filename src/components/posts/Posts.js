import React from "react";
import "./Posts.css";
import { PostsData } from "../../Data/PostsData";
import Post from "../post/Post";
function Posts() {
  return (
    <div className="Posts">
      {PostsData.map((post, id) => {
        return <Post data={post} key={id} />;
      })}
    </div>
  );
}

export default Posts;
