import { RiGithubFill, RiTwitterFill, RiInstagramFill } from 'react-icons/ri'
import SocialItem from './SocialItem'
import TopicHeading from './TopicHeading'
import { Fragment, useState } from 'react'
import Cat from '../images/cat.png'

const Content = () => {
  const [isRotate, setIsRotate] = useState(false)
  const handleClick = () => {
    setIsRotate(!isRotate)
  }
  return (
    <main className="mt-16 flex flex-col gap-8 px-4 md:px-0 md:gap-6 max-w-md md:max-w-lg mx-auto">
      <div className="my-4">
        <img
          onClick={handleClick}
          className={`${
            isRotate
              ? 'animate-spin'
              : 'hover:scale-105 transition duration-300'
          } w-1/2 mx-auto cursor-pointer`}
          alt="Cat"
          src={Cat}
          draggable="false"
        />
      </div>
      <div className="bg-gray-200 dark:bg-gray-800 rounded-lg py-4 px-10">
        <h2 className="font-medium text-black dark:text-white text-center">
          Hello, I'm a newbie developer based in Thailand!
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-black text-3xl mt-4 font-bold dark:text-white">
          Panyawat Kaedpol
        </h2>
        <p className="text-black ml-0 sm:ml-4 dark:text-white text-sm">
          I'm {new Date().getFullYear() - 2001} years old and you can call me
          Bomb.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <TopicHeading title="Bio" />
        <div className="text-black dark:text-white leading-6 tracking-wider ml-0 sm:ml-4 text-sm mt-2">
          <span className="flex gap-[1.15rem]">
            <h1 className="font-semibold">2001</h1>
            <p>Born in Yala, Thailand.</p>
          </span>
          <span className="flex gap-4">
            <h1 className="font-semibold">2004</h1>
            <p>Moved to Phatthalung, Thailand.</p>
          </span>
          <span className="flex gap-4">
            <h1 className="font-semibold">2022</h1>
            <p>I'm currenly in my third year studying computer science.</p>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <TopicHeading title="Skills" />
        <div className="text-black dark:text-white leading-6 ml-0 sm:ml-4 tracking-wider text-sm mt-2">
          <div>
            <h1 className="font-semibold inline">Languages: </h1>
            <span className="capitalize">Javascript, html, css, java, c++</span>
          </div>
          <div>
            <h1 className="font-semibold inline">Libraries & Frameworks: </h1>
            <span className="capitalize">React, express, tailwind</span>
          </div>
          <div>
            <h1 className="font-semibold inline">Tools: </h1>
            <span className="capitalize">
              Vscode, git & github, command line, adobe photoshop, figma
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <TopicHeading title="I ♥" />
        <p className="text-black ml-0 sm:ml-4 dark:text-white leading-6 tracking-wider capitalize text-sm mt-2">
          Coding, music, art, singing, learning, travelling
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <TopicHeading title="On the web" />
        <div>
          <SocialItem
            icon={<RiGithubFill size="1.25rem" />}
            destination="https://github.com/pufferbommy"
            name="@pufferbommy"
          />
          <SocialItem
            icon={<RiTwitterFill size="1.25rem" />}
            destination="https://twitter.com/pufferbommy"
            name="@pufferbommy"
          />
          <SocialItem
            icon={<RiInstagramFill size="1.25rem" />}
            destination="https://www.instagram.com/pufferbommy"
            name="@pufferbommy"
          />
        </div>
      </div>
    </main>
  )
}

export default Content
