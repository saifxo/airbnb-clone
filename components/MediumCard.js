import React from 'react'
import Image from 'next/image'
import Fade from 'react-reveal'
function MediumCard({ img, title }) {
    return (
        <Fade cascade right>
        <div className='hover:scale-105 transition transform duration-300 ease-out'>
            <div className='relative h-80 w-80 '>
                <Image layout='fill' src={img} objectFit="contain" className='rounded-xl' />
            </div>
            <h1 className='text-2xl mt-3'>{title}</h1>
        </div>
        </Fade>
    )
}

export default MediumCard