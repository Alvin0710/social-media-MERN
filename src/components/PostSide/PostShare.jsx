import React, {useState, useRef} from 'react'
import SearchBar from '../../common/SearchBar'
import ProfileImage from '../../img/profileImg.jpg'

import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'

const PostShare = () => {
    // const [image, setImage] = useState(null)
    // const imageRef = useRef()

    return (
        <div className='flex gap-4 bg-white p-4 rounded-md'>
            <img src={ProfileImage} alt="profile" className='rounded-full h-[3rem] object-cover' />
            <div className='w-full'>
                <SearchBar placeholder="What's happening?" />
                <div className='flex justify-around items-center pt-4'>
                    <div className='flex flex-row gap-2 text-lg cursor-pointer hover:text-orange-500'>
                        <UilScenery />
                        <p>Photo</p>
                    </div>
                    <div className='flex flex-row gap-2 text-lg cursor-pointer hover:text-orange-500'>
                        <UilPlayCircle />
                        <p>Video</p>
                    </div>
                    <div className='flex flex-row gap-2 text-lg cursor-pointer hover:text-orange-500'>
                        <UilLocationPoint />
                        <p>Location</p>
                    </div>
                    <div className='flex flex-row gap-2 text-lg cursor-pointer hover:text-orange-500'>
                        <UilSchedule />
                        <p>Schedule</p>
                    </div>
                    <button className='bg-orange-500 text-white px-5 py-2 flex items-center rounded-md hover:text-orange-500 hover:outline hover:outline-offset-[-2px] hover:outline-2 hover:border-orange-500 hover:bg-transparent'>
                        Share
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostShare