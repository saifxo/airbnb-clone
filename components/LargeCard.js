import React from 'react'
import Image from 'next/image'
import Fade from 'react-reveal'
function LargeCard({ img, title, description, btnText }) {
    return (
        <Fade >
        <section className='relative py-16 cursor-pointer'>
            <div className='relative h-96 min-w-[300px]'>
                <Image layout='fill' objectFit='cover' src={img} className='rounded-2xl' />
            </div>
            <div className='absolute top-32 left-12 '>
                <h3 className='text-4xl w-64 mb-3 font-medium'>{title}</h3>
                <p>{description}</p>
                <button className='text-sm bg-gray-900 px-4 py-2 rounded-lg text-white mt-5'>{btnText}</button>
            </div>
        </section>
        </Fade>
    )
}

export default LargeCard