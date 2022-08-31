import Image from 'next/image'
import React,{useState} from 'react'
import {HeartIcon as HeartFill} from '@heroicons/react/solid'
import {HeartIcon as HeartOutline} from '@heroicons/react/outline'
import {StarIcon} from '@heroicons/react/solid'

function InfoCard({img,title,location,description,price,total,long,lat,star}) {
    const [fillflag, setfillflag] = useState(false)
  return (
    <div className='relative h-full w-full flex py-7 px-2 pr-4 border-b cursor-pointer hover:shadow-lg transition duration-200 ease-out first:border-t hover:bg-gray-200  rounded-lg hover:scale-95 shadow-md'>
        <div className='relative h-56 w-52 md:h-52 md:w-80 flex-shrink-0 ml-2'>
            <Image src={img} layout='fill' objectFit='cover'className='rounded-2xl '/>
        </div>
        <div className='flex flex-col flex-grow pl-6'>
            <div className='flex justify-between'>
                <p className='select-none'>{location}</p>
                {fillflag ? <HeartFill className='h-7 cursor-pointer text-red-600' onClick={()=>setfillflag(false)}/>: <HeartOutline className='h-7 cursor-pointer' onClick={()=>setfillflag(true)}/> }
            </div>
                <h1 className='text-xl font-semibold select-none'>{title}</h1>
                <div className='border-b w-10 pt-2'/>
                <p className='pt-2 text-sm text-gray-500 flex-grow select-none'>{description}</p>
            <div className='flex justify-between items-end pt-5'>
                <p className='flex items-center'>
                <StarIcon className='h-5 text-red-400'/>{star}
                </p>
                <div>
                    <p className='text-lg font-semibold pb-2 lg:text-2xl select-none'>{price}</p>
                    <p className='text-right font-extralight select-none'>{total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard