import React from 'react'
import { PostsData } from '../../data/PostData'
import Post from './Post'

const Posts = () => {
    return (
        <div className='flex flex-col gap-4'>
            {PostsData.map((post, id) => {
                return <Post data={post} id={id} />
            })}
        </div>
    )
}

export default Posts