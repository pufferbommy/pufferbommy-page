import React from 'react'
import Sun from '../images/sun.png'

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between md:justify-center md:gap-36 items-center p-4">
            <div className="flex ml-1 gap-2 group cursor-pointer">
                <img
                    className="w-5 object-contain duration-100 group-hover:rotate-12"
                    src="/src/images/footprint-dark.png"
                />
                <h1 className="text-white text-xl font-semibold">
                    Panyawat Kaedpol
                </h1>
            </div>
            <div className="hidden md:inline-block md:top-0.5 md:relative md:right-32 cursor-pointer">
                <div
                    onClick={() => alert('Unavailable')}
                    className="flex gap-4 "
                >
                    <a className="underline-gap text-white hover:underline">
                        Works
                    </a>
                </div>
            </div>
            <div className="flex gap-2 h-10">
                <div
                    onClick={() => alert('Unavailable')}
                    className="rounded-md duration-300 bg-yellow-200 hover:bg-yellow-400 hover:cursor-pointer"
                >
                    <img
                        className="scale-50 w-full h-full"
                        draggable="false"
                        src={Sun}
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
