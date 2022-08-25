import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useRouter} from 'next/dist/client/router'
function Search() {
    const router=useRouter()
    const {location,startdate,enddate,guests}=router.query; 
    location[0].toUpperCase()
    return (
        <div>
            <Header/>
            <main className='flex'>
                <section className='flex-grow pt-16 px-6'>
                    <p className='text-xs'>300+ stays for {guests} number of guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancelation Flexibility</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms & Beds</p>
                    <p className='button'>More Filters</p>
                </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Search