import React from 'react'
import SearchBar from '../../common/SearchBar'
import Logo from '../../img/logo.png'
import FollowersCard from '../ProfileSide/FollowersCard'
import LogoSearch from '../ProfileSide/LogoSearch'
import InfoCard from './InfoCard'

const ProfileLeft = () => {
    return (
        <div className='flex flex-col gap-6'>
            <LogoSearch />
            <InfoCard />
            <FollowersCard />
        </div>
    )
}

export default ProfileLeft