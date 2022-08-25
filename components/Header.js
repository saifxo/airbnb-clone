import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import {
    SearchIcon,
    GlobeAltIcon,
    UserCircleIcon,
    MenuIcon,
    UserIcon,
    UsersIcon

}
    from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range'
import {useRouter} from 'next/dist/client/router'
import Fade from 'react-reveal/fade'
function Header() {
    const [input, setinput] = useState('')
    const [startdate, setstartdate] = useState(new Date())
    const [endDate, setendDate] = useState(new Date())
    const [guests, setguests] = useState(1)
    const [guestsicon, setguestsicon] = useState(<UserIcon />)
    const router =useRouter()
    const selectionRange = {
        startdate: startdate,
        endDate: endDate,
        key: 'selection'
    }
    const handleSelect = (ranges) => {
        setstartdate(ranges.selection.startdate)
        setendDate(ranges.selection.endDate)
    }
    const handleReset = () => {
        setinput('')
    }

    const search=()=>{
        router.push({
            pathname:'/search',
            query:{
                location:input,
                startdate:startdate.toISOString(),
                endDate:endDate.toISOString(),
                guests,
            }
        })
    }
    const [show, setshow] = useState(false)
    const [showsm, setshowsm] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 220) { setshow(true) } else (setshow(false));
        });
        return () => { window.removeEventListener("scroll", null); };
    }, [])
    return (
        <Fade top>
        <header className={`sticky top-0 sm:bottom-[40rem] w-full z-50 grid grid-cols-3 bg-white md:bg-transparent shadow-md px-5 py-2 md:px-10 ${input && 'lg:bg-white'} ${show &&'lg:bg-white'}`}>

            {/* left  */}
            <div className='relative h-8 sm:h-10 flex items-center cursor-pointer my-auto' onClick={()=>router.push('/')}>
                <Image src="https://links.papareact.com/qd3" layout='fill' objectFit='contain' objectPosition='left' />
            </div>
            {/* Middle  */}
            <div className='flex items-center border-gray-300 md:border-2 md:shadow-sm rounded-full py-2 '>
                <input className='pl-5 outline-none bg-transparent  flex-grow text-sm text-gray-600 placeholder:text-gray-400' placeholder='Start Your Search' type="text" value={input} onChange={(e) => setinput(e.target.value)} />
                <SearchIcon className='h-8 bg-red-400 rounded-full text-white p-2 hidden md:inline-flex md:mx-2 cursor-pointer' />

            </div>
            {/* Right  */}
            <div className={`flex space-x-4 items-center justify-end text-white ${show &&'lg:text-gray-600'}`}>
                <p className='hidden md:inline cursor-pointer'>Become a Host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className='flex  border-2 rounded-full space-x-2 p-2 '>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
            {(input &&
                <div className={`flex flex-col col-span-3 mx-auto`}>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center border-b mb-4'>
                        <h2 className='text-2xl pl-2 flex-grow font-semibold'>Number of Guests</h2>
                        <div className='flex items-center justify-center border-2 p-1 rounded-lg'>
                            {guests > 1 ? (<UsersIcon className='h-5 w-5 text-[#FD5B61]' />) : (<UserIcon className='h-5 w-5 text-[#FD5B61]' />)}
                            <input type='number' min={1} value={guests} className='w-12 pl-2 text-lg outline-none mb-2' onChange={(e) => setguests(e.target.value)} />
                        </div>

                    </div>
                    <div className='flex'>
                        <button className='flex-grow text-gray-500' onClick={handleReset}>Cancel</button>
                        <button className='flex-grow text-red-400 bg-gray-200 rounded-lg' onClick={search}>Search</button>
                    </div>
                </div>)}
        </header>
        </Fade>
    )
}
export default Header