import Head from "next/head"
import React from 'react'
import Banner from "../components/Banner"
import Header from '../components/Header'
import SmallCard from "../components/SmallCard"
import MediumCard from "../components/MediumCard"
import LargeCard from "../components/LargeCard"
import Footer from "../components/Footer"
import Fade from 'react-reveal/Fade'
import ScrollAnimation from 'react-animate-on-scroll' 
function Home({ exploreData, cardsData }) {
  return (
    
    <div className="bg-gray-100">
      <Head>
        <title>Airbnb</title>
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 bg-white rounded-sm shadow-lg my-8 ">
        <section className="pt-8">
          <h1 className="text-2xl md:text-4xl font-semibold">Explore Nearby</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6">
            {exploreData?.map(({ img, distance, location }) => <SmallCard key={img} img={img} distance={distance} location={location} />)}
          </div>
         

        </section>
        <section>
          <h1 className="text-4xl font-semibold py-8">Live Anywhere</h1>
          <div className="flex overflow-y-scroll space-x-3 scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => <MediumCard key={img} img={img} title={title} />)}
          </div>
        </section>
        <LargeCard img="https://links.papareact.com/4cj" title='The Greatest Outdoors' description='Wishlists curated by Airbnb' btnText='Get Inspired' />
      </main>
      <Footer />
    </div>
  
  )
}


export default Home

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").
    then(
      (res) => res.json()
    );
  const cardsData = await fetch("https://links.papareact.com/zp1").
    then(
      (res) => res.json()
    );
  return {
    props: {
      exploreData: exploreData,
      cardsData: cardsData,
    }
  }
}

