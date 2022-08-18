import React from 'react'
import Image from 'next/image'
function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[550px] xl:h-[650px]'>
            <Image src='https://links.papareact.com/0fm'
                layout='fill'
                objectFit='cover' />
            <div className='absolute top-1/2 w-full text-center'>
                <p>Not sure where to go? Perfect</p>
                <button className='md:px-10 md:py-4 px-8 py-3 text-purple-500 bg-white rounded-full my-3 font-bold shadow-md hover:shadow-xl active:scale-90 transition duration-150 '>I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner