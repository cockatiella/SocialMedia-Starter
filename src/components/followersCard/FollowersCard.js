import React from "react";
import "./FollowersCard.css";
import { Followers } from "../../Data/FollowersData.js";

export default function FollowersCard() {
  return (
    <div className="FollowerCard">
      <h3>Who is following you</h3>

      {Followers.map((follower, id) => {
        return (
          <div key={id} className="follower mt-2">
            <div>
              <img src={follower.img} alt="" className="followerImg img-fluid" />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
}
