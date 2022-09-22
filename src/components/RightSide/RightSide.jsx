import React from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { UilSetting } from '@iconscout/react-unicons'
import { UilBell } from '@iconscout/react-unicons'
import { UilChat } from '@iconscout/react-unicons'
import TrendCard from './TrendCard'

const RightSide = () => {
    return (
        <div className='py-2'>
            <div className='flex justify-between mb-8'>
                <UilEstate className='scale-125' />
                <UilSetting className='scale-125' />
                <UilBell className='scale-125' />
                <UilChat className='scale-125' />
            </div>

            <TrendCard />

            <button className='h-[3rem] w-full my-8 button'>
                Share
            </button>
        </div>
    )
}

export default RightSide