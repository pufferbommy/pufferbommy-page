import React from 'react'
import PropTypes from 'prop-types'

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

Home.propTypes = {
    nextTheme: PropTypes.string,
    setTheme: PropTypes.func,
}

export default Home
