import React from 'react'
import { Followers } from '../../data/FollowersData'

const FollowersCard = () => {
    return (
        <div className='w-full pt-4'>
            <h3 className='font-bold text-lg py-4'>Who is following you</h3>

            {Followers.map((follower, id) => {
                return (
                    <div className='flex items-center justify-between py-3'>
                        <div className='flex items-center gap-4'>
                            <img src={follower.img} alt="" className='object-cover rounded-full w-[4rem] h-[4rem]' />
                            <div className='flex flex-col'>
                                <span className='font-bold'>{follower.name}</span>
                                <span className='text-gray-500'>@{follower.username}</span>
                            </div>
                        </div>
                        <button className='bg-orange-500 rounded-md py-2 px-5 mx-1 text-white text-md hover:text-orange-500 hover:outline hover:outline-offset-[-2px] hover:outline-2 hover:border-orange-500 hover:bg-transparent'>
                            Follow
                        </button>
                    </div>
                )
            })}

            <div className='flex justify-center items-center my-8 cursor-pointer'>
                <span className='font-bold text-orange-500 hover:text-orange-400'>
                    Show More
                </span>
            </div>
        </div>
    )
}

export default FollowersCard