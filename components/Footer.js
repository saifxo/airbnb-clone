import React from 'react'

function Footer() {
    return (
        <footer className='grid grid-cols-1 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 md:grid-cols-4'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>ABOUT</h5>
                <p>How Airbnb Works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>

            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold '>COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>It's a preety awesome clone</p>
                <p>Learn something new everyday</p>
                <p>Eat Sleep Code</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold '>HOST</h5>
                <p>SAIF ALI</p>
                <p>Web Dev</p>
                <p>Frontend-Backend </p>
                <p>Next.js</p>
                <p>React.js</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold '>SUPPORT</h5>
                <p>Help Centre</p>
                <p>Trust & Saftey</p>
                <p>Live Chat</p>
                <p>Found a bug</p>
                <p>Join Airbnb</p>
            </div>
        </footer>
    )
}

export default Footer