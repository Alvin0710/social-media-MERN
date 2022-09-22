import React from 'react'
import PostSide from '../components/PostSide/PostSide'
import ProfileSide from '../components/ProfileSide/ProfileSide'
import RightSide from '../components/RightSide/RightSide'


const Home = () => {
    return (
        <div className='Home xl:mx-[3rem] relative grid grid-cols-[1.4fr_3fr_1.3fr] gap-5'>
            <ProfileSide/>
            <PostSide/>
            <RightSide/>
        </div>
    )
}

export default Home