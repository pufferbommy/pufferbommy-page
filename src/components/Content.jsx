import React from 'react'

const Content = () => {
    return (
        <div className="flex flex-col items-center w-screen">
            <div className="max-w-md flex flex-col md:max-w-lg">
                {/* Intro */}
                <div>
                    <h1 className="text-white px-10 text-center bg-gray-800 rounded-lg py-4">
                        Hello, I&#39;m a newbie developer based in Thailand!
                    </h1>
                    <h2 className="text-white text-3xl mt-4 font-extrabold">
                        Panyawat Kaedpol
                    </h2>
                    <p className="text-white text-sm mt-1">
                        Digital Craftsman ( Artist / Developer / Designer )
                    </p>
                </div>
                {/* Work */}
                <div className="flex flex-col">
                    <h1 className="text-white border-b-4 border-gray-500 w-12 text-xl font-bold mt-12">
                        Work
                    </h1>
                    <p className="text-white leading-6 tracking-wider text-sm mt-2">
                        &nbsp;&nbsp;&nbsp;&nbsp;Takuya is a freelance and a
                        full-stack developer based in Osaka with a passion for
                        building digital services/stuff he wants. He has a knack
                        for all things launching products, from planning and
                        designing all the way to solving real-life problems with
                        code. When not online, he loves hanging out with his
                        camera. Currently, he is living off of his own product
                        called Inkdrop.
                    </p>
                    <button className="bg-blue-200 mx-auto mt-4 hover:bg-blue-300 duration-300 px-6 py-2 rounded-lg">
                        My portfolio&nbsp;{'>'}
                    </button>
                </div>
                {/* Bio */}
                <div className="flex flex-col">
                    <h1 className="text-white border-b-4 border-gray-500 w-8 text-xl font-bold mt-12">
                        Bio
                    </h1>
                    <div className="text-white leading-6 tracking-wider text-sm mt-2">
                        <span>
                            2001&nbsp;&nbsp;&nbsp;&nbsp;Born in Phutthalung,
                            Thailand.
                        </span>
                        <br />
                        <span>
                            2021&nbsp;&nbsp;&nbsp;&nbsp;Studying Computer
                            Science at Rajamangala University of Technology Phra
                            Nakhon.
                        </span>
                    </div>
                </div>
                {/* I love */}
                <div className="flex flex-col">
                    <h1 className="text-white border-b-4 border-gray-500 w-6 text-xl font-bold mt-12">
                        I ♥
                    </h1>
                    <div className="text-white leading-6 tracking-wider text-sm mt-2">
                        <span>
                            &nbsp;&nbsp;&nbsp;&nbsp;Music, Art, Singing,
                            Learning, Travelling
                        </span>
                    </div>
                </div>
                {/* Social Media */}
                <div className="flex flex-col mt-12">
                    <h1 className="text-white border-b-4 border-gray-500 w-28 text-xl font-bold">
                        On the web
                    </h1>
                    <div className="text-white leading-6 tracking-wider text-sm mt-6">
                        <p className="ml-3">
                            <img
                                className="inline w-6"
                                src={'/src/images/github.png'}
                            />
                            <span className="ml-3">@pufferbommy</span>
                        </p>
                        <p className="ml-3">
                            <img
                                className="inline w-6"
                                src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/172px-Twitter_bird_logo_2012.svg.png"
                            />
                            <span className="ml-3">@pufferbommy</span>
                        </p>
                        <p className="ml-3">
                            <img
                                className="inline w-6"
                                src="https://cdn.icon-icons.com/icons2/2037/PNG/512/ig_instagram_media_social_icon_124260.png"
                            />
                            <span className="ml-3">@pufferbommy</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
