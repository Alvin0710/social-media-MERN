import React from 'react'
import FollowersCard from './FollowersCard'
import LogoSearch from './LogoSearch'
import ProfileCard from './ProfileCard'

const ProfileSide = () => {
    return (
        <div className='ProfileSide flex flex-col gap-x-4 gap-y-8 items-center overflow-auto'>
            <LogoSearch/>
            <ProfileCard/>
            <FollowersCard/>
        </div>
    )
}

export default ProfileSide