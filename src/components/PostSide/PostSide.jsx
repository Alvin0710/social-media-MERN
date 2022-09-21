import React from 'react'
import PostShare from './PostShare'

const PostSide = () => {
    return (
        <div className='flex flex-col gap-4 h-screen overflow-auto'>
            <PostShare/>
        </div>
    )
}

export default PostSide