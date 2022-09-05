import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";
import { Link } from "react-router-dom";

export default function ProfileCard() {

const ProfilePage = true;


  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img className="cover" src={Cover} alt="coverImage" />
        <img src={Profile} alt="profile" />
      </div>

      <div className="ProfileName">
        <span>Sofia Dinatolo</span>
        <span>Jr. UI/UX Designer</span>
        <span>Frontend developer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div className="follow">
          <span>890</span>
          <span>Following</span>
        </div>
        <div className="vl"></div>
        <div className="follow">
          <span>8652</span>
          <span>Followers</span>
        </div>


      {ProfilePage && (
        <>
          <div className="vl">

          </div>
          <div className="follow">
            <span>12</span>
            <span>Posts</span>
            </div>
        </>  
      )}



        <hr />
      </div>

      <span> <Link to='/profile'>My Profile</Link></span>
    </div>
  );
}
