import React from 'react'
import SearchBar from '../../common/SearchBar'
import Logo from '../../img/logo.png'

const LogoSearch = () => {
    return (
        <div className='flex items-center gap-3 w-full'>
            <img src={Logo} alt="logo" className='w-[35px] h-[30px]' />
            <SearchBar placeholder="#Explore" />
        </div>
    )
}

export default LogoSearch