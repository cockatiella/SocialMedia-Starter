import React from 'react'
import LogoSearch from '../logosearch/LogoSearch'
import FollowersCard from '../followersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'

export default function ProfileLeft() {
  return (
    <div className='ProfileSide'>
<LogoSearch/>
<InfoCard/>
<FollowersCard/>


    </div>
  )
}
