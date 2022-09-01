import React from "react";
import PostSide from "../components/PostSide/PostSide";
import ProfileSide from "../components/profileside/ProfileSide";
import RightSide from "../components/rightside/RightSide";
import "./Home.css";

export default function () {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  )
}
