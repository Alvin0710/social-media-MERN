import React from 'react'
import SearchBar from '../../common/SearchBar'
import ProfileImage from '../../img/profileImg.jpg'

import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'

const PostShare = () => {
    return (
        <div className='flex gap-4 bg-white p-4 rounded-md'>
            <img src={ProfileImage} alt="profile" className='rounded-full h-[3rem] object-cover' />
            <div className='w-full'>
                <SearchBar placeholder="What's happening?" />
                <div className='flex justify-between items-center pt-4'>
                    <div className='flex flex-row gap-2 text-lg text-yellow-700'>
                        <UilScenery />
                        <p>Photo</p>
                    </div>
                    <div className='flex flex-row gap-2 text-lg'>
                        <UilPlayCircle />
                        <p>Video</p>
                    </div>
                    <div className='flex flex-row gap-2 text-lg'>
                        <UilLocationPoint />
                        <p>Location</p>
                    </div>
                    <div className='flex flex-row gap-2 text-lg'>
                        <UilSchedule />
                        <p>Schedule</p>
                    </div>
                    <div className='bg-orange-500 text-white px-5 py-2 flex items-center rounded-md'>
                        Share
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostShare