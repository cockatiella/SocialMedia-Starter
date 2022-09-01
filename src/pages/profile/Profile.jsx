import React from 'react'
import './Profile.css'
import ProfileLeft from '../../components/profileleft/ProfileLeft'
import ProfileCard from '../../components/profilecard/ProfileCard'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/rightside/RightSide'

export default function Profile() {
  return (
    <div className='Profile'>
        <ProfileLeft/>
        <div className="Profile-center">
          <ProfileCard/>
          <PostSide/>
        </div>
        <RightSide/>
    </div>
  )
}
