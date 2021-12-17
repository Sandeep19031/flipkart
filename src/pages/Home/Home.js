import React from 'react'
import Bottom from '../Bottom/Bottom'
import Navbar from '../Navbar/Navbar'
import NavCard from '../NavCard/NavCard'
import './Home.css'

function Home() {
    return (
        <div>
            <Navbar />
            <NavCard />
            <div>Body</div>
            <Bottom  />
        </div>
    )
}

export default Home
