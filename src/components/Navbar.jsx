import React from 'react'
import Sun from '../images/sun.png'
import Moon from '../images/moon.png'
import FootPrintDark from '../images/footprint-dark.png'
import FootPrint from '../images/footprint.png'

const Navbar = ({ nextTheme, setTheme }) => {
    const setCatImage = nextTheme === 'dark' ? FootPrint : FootPrintDark
    const setMenuTheme = nextTheme === 'dark' ? Moon : Sun
    const setMenuBackground =
        nextTheme === 'dark'
            ? 'bg-purple-200 hover:bg-purple-400'
            : 'bg-yellow-200 hover:bg-yellow-400'

    return (
        <div className="flex flex-row justify-between md:justify-center md:gap-36 items-center p-4">
            <div className="flex ml-1 gap-2 group cursor-pointer">
                <img
                    className="w-5 object-contain duration-100 group-hover:rotate-12"
                    src={setCatImage}
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
            <div className="flex gap-2 h-10">
                <div
                    onClick={() => setTheme(nextTheme)}
                    className={`rounded-md duration-300 hover:cursor-pointer ${setMenuBackground}`}
                >
                    <img
                        style={{ transform: 'scale(0.425)' }}
                        className="w-full h-full"
                        draggable="false"
                        src={setMenuTheme}
                        alt=""
                    />
                </div>
                <div className="border p-3 rounded-md duration-300 border-gray-500 hover:bg-gray-700 hover:cursor-pointer md:hidden">
                    <div className="border-b-2 rounded border-gray-200 w-4"></div>
                    <div className="border-b-2 my-1 rounded border-gray-200 w-4"></div>
                    <div className="border-b-2 rounded border-gray-200 w-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
