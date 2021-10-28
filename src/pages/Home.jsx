import React from 'react'
import PropTypes from 'prop-types'

import Content from '../components/Content'
import Drawer from '../components/Drawer'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = ({ nextTheme, setTheme }) => {
    return (
        <div>
            <Navbar nextTheme={nextTheme} setTheme={setTheme} />
            <Drawer />
            <Content nextTheme={nextTheme} />
            <Footer />
        </div>
    )
}

Home.propTypes = {
    nextTheme: PropTypes.func,
    setTheme: PropTypes.func,
}

export default Home
