import React from 'react'
import PostSide from '../components/PostSide/PostSide'
import ProfileLeft from '../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../components/ProfileSide/ProfileCard'
import RightSide from '../components/RightSide/RightSide'

const Profile = () => {
    return (
        <div className='relative grid grid-cols-[1.4fr_3fr_1.3fr] gap-4'>
            <ProfileLeft/>

            <div className='flex flex-col gap-8'>
                <ProfileCard/>
                <PostSide/>
            </div>

            <RightSide/>
        </div>
    )
}

export default Profile