import React from 'react'
import Image from 'next/image'
import bg from '../assets/bg2.jpg'
import Fade from 'react-reveal/fade'
function Banner() {
    return (
        <Fade>
        <div className=''>
            <div className='relative lg:static h-[300px] sm:h-[350px] md:h-[400px] lg:h-[550px] xl:h-[650px]' >
                <Image src={bg}
                    layout='fill'
                    objectFit='cover'
                    className='' />
                <div className='absolute top-1/2 w-full text-center'>
                    <p className='text-white text-lg'>Not sure where to go? Perfect</p>
                    <button className='md:px-10 md:py-4 px-8 py-3 text-purple-500 bg-white rounded-full my-3 font-bold shadow-md hover:shadow-xl active:scale-90 transition duration-150 '>I'm flexible</button>
                </div>
            </div>
        </div>
        </Fade>
    )
}

export default Banner