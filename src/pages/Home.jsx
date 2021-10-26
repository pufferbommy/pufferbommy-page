import React from 'react'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = ({ nextTheme, setTheme }) => {
    return (
        <div>
            <Navbar nextTheme={nextTheme} setTheme={setTheme} />
            <Content nextTheme={nextTheme} />
            <Footer />
        </div>
    )
}

export default Home
