import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'

const SearchBar = (props) => {
    return (
        <div className='flex items-center justify-between bg-[#28343e12] rounded-[5px] p-[5px] w-full'>
            <input type="text" placeholder={props.placeholder} className='bg-transparent border-none outline-none px-2 w-full' />
            <div className='flex justify-center mr-2 rounded-[5px] p-[4px] text-white cursor-pointer'>
                <UilSearch className='text-xl font-bold text-[#ed941f]' />
            </div>
        </div>
    )
}

export default SearchBar