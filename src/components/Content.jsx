import React from 'react'
import Cat from '../images/cat.png'
import Github from '../images/github.png'

const Content = () => {
    return (
        <div className="flex flex-col items-center w-screen">
            <div className="max-w-md flex flex-col md:max-w-lg">
                {/* Big Image */}
                <div className="my-4">
                    <img
                        className="mx-auto w-1/2 cursor-pointer hover:animate-spin"
                        src={Cat}
                        alt=""
                    />
                </div>
                {/* Intro */}
                <div>
                    <h1 className="text-white px-10 text-center bg-gray-800 rounded-lg py-4">
                        Hello, I&#39;m a newbie developer based in Thailand!
                    </h1>
                    <h2 className="text-white text-3xl mt-4 font-extrabold">
                        Panyawat Kaedpol
                    </h2>
                    <p className="text-white text-sm mt-1">
                        ( Developer / Designer / Traveller )
                    </p>
                </div>

                {/* Bio */}
                <div className="flex flex-col">
                    <h1 className="text-white border-b-4 border-gray-500 w-8 text-xl font-bold mt-10">
                        Bio
                    </h1>
                    <div className="text-white leading-6 tracking-wider text-sm mt-2">
                        <span>
                            <span className="font-semibold">2001</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;Born in Phutthalung,
                            Thailand.
                        </span>
                        <br />
                        <span>
                            <span className="font-semibold">2021</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;I&#39;m currenly in my
                            second year studying computer science.
                        </span>
                    </div>
                </div>
                {/* Skills */}
                <div className="flex flex-col">
                    <h1 className="text-white border-b-4 border-gray-500 w-12 text-xl font-bold mt-10">
                        Skills
                    </h1>
                    <div className="text-white leading-6 tracking-wider text-sm mt-2">
                        <p>
                            <span className="uppercase font-semibold">
                                Languages:&nbsp;
                            </span>
                            <span>
                                Javascript(ES6), HTML5, CSS3, Java and C++
                            </span>
                        </p>
                        <p>
                            <span className="uppercase font-semibold">
                                Libraries & Frameworks:&nbsp;
                            </span>
                            <span>React, Vue, Tailwind</span>
                        </p>
                        <p>
                            <span className="uppercase font-semibold">
                                Tools:&nbsp;
                            </span>
                            <span>
                                VSCode, Git & Github, Command Line, Adobe
                                Photoshop, Figma
                            </span>
                        </p>
                    </div>
                </div>
                {/* Work */}
                <div className="flex flex-col items-start">
                    <h1 className="text-white border-b-4 border-gray-500 w-12 text-xl font-bold mt-10">
                        Work
                    </h1>
                    <p className="text-white leading-6 tracking-wider text-sm mt-2">
                        &nbsp;&nbsp;&nbsp;&nbsp;I don&#39;t have job....
                    </p>
                    <button
                        // Alert before edit
                        onClick={() => alert('Unavailable')}
                        className="bg-blue-200 mt-4 hover:bg-blue-300 duration-300 px-6 py-2 rounded-lg"
                    >
                        My portfolio&nbsp;{'>'}
                    </button>
                </div>
                {/* I love */}
                <div className="flex flex-col">
                    <h1 className="text-white border-b-4 border-gray-500 w-6 text-xl font-bold mt-12">
                        I ♥
                    </h1>
                    <div className="text-white leading-6 tracking-wider text-sm mt-2">
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;Coding, Music, Art, Singing,
                            Learning, Travelling
                        </span>
                    </div>
                </div>
                {/* Social Media */}
                <div className="flex flex-col mt-12">
                    <h1 className="text-white border-b-4 border-gray-500 w-28 text-xl font-bold">
                        On the web
                    </h1>
                    <div className="text-white leading-6 tracking-wider text-sm mt-5">
                        <a
                            href="https://github.com/pufferbommy"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:cursor-pointer inline-block px-1 py-2 duration-300 hover:bg-opacity-25 hover:bg-green-200 rounded-md"
                        >
                            <img className="ml-3 inline w-5" src={Github} />
                            <span className="mx-3 text-blue-400">
                                @pufferbommy
                            </span>
                        </a>
                        <br />
                        <a
                            href="https://twitter.com/pufferbommy"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:cursor-pointer inline-block px-1 py-2 duration-300 hover:bg-opacity-25 hover:bg-green-200 rounded-md"
                        >
                            <img
                                className="ml-3 inline w-5"
                                src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/172px-Twitter_bird_logo_2012.svg.png"
                            />
                            <span className="mx-3 text-blue-400">
                                @pufferbommy
                            </span>
                        </a>
                        <br />
                        <a
                            href="https://www.instagram.com/pufferbommy/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:cursor-pointer inline-block px-1 py-2 duration-300 hover:bg-opacity-25 hover:bg-green-200 rounded-md"
                        >
                            <img
                                className="ml-3 inline w-5 opacity-75"
                                src="https://logosarchive.com/wp-content/uploads/2021/07/Instagram-logo-icon.png"
                            />
                            <span className="mx-3 text-blue-400">
                                @pufferbommy
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
