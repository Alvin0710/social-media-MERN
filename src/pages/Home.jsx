import React from 'react'
import PostSide from '../components/PostSide/PostSide'
import ProfileSide from '../components/ProfileSide/ProfileSide'


const Home = () => {
    return (
        <div className='Home relative grid grid-cols-[1.5fr_3fr_1.5fr] gap-8'>
            <ProfileSide/>
            <PostSide/>
            <div className="profileSide">
                Profile
            </div>
        </div>
    )
}

export default Home