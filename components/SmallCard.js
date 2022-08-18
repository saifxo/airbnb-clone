import React from 'react'
import Image from 'next/image'
function SmallCard({ img, distance, location }) {
    return (
        <div className='flex items-center space-x-4 m-2 mt-5 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-100 ease-in cursor-pointer'>
            <div className='relative h-16 w-16   rounded-lg'>
                <Image layout='fill' objectFit='contain' src={img} className='rounded-lg' />
            </div>
            <div className='flex flex-col'>
                <h1 className='text-sm'>{distance}</h1>
                <p className='text-sm text-gray-500'>{location}</p>
            </div>

        </div>
    )
}
export default SmallCard