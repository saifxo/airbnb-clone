import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import InfoCard from '../components/InfoCard'
import {useRouter} from 'next/dist/client/router'
import {format} from 'date-fns'
import Fade from 'react-reveal/Fade'
import Map_component from '../components/Map_component'

function Search({searchResults}) {
    const router=useRouter()
    const {location,startDate,endDate,guests}=router.query; 
    const [hover, sethover] = useState(false)
        const formatedstartdate=format(new Date(startDate),'dd MMMM yy');
        const formatedenddate=format(new Date(endDate),'dd MMMM yy');
    const range=`${formatedstartdate} - ${formatedenddate}`;
        console.log(hover)
    return (
        
        <div className='absolute'>
        <div className='relative max-w-[100vw]'>
            <Header placeholder={`${location} | ${range} | ${guests} guests`}/>
            <main className='flex my-auto overflow-x-hidden '>
                <section className='flex-grow pt-16 px-6 max-w-full lg:max-w-[55vw]'>
                    <p className='text-xs'>300+ stays - <span className='bg-gray-300 rounded-lg p-1'>{formatedstartdate}</span> - <span className='bg-gray-300 rounded-lg p-1 '>{formatedenddate}</span> - for {guests} guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                <div className='hidden xl:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancelation Flexibility</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms & Beds</p>
                    <p className='button'>More Filters</p>
                </div>
                <Fade bottom big cascade>
                <div className='flex flex-col'>
                    {searchResults.map(({img,title,location,description,star,price,total,long,lat})=>(<div><InfoCard key={img} img={img} title={title} location={location} description={description} star={star} price={price} total={total} long={long} lat={lat}/></div>))}
                </div>
                </Fade>
                </section>
                <Fade big>
                <section className='hidden lg:inline-flex lg:min-w-[500px] xl:min-w-[600px] fixed right-5  p-3 shadow-lg' onMouseEnter={()=>sethover(true)} onMouseLeave={()=>sethover(false)}>
                    <Map_component  searchResults={searchResults} hover={hover}/>
                </section>
                </Fade>
            </main>
            <Footer/>
        </div>
        </div>
       
    )
}

export default Search


export async function getServerSideProps(){
    const searchResults= await fetch('https://links.papareact.com/isz').then(res => res.json());
    return  {
        props:
         {
            searchResults:searchResults
        }
    }
            
}