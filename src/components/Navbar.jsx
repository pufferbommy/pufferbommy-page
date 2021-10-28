import React from 'react'
import PropTypes from 'prop-types'

import { Sun, Moon, FootPrintDark, FootPrint } from '../images'

const Navbar = ({ nextTheme, setTheme }) => {
    const setFootPrint = nextTheme === 'dark' ? FootPrint : FootPrintDark
    const setMenuTheme = nextTheme === 'dark' ? Moon : Sun
    const setMenuBackground =
        nextTheme === 'dark'
            ? 'bg-purple-200 hover:bg-purple-300'
            : 'bg-yellow-200 hover:bg-yellow-300'

    return (
        <nav className="fixed top-0 bg-blue-100 dark:bg-gray-800 backdrop-blur-md dark:bg-opacity-50 bg-opacity-25 w-full flex flex-row justify-between md:justify-center md:gap-36 items-center p-2">
            <div className="flex items-center ml-1 gap-2 group cursor-pointer">
                <img
                    className="w-5 object-contain duration-100 group-hover:rotate-12"
                    src={setFootPrint}
                />
                <h1 className="dark:text-white text-black text-xl font-semibold">
                    Panyawat Kaedpol
                </h1>
            </div>
            <div className="hidden md:inline-block md:top-0.5 md:relative md:right-32 cursor-pointer">
                <div
                    onClick={() => alert('Unavailable')}
                    className="flex gap-4 "
                >
                    <a className="underline-gap text-black dark:text-white hover:underline">
                        Works
                    </a>
                </div>
            </div>
            <div className="flex h-10 gap-2">
                <div
                    onClick={() => setTheme(nextTheme)}
                    className={`rounded-md duration-300 hover:cursor-pointer ${setMenuBackground}`}
                >
                    <img
                        style={{ transform: 'scale(0.425)' }}
                        className="w-full h-full"
                        draggable="false"
                        src={setMenuTheme}
                        alt="darkMode And LightMode"
                    />
                </div>
                <div className="border p-3 rounded-md duration-300 border-gray-400 drak:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer md:hidden">
                    <div className="border-b-2 rounded border-gray-600 dark:border-gray-200 w-4"></div>
                    <div className="border-b-2 my-1 rounded border-gray-600 dark:border-gray-200 w-4"></div>
                    <div className="border-b-2 rounded border-gray-600 dark:border-gray-200 w-4"></div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    nextTheme: PropTypes.func,
    setTheme: PropTypes.func,
}

export default Navbar
