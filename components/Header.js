import React from 'react'
import Image from 'next/image'
import {
    SearchIcon,
    GlobeAltIcon,
    UserCircleIcon,
    MenuIcon,
    UserIcon
}
    from '@heroicons/react/solid'
function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-2 md:px-10'>

            {/* left  */}
            <div className='relative h-8 sm:h-10 flex items-center cursor-pointer my-auto'>
                <Image src="https://links.papareact.com/qd3" layout='fill' objectFit='contain' objectPosition='left' />
            </div>
            {/* Middle  */}
            <div className='flex items-center border-gray-300 md:border-2 md:shadow-sm rounded-full py-2'>
                <input className='pl-5 outline-none bg-transparent flex-grow text-sm text-gray-600 placeholder:text-gray-400' placeholder='Start Your Search' type="text" />
                <SearchIcon className='h-8 bg-red-400 rounded-full text-white p-2 hidden md:inline-flex md:mx-2 cursor-pointer' />

            </div>
            {/* Right  */}
            <div className='flex space-x-4 items-center justify-end text-gray-600'>
                <p className='hidden md:inline cursor-pointer'>Become a Host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className='flex  border-2 rounded-full space-x-2 p-2 '>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
        </header>
    )
}
export default Header